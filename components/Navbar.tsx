'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <nav className="fixed top-6 left-4 right-4 z-50 backdrop-blur-xl bg-black/50 border border-purple-500/30 rounded-full px-8 py-4 shadow-2xl shadow-purple-500/20 max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-8 relative z-10">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            M/ Manu
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={`fixed top-6 left-4 right-4 z-50 backdrop-blur-xl border rounded-full px-8 py-4 shadow-2xl max-w-6xl mx-auto transition-all duration-300 ${
      isDark 
        ? 'bg-black/50 border-purple-500/30 shadow-purple-500/20' 
        : 'bg-white/80 border-purple-300/50 shadow-purple-300/30'
    }`}>
      <div className="flex items-center justify-between gap-8 relative z-10">
        <Link 
          href="/"
          className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer select-none"
        >
          M/ Manu
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link 
            href="/projects" 
            className={`transition-all duration-200 px-4 py-2 rounded-full cursor-pointer ${
              isDark 
                ? 'text-gray-300 hover:text-cyan-400 hover:bg-purple-500/20' 
                : 'text-gray-600 hover:text-purple-600 hover:bg-purple-100'
            }`}
          >
            Projects
          </Link>
          <Link 
            href="/skills" 
            className={`transition-all duration-200 px-4 py-2 rounded-full cursor-pointer ${
              isDark 
                ? 'text-gray-300 hover:text-cyan-400 hover:bg-purple-500/20' 
                : 'text-gray-600 hover:text-purple-600 hover:bg-purple-100'
            }`}
          >
            Skills
          </Link>
          <Link 
            href="/profile" 
            className={`transition-all duration-200 px-4 py-2 rounded-full cursor-pointer ${
              isDark 
                ? 'text-gray-300 hover:text-cyan-400 hover:bg-purple-500/20' 
                : 'text-gray-600 hover:text-purple-600 hover:bg-purple-100'
            }`}
          >
            Profile
          </Link>
          <button
            onClick={toggleTheme}
            className={`transition-all duration-300 p-3 rounded-full ml-2 cursor-pointer transform hover:scale-110 ${
              isDark 
                ? 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/20 border border-purple-500/30 hover:border-yellow-400/50' 
                : 'text-gray-600 hover:text-purple-600 hover:bg-purple-100 border border-purple-300/50 hover:border-purple-400'
            }`}
            aria-label="Toggle theme"
          >
            <span className="text-xl transition-transform duration-300 inline-block">
              {isDark ? '☀️' : '🌙'}
            </span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className={`p-2 rounded-full cursor-pointer ${
            isDark 
              ? 'text-gray-300 hover:text-cyan-400 hover:bg-purple-500/20 border border-purple-500/30' 
              : 'text-gray-600 hover:text-purple-600 hover:bg-purple-100 border border-purple-300/50'
          }`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}