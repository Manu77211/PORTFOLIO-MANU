'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import LogoLoop from './LogoLoop';
import TypingAnimation from './TypingAnimation';
import { 
  ReactIcon, 
  NextIcon, 
  TypeScriptIcon, 
  PythonIcon, 
  NodeIcon, 
  MongoDBIcon, 
  PostgreSQLIcon, 
  FirebaseIcon, 
  TailwindIcon, 
  DockerIcon 
} from './icons/TechIcons';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [cardsInView, setCardsInView] = useState(false);

  // Tech logos for the loop
  const techLogos = [
    { node: <ReactIcon size={35} className="transition-transform duration-300 hover:scale-110" />, title: 'React' },
    { node: <NextIcon size={35} className="transition-transform duration-300 hover:scale-110" />, title: 'Next.js' },
    { node: <TypeScriptIcon size={35} className="transition-transform duration-300 hover:scale-110" />, title: 'TypeScript' },
    { node: <PythonIcon size={35} className="transition-transform duration-300 hover:scale-110" />, title: 'Python' },
    { node: <NodeIcon size={35} className="transition-transform duration-300 hover:scale-110" />, title: 'Node.js' },
    { node: <MongoDBIcon size={35} className="transition-transform duration-300 hover:scale-110" />, title: 'MongoDB' },
    { node: <PostgreSQLIcon size={35} className="transition-transform duration-300 hover:scale-110" />, title: 'PostgreSQL' },
    { node: <FirebaseIcon size={35} className="transition-transform duration-300 hover:scale-110" />, title: 'Firebase' },
    { node: <TailwindIcon size={35} className="transition-transform duration-300 hover:scale-110" />, title: 'Tailwind' },
    { node: <span className="text-3xl">🤖</span>, title: 'AI/ML' },
    { node: <span className="text-3xl">☁️</span>, title: 'Cloud' },
    { node: <DockerIcon size={35} className="transition-transform duration-300 hover:scale-110" />, title: 'Docker' },
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
      icon: 'react',
      title: 'Full-Stack Development',
      description: 'Building end-to-end web applications using React, Next.js, Node.js, Express, TypeScript, and Python, with a growing focus on backend logic and system structure.',
      color: 'purple'
    },
    {
      icon: '🚀',
      title: 'Problem-Driven Development',
      description: 'Experience from hackathons, competitive programming, and project work that emphasizes quick learning, iteration, and working under constraints.',
      color: 'blue'
    },
    {
      icon: 'design',
      title: 'Practical UI Development',
      description: 'Creating clean, functional user interfaces that support application logic, prioritizing usability and responsiveness over heavy visual complexity.',
      color: 'cyan'
    },
    {
      icon: '✅',
      title: 'Code Quality & Growth Mindset',
      description: 'Writing readable, maintainable code while continuously improving through debugging, refactoring, open-source contributions, and feedback.',
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; text: string; shadow: string }> = {
      purple: { border: 'border-cyan-700/30 hover:border-cyan-700/60', text: 'text-cyan-500', shadow: 'hover:shadow-cyan-800/20' },
      blue: { border: 'border-cyan-700/30 hover:border-cyan-700/60', text: 'text-cyan-400', shadow: 'hover:shadow-cyan-900/20' },
      cyan: { border: 'border-cyan-700/30 hover:border-cyan-700/60', text: 'text-cyan-500', shadow: 'hover:shadow-cyan-950/20' },
      green: { border: 'border-green-500/30 hover:border-green-400/60', text: 'text-green-400', shadow: 'hover:shadow-green-500/20' }
    };
    return colors[color] || colors.purple;
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-950 via-cyan-950/30 to-slate-900 pt-24 md:pt-32">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-slate-800/30 rounded-full blur-xl animate-pulse shadow-lg shadow-cyan-800/30"></div>
          <div className="floating-element absolute top-40 right-20 w-32 h-32 bg-cyan-900/20 rounded-full blur-xl animate-pulse delay-1000 shadow-lg shadow-cyan-900/30"></div>
          <div className="floating-element absolute bottom-40 left-1/4 w-24 h-24 bg-slate-800/30 rounded-full blur-xl animate-pulse delay-2000 shadow-lg shadow-cyan-950/30"></div>
          <div className="floating-element absolute bottom-20 right-1/3 w-16 h-16 bg-slate-800/30 rounded-full blur-xl animate-pulse delay-3000 shadow-lg shadow-cyan-800/30"></div>
          <div className="floating-element absolute top-1/2 left-1/2 w-28 h-28 bg-slate-800/30 rounded-full blur-xl animate-pulse delay-500 shadow-lg shadow-cyan-800/30"></div>

          {/* Additional glowing orbs */}
          <div className="floating-element absolute top-1/3 right-1/4 w-12 h-12 bg-linear-to-r from-cyan-600 to-teal-500 rounded-full blur-md animate-pulse delay-1500 shadow-lg shadow-cyan-900/50"></div>
          <div className="floating-element absolute bottom-1/3 left-1/3 w-18 h-18 bg-linear-to-r from-cyan-900 to-cyan-900 rounded-full blur-md animate-pulse delay-2500 shadow-lg shadow-cyan-900/50"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 px-6 max-w-7xl mx-auto">
          {/* Hero Grid Layout - Photo on Left, Content on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            
            {/* Left Side - Photo */}
            <div className="relative animate-fade-in-up order-2 lg:order-1">
              <div className="relative w-80 md:w-96 lg:w-112.5 mx-auto group">
                {/* Professional Card Design */}
                <div className="relative bg-linear-to-br from-cyan-950/40 via-slate-950 to-blue-900/30 p-8 rounded-3xl border border-cyan-700/30 shadow-2xl shadow-cyan-800/20 group-hover:shadow-cyan-800/40 transition-all duration-500 group-hover:scale-[1.02]">
                  
                  {/* Hexagonal photo frame */}
                  <div className="relative mx-auto" style={{ width: '280px', height: '280px' }}>
                    {/* Hexagon clip path container */}
                    <div className="relative w-full h-full">
                      {/* Glowing border effect */}
                      <div className="absolute inset-0 bg-linear-to-br from-cyan-800 via-cyan-900 to-cyan-950 opacity-60 group-hover:opacity-80 transition-opacity duration-500" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
                      
                      {/* Inner photo container */}
                      <div className="absolute inset-[3px] bg-linear-to-br from-gray-950 to-slate-950 overflow-hidden group-hover:scale-105 transition-transform duration-500" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                        {/* Photo */}
                        <Image 
                          src="/manu1.jpeg" 
                          alt="Manu S" 
                          fill
                          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 40vw, 450px"
                          className="object-cover"
                          style={{ objectPosition: 'center 35%' }}
                          priority
                        />
                        
                        {/* Shimmer overlay */}
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                    </div>
                    
                    {/* Corner accents */}
                    <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-700 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-cyan-700 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-cyan-700 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-700 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  
                  {/* Professional info badge */}
                  <div className="mt-6 text-center">
                    <div className="inline-block bg-linear-to-r from-cyan-950/60 to-cyan-900/40 backdrop-blur-sm px-6 py-2 rounded-full border border-cyan-700/30">
                      <p className="text-cyan-400 text-sm font-semibold tracking-wider">FULL-STACK DEVELOPER</p>
                    </div>
                  </div>
                  
                  {/* Tech stack indicators */}
                  <div className="mt-4 flex justify-center gap-3">
                    <div className="w-2 h-2 bg-cyan-800 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-cyan-900 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                    <div className="w-2 h-2 bg-cyan-950 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                  
                  {/* Glow effect behind card */}
                  <div className="absolute inset-0 bg-linear-to-br from-cyan-800/20 via-cyan-900/20 to-blue-950/20 rounded-3xl blur-2xl -z-10 group-hover:blur-3xl transition-all duration-500"></div>
                </div>
                

              </div>
            </div>
            
            {/* Right Side - Content */}
            <div className="text-center lg:text-left order-1 lg:order-2 animate-fade-in-up delay-150">
              <div className="mb-6">
                <p className="text-cyan-500 text-lg mb-2 tracking-widest uppercase font-medium">Hello, I&apos;m</p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-slate-950 bg-linear-to-r from-cyan-600 via-teal-500 to-cyan-700 bg-clip-text text-transparent mb-4 drop-shadow-2xl">
                  Manu S
                </h1>
                <div className="flex justify-center lg:justify-start mb-4">
                  <div className="h-1 w-24 bg-linear-to-r from-cyan-800 via-cyan-900 to-cyan-950 rounded-full"></div>
                </div>
              </div>
              
              {/* Tagline */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300 mb-4">
                  <TypingAnimation 
                    titles={[
                      "Full Stack Developer",
                      "AI/ML Enthusiast",
                      "Open Source Contributor",
                      "Problem Solver"
                    ]}
                    typingSpeed={100}
                    deletingSpeed={50}
                    pauseDuration={2000}
                    className="bg-linear-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent"
                  />
                </h2>
                <p className="text-lg text-gray-500 max-w-xl mx-auto lg:mx-0">
                  Building real-world web applications and AI-powered tools through hands-on projects
                </p>
              </div>

              <p className="text-base md:text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                B.Tech student actively developing full-stack applications using modern technologies, with a strong interest in backend systems, APIs, and practical AI integrations. I focus on learning by building, experimenting, and improving through real use cases.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a href="/projects" className="group relative bg-linear-to-r from-cyan-600 to-teal-500 text-gray-200 font-semibold py-4 px-10 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-800/50 hover:shadow-cyan-900/70">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    View My Work
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-cyan-800 to-cyan-950 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="mailto:manu.772110@gmail.com" className="group border-2 border-cyan-700/50 text-cyan-400 font-semibold py-4 px-10 rounded-full hover:bg-gray-800/20 hover:border-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Let&apos;s Connect
                </a>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AI / Automation'].map((tech, i) => (
                  <div key={i} className="bg-gray-900/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-cyan-700/30 text-gray-400 text-xs font-medium hover:border-cyan-700/60 hover:text-gray-200 transition-colors duration-300">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up delay-1000 text-center">
            <p className="text-gray-600 text-sm">
              Built with Next.js 16 + TypeScript
            </p>
          </div>
        </div>

      </section>

      {/* Stats Section */}
      <section className="py-16 bg-linear-to-br from-cyan-950/20 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-600 via-teal-500 to-cyan-700 bg-clip-text text-transparent mb-2">
                25+
              </div>
              <div className="text-gray-500 text-sm md:text-base">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-600 via-teal-500 to-cyan-700 bg-clip-text text-transparent mb-2">
                1+
              </div>
              <div className="text-gray-500 text-sm md:text-base">Years of Practical Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-600 via-teal-500 to-cyan-700 bg-clip-text text-transparent mb-2">
                7+
              </div>
              <div className="text-gray-500 text-sm md:text-base">Certifications & Programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-600 via-teal-500 to-cyan-700 bg-clip-text text-transparent mb-2">
                10+
              </div>
              <div className="text-gray-500 text-sm md:text-base">Technologies Used</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Floating Cards */}
      <section className="py-20 bg-linear-to-br from-slate-950 via-cyan-950/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">
              Built through consistent learning and real project experience
            </h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              Focused on applying modern tools to solve real problems, not just following tutorials
            </p>
          </div>

          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {featureCards.map((card, index) => {
              const colors = getColorClasses(card.color);
              const renderIcon = () => {
                if (card.icon === 'react') return <ReactIcon size={50} className="transition-transform duration-300 group-hover:scale-110" />;
                if (card.icon === 'design') return <span className="text-4xl">🎨</span>;
                return <span className="text-4xl">{card.icon}</span>;
              };
              
              return (
                <div
                  key={index}
                  className={`floating-card ${cardsInView ? 'in-view floating' : ''} bg-linear-to-br from-cyan-950/30 via-slate-950 to-blue-950/20 p-8 rounded-2xl border ${colors.border} transition-all duration-500 hover:scale-105 hover:shadow-2xl ${colors.shadow} cursor-pointer group`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <div className={`${colors.text} mb-4 transform transition-transform duration-300`}>
                    {renderIcon()}
                  </div>
                  <h3 className="text-xl font-bold text-gray-200 mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-cyan-900 group-hover:to-cyan-900 group-hover:bg-clip-text transition-all duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack Section with Logo Loop */}
      <section className="py-20 bg-linear-to-br from-slate-900 via-cyan-950/30 to-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">
              Built on a foundation of fast, production-grade tooling
            </h2>
            <p className="text-gray-500 text-lg">
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
            <h3 className="text-2xl font-bold text-gray-200 mb-8">Powered By</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-linear-to-br from-cyan-950/30 via-slate-950 to-blue-950/20 p-8 rounded-2xl border border-cyan-700/20 text-center">
              <div className="flex justify-center mb-4">
                <ReactIcon size={60} className="transition-transform duration-300 hover:scale-110" />
              </div>
              <h4 className="text-xl font-bold text-gray-200 mb-3">React</h4>
              <p className="text-gray-500 text-sm">
                The library for web and native user interfaces. Building dynamic and interactive UIs with the latest React features.
              </p>
            </div>

            <div className="bg-linear-to-br from-cyan-950/30 via-slate-950 to-blue-950/20 p-8 rounded-2xl border border-cyan-700/20 text-center">
              <div className="flex justify-center mb-4">
                <NextIcon size={60} className="transition-transform duration-300 hover:scale-110" />
              </div>
              <h4 className="text-xl font-bold text-gray-200 mb-3">Next.js</h4>
              <p className="text-gray-500 text-sm">
                Production-ready React framework with full-stack capabilities, optimized for performance and SEO.
              </p>
            </div>

            <div className="bg-linear-to-br from-cyan-950/30 via-slate-950 to-blue-950/20 p-8 rounded-2xl border border-cyan-700/20 text-center">
              <div className="text-cyan-500 text-5xl mb-4">🚀</div>
              <h4 className="text-xl font-bold text-gray-200 mb-3">Modern Stack</h4>
              <p className="text-gray-500 text-sm">
                TypeScript, Tailwind CSS, Node.js, and cloud technologies for scalable, maintainable applications.
              </p>
            </div>
          </div>

          {/* Explore Work CTA */}
          <div className="text-center">
            <a href="/projects" className="inline-block bg-linear-to-r from-cyan-600 to-teal-500 text-gray-200 font-semibold py-4 px-8 rounded-full hover:from-cyan-800 hover:to-cyan-950 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-800/25">
              Explore My Work
            </a>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-linear-to-br from-slate-950 via-cyan-950/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">
              Developer Community
            </h2>
            <p className="text-gray-500 text-lg">
              Connect & Collaborate
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-200 mb-6">
                Building connections with fellow developers through open source contributions and community engagement.
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-400">Active Contributing</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-cyan-800 rounded-full"></div>
                  <span className="text-gray-400">Open Source</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-500 mb-1">🚀</div>
                  <div className="text-2xl font-bold text-gray-200">25+</div>
                  <div className="text-gray-500 text-sm">Repositories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">⭐</div>
                  <div className="text-2xl font-bold text-gray-200">157</div>
                  <div className="text-gray-500 text-sm">Contributions</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-gray-800/20 border border-cyan-700/30 text-cyan-400 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-cyan-900/10 border border-cyan-700/30 text-cyan-500 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-gray-500/10 border border-gray-500/30 text-gray-400 px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 px-3 py-1 rounded-full text-sm">Python</span>
              </div>

              <a href="https://github.com/Manu77211" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-slate-900 hover:bg-gray-700 text-gray-200 px-6 py-3 rounded-full transition-colors">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            </div>

            <div className="bg-linear-to-br from-cyan-950/30 via-slate-950 to-blue-950/20 p-8 rounded-2xl border border-cyan-700/20">
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">📊</div>
                <h4 className="text-xl font-bold text-gray-200 mb-2">GitHub</h4>
                <p className="text-gray-500">@Manu77211</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Last year</span>
                  <span className="text-green-400 font-semibold">157 contributions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Stars</span>
                  <span className="text-yellow-400 font-semibold">10+ ⭐</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Repositories</span>
                  <span className="text-cyan-400 font-semibold">25 repos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-slate-900 via-cyan-950/30 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-6">
            Ready to bring your ideas to life?
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate and build something amazing together. I'm always excited to work on new projects and challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/projects" className="bg-linear-to-r from-cyan-600 to-teal-500 text-gray-200 font-semibold py-4 px-8 rounded-full hover:from-cyan-800 hover:to-cyan-950 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-800/25">
              View My Work
            </a>
            <a href="mailto:manu.772110@gmail.com" className="border-2 border-cyan-700 text-cyan-400 font-semibold py-4 px-8 rounded-full hover:bg-cyan-900 hover:text-slate-950 transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
