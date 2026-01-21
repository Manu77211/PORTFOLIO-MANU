'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Welcome from '../components/Welcome';

// Lazy load components - they'll be preloaded during welcome screen
const Navbar = dynamic(() => import('../components/Navbar'), { 
  ssr: false,
  loading: () => null 
});
const Hero = dynamic(() => import('../components/Hero'), { 
  ssr: false,
  loading: () => null 
});
const Footer = dynamic(() => import('../components/Footer'), { 
  ssr: false,
  loading: () => null 
});

// This persists during SPA navigation but resets on actual page refresh
let welcomeShownThisPageLoad = false;

export default function Home() {
  // Show welcome only on fresh page load/refresh, not on SPA navigation back
  const [showWelcome, setShowWelcome] = useState(!welcomeShownThisPageLoad);
  const [componentsReady, setComponentsReady] = useState(false);

  // Preload all components while welcome is showing
  useEffect(() => {
    if (showWelcome) {
      // Start loading components immediately in the background
      Promise.all([
        import('../components/Navbar'),
        import('../components/Hero'),
        import('../components/Footer'),
      ]).then(() => {
        setComponentsReady(true);
      });
    }
  }, [showWelcome]);

  const handleWelcomeComplete = () => {
    welcomeShownThisPageLoad = true;
    setShowWelcome(false);
  };

  return (
    <>
      {showWelcome && <Welcome onComplete={handleWelcomeComplete} />}
      <div 
        className="min-h-screen bg-black"
        style={{ 
          visibility: showWelcome ? 'hidden' : 'visible',
          opacity: showWelcome ? 0 : 1,
          transition: 'opacity 0.3s ease-in'
        }}
      >
        {/* Render components even while hidden so they're ready */}
        {(componentsReady || !showWelcome) && (
          <>
            <Navbar />
            <Hero />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}
