'use client';

import { useState, useEffect, Suspense, lazy, useRef } from 'react';
import dynamic from 'next/dynamic';

// Welcome is imported directly for instant load - it's lightweight
import Welcome from '../components/Welcome';
import BackToTop from '../components/BackToTop';

// Dynamic import for ThreeBackground with no SSR
const ThreeBackground = dynamic(() => import('../components/ThreeBackground'), {
  ssr: false
});

// Lazy load heavy components - they load during welcome screen
const Navbar = lazy(() => import('../components/Navbar'));
const Hero = lazy(() => import('../components/Hero'));
const Footer = lazy(() => import('../components/Footer'));

export default function Home() {
  // Check sessionStorage immediately to prevent flash
  const [showWelcome, setShowWelcome] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('welcomeShown') !== 'true';
    }
    return true;
  });
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload all components immediately when page mounts
  useEffect(() => {
    // Start preloading components right away in background
    const preloadComponents = async () => {
      await Promise.all([
        import('../components/Navbar'),
        import('../components/Hero'),
        import('../components/Footer'),
      ]);
      setIsLoaded(true);
    };
    
    preloadComponents();
  }, []);

  const handleWelcomeComplete = () => {
    sessionStorage.setItem('welcomeShown', 'true');
    setShowWelcome(false);
  };

  // Show welcome immediately - it's the first thing that loads
  if (showWelcome) {
    return <Welcome onComplete={handleWelcomeComplete} />;
  }

  return (
    <div className="min-h-screen">
      {/* Three.js animated background */}
      <ThreeBackground />
      
      <Suspense fallback={null}>
        <Navbar />
        <Hero />
        <Footer />
      </Suspense>

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}
