'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-4 right-4 z-50 backdrop-blur-xl bg-linear-to-r from-cyan-950/80 via-slate-900/90 to-blue-900/80 border border-cyan-700/30 rounded-full px-8 py-4 shadow-2xl shadow-cyan-800/20 max-w-6xl mx-auto transition-all duration-300 relative">
      {/* Animated glowing border effect */}
      <div className="absolute inset-0 rounded-full pointer-events-none">
        <div className="absolute inset-0 rounded-full border-2 border-transparent animate-border-glow"></div>
      </div>
      
      <style jsx>{`
        @keyframes border-glow {
          0%, 100% {
            box-shadow: 
              0 0 5px #06b6d4,
              inset 0 0 5px #06b6d4;
            border-color: #06b6d4;
          }
          25% {
            box-shadow: 
              5px 0 10px #14b8a6,
              inset 5px 0 10px #14b8a6;
            border-color: #14b8a6;
          }
          50% {
            box-shadow: 
              0 5px 10px #06b6d4,
              inset 0 5px 10px #06b6d4;
            border-color: #06b6d4;
          }
          75% {
            box-shadow: 
              -5px 0 10px #0ea5e9,
              inset -5px 0 10px #0ea5e9;
            border-color: #0ea5e9;
          }
        }
        .animate-border-glow {
          animation: border-glow 3s linear infinite;
        }
      `}</style>
      <div className="flex items-center justify-between gap-8 relative z-10">
        <Link 
          href="/"
          className="text-3xl font-bold bg-linear-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer select-none"
        >
          M/ Manu
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link 
            href="/projects" 
            className="text-gray-400 hover:text-cyan-400 hover:bg-slate-800/30 transition-all duration-200 px-4 py-2 rounded-full cursor-pointer"
          >
            Projects
          </Link>
          <Link 
            href="/skills" 
            className="text-gray-400 hover:text-cyan-400 hover:bg-slate-800/30 transition-all duration-200 px-4 py-2 rounded-full cursor-pointer"
          >
            Skills
          </Link>
          <Link 
            href="/profile" 
            className="text-gray-400 hover:text-cyan-400 hover:bg-slate-800/30 transition-all duration-200 px-4 py-2 rounded-full cursor-pointer"
          >
            Profile
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-gray-400 hover:text-cyan-500 hover:bg-slate-800/30 border border-cyan-700/30 p-2 rounded-full cursor-pointer">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
