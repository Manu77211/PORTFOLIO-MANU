'use client';

import { useEffect, useRef, useState } from 'react';
import LogoLoop from './LogoLoop';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [cardsInView, setCardsInView] = useState(false);

  // Tech logos for the loop
  const techLogos = [
    { node: <span className="text-3xl">⚛️</span>, title: 'React' },
    { node: <span className="text-3xl">▲</span>, title: 'Next.js' },
    { node: <span className="text-3xl text-blue-400 font-bold">TS</span>, title: 'TypeScript' },
    { node: <span className="text-3xl">🐍</span>, title: 'Python' },
    { node: <span className="text-3xl text-green-400 font-bold">🟢</span>, title: 'Node.js' },
    { node: <span className="text-3xl">🍃</span>, title: 'MongoDB' },
    { node: <span className="text-3xl text-cyan-400 font-bold">🐘</span>, title: 'PostgreSQL' },
    { node: <span className="text-3xl">🔥</span>, title: 'Firebase' },
    { node: <span className="text-3xl text-purple-400 font-bold">🎨</span>, title: 'Tailwind' },
    { node: <span className="text-3xl">🤖</span>, title: 'AI/ML' },
    { node: <span className="text-3xl">☁️</span>, title: 'Cloud' },
    { node: <span className="text-3xl">🐳</span>, title: 'Docker' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;

      // Move background elements at different speeds
      const elements = heroRef.current.querySelectorAll('.floating-element');
      elements.forEach((element, index) => {
        const speed = (index + 1) * 0.1;
        (element as HTMLElement).style.transform = `translateY(${rate * speed}px)`;
      });

      // Check if cards section is in view
      if (cardsRef.current) {
        const rect = cardsRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8;
        if (isInView && !cardsInView) {
          setCardsInView(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [cardsInView]);

  const featureCards = [
    {
      icon: '⚛️',
      title: 'Full-Stack Development',
      description: 'Building end-to-end web applications with modern technologies like React, Next.js, Node.js, and TypeScript.',
      color: 'purple'
    },
    {
      icon: '🚀',
      title: 'Performance Optimization',
      description: 'Creating fast, scalable applications with optimal user experience and lightning-fast load times.',
      color: 'blue'
    },
    {
      icon: '🎨',
      title: 'User-Centric Design',
      description: 'Designing intuitive interfaces that users love, focusing on accessibility and responsive design.',
      color: 'cyan'
    },
    {
      icon: '✅',
      title: 'Quality Assurance',
      description: 'Writing clean, maintainable code with comprehensive testing and following best practices.',
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; text: string; shadow: string }> = {
      purple: { border: 'border-purple-500/30 hover:border-purple-400/60', text: 'text-purple-400', shadow: 'hover:shadow-purple-500/20' },
      blue: { border: 'border-blue-500/30 hover:border-blue-400/60', text: 'text-blue-400', shadow: 'hover:shadow-blue-500/20' },
      cyan: { border: 'border-cyan-500/30 hover:border-cyan-400/60', text: 'text-cyan-400', shadow: 'hover:shadow-cyan-500/20' },
      green: { border: 'border-green-500/30 hover:border-green-400/60', text: 'text-green-400', shadow: 'hover:shadow-green-500/20' }
    };
    return colors[color] || colors.purple;
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-black">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse shadow-lg shadow-purple-500/30"></div>
          <div className="floating-element absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000 shadow-lg shadow-blue-500/30"></div>
          <div className="floating-element absolute bottom-40 left-1/4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-2000 shadow-lg shadow-cyan-500/30"></div>
          <div className="floating-element absolute bottom-20 right-1/3 w-16 h-16 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-3000 shadow-lg shadow-indigo-500/30"></div>
          <div className="floating-element absolute top-1/2 left-1/2 w-28 h-28 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500 shadow-lg shadow-pink-500/30"></div>

          {/* Additional glowing orbs */}
          <div className="floating-element absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-md animate-pulse delay-1500 shadow-lg shadow-purple-400/50"></div>
          <div className="floating-element absolute bottom-1/3 left-1/3 w-18 h-18 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full blur-md animate-pulse delay-2500 shadow-lg shadow-cyan-400/50"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6 animate-fade-in-up drop-shadow-2xl">
        Full-Stack Developer for Modern web 
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up delay-300 max-w-3xl mx-auto drop-shadow-md">
            Turning ideas into code, and code into impact 🚀. B.Tech Student passionate about MERN Stack, AI/ML, and building scalable backends and impactful products.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-600 mb-12">
            <a href="/projects" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 px-8 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/50 hover:shadow-purple-400/70">
              View Projects
            </a>
            <a href="#contact" className="border-2 border-purple-400 text-purple-300 font-semibold py-4 px-8 rounded-full hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-400/30 hover:shadow-purple-400/60">
              Contact Me
            </a>
          </div>

          <div className="animate-fade-in-up delay-900">
            <p className="text-gray-400 text-sm mb-8">▲ Built with Next.js 15 and cutting-edge technologies</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center shadow-lg shadow-purple-400/50">
            <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                25+
              </div>
              <div className="text-gray-400 text-sm md:text-base">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                1+
              </div>
              <div className="text-gray-400 text-sm md:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                3
              </div>
              <div className="text-gray-400 text-sm md:text-base">Github Followers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                10+
              </div>
              <div className="text-gray-400 text-sm md:text-base">Technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Floating Cards */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built on a foundation of expertise and innovation
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Leveraging modern technologies and best practices to deliver exceptional digital solutions
            </p>
          </div>

          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {featureCards.map((card, index) => {
              const colors = getColorClasses(card.color);
              return (
                <div
                  key={index}
                  className={`floating-card ${cardsInView ? 'in-view floating' : ''} bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border ${colors.border} transition-all duration-500 hover:scale-105 hover:shadow-2xl ${colors.shadow} cursor-pointer group`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <div className={`${colors.text} text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack Section with Logo Loop */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built on a foundation of fast, production-grade tooling
            </h2>
            <p className="text-gray-400 text-lg">
              Technologies that power modern web development
            </p>
          </div>

          {/* Logo Loop */}
          <div className="mb-16">
            <LogoLoop
              logos={techLogos}
              speed={60}
              direction="left"
              logoHeight={48}
              gap={64}
              pauseOnHover={true}
              scaleOnHover={true}
              fadeOut={true}
              fadeOutColor="#111827"
              className="py-4"
            />
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-8">Powered By</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-purple-500/20 text-center">
              <div className="text-purple-400 text-5xl mb-4">⚛️</div>
              <h4 className="text-xl font-bold text-white mb-3">React</h4>
              <p className="text-gray-400 text-sm">
                The library for web and native user interfaces. Building dynamic and interactive UIs with the latest React features.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-blue-500/20 text-center">
              <div className="text-blue-400 text-5xl mb-4">▲</div>
              <h4 className="text-xl font-bold text-white mb-3">Next.js</h4>
              <p className="text-gray-400 text-sm">
                Production-ready React framework with full-stack capabilities, optimized for performance and SEO.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-cyan-500/20 text-center">
              <div className="text-cyan-400 text-5xl mb-4">🚀</div>
              <h4 className="text-xl font-bold text-white mb-3">Modern Stack</h4>
              <p className="text-gray-400 text-sm">
                TypeScript, Tailwind CSS, Node.js, and cloud technologies for scalable, maintainable applications.
              </p>
            </div>
          </div>

          {/* Explore Work CTA */}
          <div className="text-center">
            <a href="/projects" className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 px-8 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
              Explore My Work
            </a>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Developer Community
            </h2>
            <p className="text-gray-400 text-lg">
              Connect & Collaborate
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Building connections with fellow developers through open source contributions and community engagement.
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Active Contributing</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Open Source</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">🚀</div>
                  <div className="text-2xl font-bold text-white">25+</div>
                  <div className="text-gray-400 text-sm">Repositories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">⭐</div>
                  <div className="text-2xl font-bold text-white">157</div>
                  <div className="text-gray-400 text-sm">Contributions</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-purple-500/10 border border-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-blue-500/10 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-gray-500/10 border border-gray-500/30 text-gray-300 px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 px-3 py-1 rounded-full text-sm">Python</span>
              </div>

              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-colors">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-purple-500/20">
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">📊</div>
                <h4 className="text-xl font-bold text-white mb-2">GitHub</h4>
                <p className="text-gray-400">@Manu77211</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Last year</span>
                  <span className="text-green-400 font-semibold">157 contributions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Stars</span>
                  <span className="text-yellow-400 font-semibold">10+ ⭐</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Repositories</span>
                  <span className="text-blue-400 font-semibold">25 repos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to bring your ideas to life?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate and build something amazing together. I'm always excited to work on new projects and challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/projects" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 px-8 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
              View My Work
            </a>
            <a href="#contact" className="border-2 border-purple-400 text-purple-300 font-semibold py-4 px-8 rounded-full hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}