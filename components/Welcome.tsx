'use client';

import { useState, useEffect } from 'react';

interface WelcomeProps {
  onComplete: () => void;
}

export default function Welcome({ onComplete }: WelcomeProps) {
  const [phase, setPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 1800),
      setTimeout(() => setPhase(4), 2800),
      setTimeout(() => setIsExiting(true), 4200),
      setTimeout(onComplete, 5000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#050510',
        transition: 'all 1s ease-out',
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? 'scale(1.2)' : 'scale(1)',
      }}
    >
      {/* Glowing orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'pulse 4s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'pulse 5s ease-in-out infinite reverse',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'pulse 3s ease-in-out infinite',
        }}
      />

      {/* Particles */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              left: `${(i * 2.5) % 100}%`,
              top: `${(i * 7) % 100}%`,
              borderRadius: '50%',
              background: ['#a855f7', '#3b82f6', '#06b6d4', '#ec4899'][i % 4],
              opacity: 0.6,
              animation: `twinkle ${3 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${(i % 5) * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px' }}>
        {/* M Logo */}
        <div
          style={{
            marginBottom: '32px',
            transition: 'all 1s ease-out',
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? 'scale(1) translateY(0)' : 'scale(0.5) translateY(20px)',
          }}
        >
          <div style={{ position: 'relative', display: 'inline-block' }}>
            {/* Glow */}
            <div
              style={{
                position: 'absolute',
                inset: '-20px',
                background: 'linear-gradient(135deg, #a855f7, #3b82f6, #06b6d4)',
                borderRadius: '32px',
                filter: 'blur(30px)',
                opacity: 0.6,
              }}
            />
            {/* Logo box */}
            <div
              style={{
                position: 'relative',
                width: '120px',
                height: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 50%, #06b6d4 100%)',
                borderRadius: '24px',
                boxShadow: '0 0 60px rgba(139,92,246,0.5), 0 0 100px rgba(59,130,246,0.3)',
              }}
            >
              <span
                style={{
                  fontSize: '72px',
                  fontWeight: 900,
                  color: '#ffffff',
                  textShadow: '0 0 20px rgba(255,255,255,0.5)',
                }}
              >
                M
              </span>
            </div>
            {/* Rotating ring */}
            <div
              style={{
                position: 'absolute',
                inset: '-16px',
                border: '2px solid rgba(168,85,247,0.4)',
                borderRadius: '50%',
                animation: 'spin 8s linear infinite',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-4px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '8px',
                  height: '8px',
                  background: '#a855f7',
                  borderRadius: '50%',
                  boxShadow: '0 0 10px #a855f7',
                }}
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: 'clamp(48px, 10vw, 80px)',
            fontWeight: 900,
            color: '#ffffff',
            marginBottom: '16px',
            transition: 'all 1s ease-out',
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? 'translateY(0)' : 'translateY(30px)',
            textShadow: '0 0 40px rgba(139,92,246,0.6), 0 0 80px rgba(59,130,246,0.4)',
            letterSpacing: '8px',
          }}
        >
          MANU S
        </h1>

        {/* Underline */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              height: '4px',
              borderRadius: '2px',
              background: 'linear-gradient(90deg, #a855f7, #3b82f6, #06b6d4)',
              transition: 'all 1s ease-out',
              width: phase >= 2 ? '200px' : '0px',
              opacity: phase >= 2 ? 1 : 0,
              boxShadow: '0 0 20px rgba(139,92,246,0.5)',
            }}
          />
        </div>

        {/* Tagline */}
        <div
          style={{
            transition: 'all 0.7s ease-out',
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(18px, 4vw, 24px)',
              color: '#e0e7ff',
              marginBottom: '8px',
              letterSpacing: '2px',
              textShadow: '0 0 20px rgba(224,231,255,0.3)',
            }}
          >
            Full-Stack Developer
          </p>
          <p
            style={{
              fontSize: '14px',
              color: '#a5b4fc',
              letterSpacing: '4px',
              textTransform: 'uppercase',
            }}
          >
            Crafting Digital Experiences
          </p>
        </div>

        {/* Tech icons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            marginTop: '40px',
            transition: 'all 0.7s ease-out',
            opacity: phase >= 4 ? 1 : 0,
            transform: phase >= 4 ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          {['⚛️', '▲', '🚀', '💻', '🎨'].map((icon, i) => (
            <span
              key={i}
              style={{
                fontSize: '28px',
                animation: `float ${2 + i * 0.2}s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {icon}
            </span>
          ))}
        </div>

        {/* Loading dots */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '48px',
            transition: 'all 0.5s ease-out',
            opacity: phase >= 4 ? 1 : 0,
          }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
                animation: 'bounce 1.4s ease-in-out infinite',
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Corner decorations */}
      <div style={{ position: 'absolute', top: '24px', left: '24px', width: '60px', height: '60px', borderLeft: '2px solid rgba(168,85,247,0.6)', borderTop: '2px solid rgba(168,85,247,0.6)', borderTopLeftRadius: '16px' }} />
      <div style={{ position: 'absolute', top: '24px', right: '24px', width: '60px', height: '60px', borderRight: '2px solid rgba(59,130,246,0.6)', borderTop: '2px solid rgba(59,130,246,0.6)', borderTopRightRadius: '16px' }} />
      <div style={{ position: 'absolute', bottom: '24px', left: '24px', width: '60px', height: '60px', borderLeft: '2px solid rgba(6,182,212,0.6)', borderBottom: '2px solid rgba(6,182,212,0.6)', borderBottomLeftRadius: '16px' }} />
      <div style={{ position: 'absolute', bottom: '24px', right: '24px', width: '60px', height: '60px', borderRight: '2px solid rgba(168,85,247,0.6)', borderBottom: '2px solid rgba(168,85,247,0.6)', borderBottomRightRadius: '16px' }} />

      {/* CSS Animations */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.1); }
          }
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.3); }
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes bounce {
            0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
            40% { transform: scale(1.3); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}
