'use client';

import { useState, useEffect, Suspense, lazy } from 'react';

// Welcome is imported directly for instant load - it's lightweight
import Welcome from '../components/Welcome';

// Lazy load heavy components - they load during welcome screen
const Navbar = lazy(() => import('../components/Navbar'));
const Hero = lazy(() => import('../components/Hero'));
const Footer = lazy(() => import('../components/Footer'));

// This persists during SPA navigation but resets on actual page refresh
let welcomeShownThisPageLoad = false;

export default function Home() {
  // Show welcome only on fresh page load/refresh, not on SPA navigation back
  const [showWelcome, setShowWelcome] = useState(!welcomeShownThisPageLoad);
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
    welcomeShownThisPageLoad = true;
    setShowWelcome(false);
  };

  // Show welcome immediately - it's the first thing that loads
  if (showWelcome) {
    return <Welcome onComplete={handleWelcomeComplete} />;
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Suspense fallback={null}>
        <Navbar />
        <Hero />
        <Footer />
      </Suspense>
    </div>
  );
}
