'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Smooth flowing aurora ribbons
    const ribbons: Array<{
      lines: THREE.Line[];
      baseY: number;
      color: THREE.Color;
      phase: number;
    }> = [];

    const createAuroraRibbon = (baseY: number, color: THREE.Color, phase: number) => {
      const lines: THREE.Line[] = [];
      
      // Create multiple flowing lines to form a ribbon
      for (let layer = 0; layer < 3; layer++) {
        const points: THREE.Vector3[] = [];
        
        // Create smooth flowing curve
        for (let i = 0; i < 100; i++) {
          const x = (i - 50) * 1.5;
          const y = baseY + layer * 0.5;
          const z = Math.sin(i * 0.1) * 3;
          points.push(new THREE.Vector3(x, y, z));
        }

        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
          color: color,
          transparent: true,
          opacity: 0.4 - layer * 0.1,
          blending: THREE.AdditiveBlending,
          linewidth: 2
        });

        const line = new THREE.Line(geometry, material);
        scene.add(line);
        lines.push(line);
      }

      ribbons.push({ lines, baseY, color, phase });
    };

    // Create multiple aurora ribbons with different colors
    createAuroraRibbon(10, new THREE.Color('#00ff88'), 0);     // Green
    createAuroraRibbon(5, new THREE.Color('#00d4ff'), 1);      // Cyan
    createAuroraRibbon(0, new THREE.Color('#06b6d4'), 2);      // Teal
    createAuroraRibbon(-5, new THREE.Color('#8b5cf6'), 3);     // Purple
    createAuroraRibbon(-10, new THREE.Color('#ec4899'), 4);    // Pink

    // Twinkling stars
    const starCount = 100;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const baseStarPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 60;
      const z = (Math.random() - 0.5) * 40;
      
      starPositions[i * 3] = x;
      starPositions[i * 3 + 1] = y;
      starPositions[i * 3 + 2] = z;
      
      baseStarPositions[i * 3] = x;
      baseStarPositions[i * 3 + 1] = y;
      baseStarPositions[i * 3 + 2] = z;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

    const starMaterial = new THREE.PointsMaterial({
      color: '#ffffff',
      size: 0.8,
      opacity: 0.8,
      transparent: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      map: createGlowTexture()
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Create round glow texture for stars
    function createGlowTexture() {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d')!;
      
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.4)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
      
      return new THREE.CanvasTexture(canvas);
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Animate aurora ribbons with smooth flowing waves
      ribbons.forEach((ribbon, ribbonIndex) => {
        ribbon.lines.forEach((line, layerIndex) => {
          const positions = line.geometry.attributes.position.array as Float32Array;
          
          for (let i = 0; i < positions.length / 3; i++) {
            const idx = i * 3;
            const x = (i - 50) * 1.5;
            
            // Multiple flowing sine waves for organic movement
            const wave1 = Math.sin(time * 2 + i * 0.15 + ribbon.phase) * 3;
            const wave2 = Math.sin(time * 1.5 + i * 0.1 + ribbon.phase + 1) * 2;
            const wave3 = Math.cos(time * 2.5 + i * 0.08) * 1.5;
            
            positions[idx] = x;
            positions[idx + 1] = ribbon.baseY + layerIndex * 0.5 + wave1 + wave2;
            positions[idx + 2] = wave3 + Math.sin(i * 0.1 + time) * 2;
          }
          
          line.geometry.attributes.position.needsUpdate = true;
          
          // Pulsing opacity
          if (Array.isArray(line.material)) {
            line.material.forEach(mat => {
              if ('opacity' in mat) mat.opacity = (0.35 - layerIndex * 0.08) + Math.sin(time * 2 + ribbonIndex) * 0.15;
            });
          } else if ('opacity' in line.material) {
            line.material.opacity = (0.35 - layerIndex * 0.08) + Math.sin(time * 2 + ribbonIndex) * 0.15;
          }
        });
      });

      // Twinkling stars with mouse interaction
      const starPos = starGeometry.attributes.position.array as Float32Array;
      const mousePos = new THREE.Vector3(mouseRef.current.x * 30, mouseRef.current.y * 30, 0);
      
      for (let i = 0; i < starCount; i++) {
        const idx = i * 3;
        const currentPos = new THREE.Vector3(starPos[idx], starPos[idx + 1], starPos[idx + 2]);
        const basePos = new THREE.Vector3(
          baseStarPositions[idx],
          baseStarPositions[idx + 1],
          baseStarPositions[idx + 2]
        );
        
        // Calculate distance from mouse
        const distance = currentPos.distanceTo(mousePos);
        
        // Stars move away from mouse gently
        if (distance < 25) {
          const direction = currentPos.clone().sub(mousePos).normalize();
          const force = (25 - distance) / 25;
          starPos[idx] += direction.x * force * 0.3;
          starPos[idx + 1] += direction.y * force * 0.3;
        }
        
        // Drift back to original position
        starPos[idx] += (basePos.x - starPos[idx]) * 0.02;
        starPos[idx + 1] += (basePos.y - starPos[idx + 1]) * 0.02;
        starPos[idx + 2] += (basePos.z - starPos[idx + 2]) * 0.02;
      }
      starGeometry.attributes.position.needsUpdate = true;
      
      // Twinkling effect
      starMaterial.opacity = 0.7 + Math.sin(time * 3) * 0.2;

      // Slow camera drift
      camera.position.x = Math.sin(time * 0.3) * 2;
      camera.position.y = Math.cos(time * 0.2) * 1;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      ribbons.forEach(ribbon => {
        ribbon.lines.forEach(line => {
          line.geometry.dispose();
          if (Array.isArray(line.material)) {
            line.material.forEach(mat => mat.dispose());
          } else {
            line.material.dispose();
          }
        });
      });

      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
