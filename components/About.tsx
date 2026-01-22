'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ReactIcon, NextIcon, TypeScriptIcon, NodeIcon, PythonIcon, MongoDBIcon } from './icons/TechIcons';
import Link from 'next/link';

// Custom hook for scroll-triggered animations with direction support
function useScrollReveal(options = { threshold: 0.15 }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [options]);

  return { ref, isVisible };
}

// Journey Card with individual scroll animation
function JourneyCard({ 
  item, 
  index, 
  isLeft 
}: { 
  item: { year: string; type: string; title: string; subtitle: string; description: string; color: string };
  index: number;
  isLeft: boolean;
}) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  const colorClasses: Record<string, string> = {
    purple: 'border-cyan-700/30 hover:border-cyan-700 hover:shadow-cyan-800/20',
    blue: 'border-cyan-700/30 hover:border-cyan-700 hover:shadow-cyan-900/20',
    cyan: 'border-cyan-700/30 hover:border-cyan-700 hover:shadow-cyan-950/20',
    green: 'border-green-500/30 hover:border-green-400 hover:shadow-green-500/20',
    pink: 'border-cyan-700/30 hover:border-cyan-700 hover:shadow-cyan-800/20',
  };

  return (
    <div 
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-8 ${isLeft ? '' : 'md:flex-row-reverse'}`}
    >
      {/* Card Container */}
      <div className="flex-1 w-full">
        <div 
          className={`
            group relative bg-linear-to-br from-slate-950/90 to-gray-950/70 p-6 rounded-2xl 
            border-2 ${colorClasses[item.color] || colorClasses.purple}
            backdrop-blur-sm max-w-lg
            transition-all duration-700 ease-out
            hover:scale-[1.02] hover:shadow-2xl
            ${isLeft ? 'md:ml-auto' : ''}
            ${isVisible 
              ? 'opacity-100 translate-x-0 rotate-0' 
              : `opacity-0 ${isLeft ? 'translate-x-24 rotate-2' : '-translate-x-24 -rotate-2'}`
            }
          `}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-cyan-800/10 to-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-slate-800/30 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold border border-cyan-700/30">
                {item.year}
              </span>
              <span className="text-gray-500 text-sm">{item.type}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-200 mb-1 group-hover:text-cyan-400 transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-cyan-500/80 text-sm mb-3 font-medium">{item.subtitle}</p>
            <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
          </div>
        </div>
      </div>
      
      {/* Timeline dot with pulse */}
      <div className="hidden md:flex flex-col items-center relative">
        <div 
          className={`absolute w-8 h-8 bg-cyan-800/40 rounded-full transition-all duration-700 ${
            isVisible ? 'animate-ping opacity-100' : 'opacity-0'
          }`} 
          style={{ animationDuration: '2s' }}
        />
        <div 
          className={`w-5 h-5 bg-linear-to-r from-cyan-600 to-teal-500 rounded-full border-4 border-slate-900 z-10 shadow-lg shadow-cyan-800/50 transition-all duration-500 ${
            isVisible ? 'scale-100' : 'scale-0'
          }`}
          style={{ transitionDelay: `${index * 150 + 200}ms` }}
        />
      </div>
      
      <div className="flex-1 hidden md:block" />
    </div>
  );
}

export default function About() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();
  const { ref: techRef, isVisible: techVisible } = useScrollReveal();
  const { ref: journeyHeaderRef, isVisible: journeyHeaderVisible } = useScrollReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

  const journey = [
    {
      year: "2023",
      type: "🎓 Education & Exploration",
      title: "Joined B.Tech in Information Science & Engineering",
      subtitle: "RNS Institute of Technology (RNSIT), Bengaluru",
      description: "Started my engineering journey and explored programming fundamentals, basic web development, and different areas of computer science. This phase was about understanding the field, experimenting with technologies, and gradually developing interest in software development.",
      color: "green"
    },
    {
      year: "2024",
      type: "📚 Foundation Building Phase",
      title: "DSA, Git, and Project Development",
      subtitle: "",
      description: "Began focused preparation in data structures and algorithms and developed consistency in coding practice. Learned Git and GitHub workflows and started building projects to apply concepts beyond academics. This year marked the transition from exploration to structured learning and hands-on execution.",
      color: "blue"
    },
    {
      year: "2025",
      type: "🚀 Hackathons & Project Execution",
      title: "Multiple Hackathons – Finalist in Two",
      subtitle: "",
      description: "Actively participated in multiple hackathons, reaching the finalist stage in two hackathons. Worked on real problem statements involving full-stack development, backend logic, and AI-assisted features. These experiences strengthened rapid prototyping, teamwork, and decision-making under tight deadlines.",
      color: "purple"
    },
    {
      year: "2025",
      type: "🏆 Open Source Contribution",
      title: "Hacktoberfest – Super Contributor",
      subtitle: "",
      description: "Contributed consistently to open-source repositories during Hacktoberfest and earned the Super Contributor badge. Gained experience working with real-world codebases, pull requests, issue discussions, and collaborative development workflows.",
      color: "cyan"
    },
    {
      year: "2025",
      type: "💻 Competitive Programming & Coding Challenges",
      title: "TCS CodeVita – Round 1",
      subtitle: "",
      description: "Participated in TCS CodeVita and successfully cleared Round 1 with an approximate rank of ~2500. Continued participating in online coding challenges to improve algorithmic thinking, speed, and accuracy.",
      color: "pink"
    },
    {
      year: "2025",
      type: "🧠 Continuous Learning & Growth",
      title: "Full-Stack, Backend & AI Tooling",
      subtitle: "",
      description: "Built and iterated on multiple full-stack projects with increasing focus on backend systems, API design, authentication flows, and practical AI/automation use cases. Continued refining development practices through debugging, refactoring, and learning from real implementation challenges.",
      color: "cyan"
    }
  ];

  const techStack = [
    { name: "React", icon: <ReactIcon size={24} />, level: 95 },
    { name: "Next.js", icon: <NextIcon size={24} />, level: 85 },
    { name: "TypeScript", icon: <TypeScriptIcon size={24} />, level: 80 },
    { name: "Node.js", icon: <NodeIcon size={24} />, level: 85 },
    { name: "Python", icon: <PythonIcon size={24} />, level: 75 },
    { name: "MongoDB", icon: <MongoDBIcon size={24} />, level: 80 },
  ];

  return (
    <section id="about" className="py-20 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Section with Enhanced Animations */}
        <div ref={heroRef} className="relative mb-32">
          {/* Animated background orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-gray-800/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-950/5 rounded-full blur-3xl" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left side - Animated Avatar */}
            <div 
              className={`relative transition-all duration-1000 ease-out ${
                heroVisible 
                  ? 'opacity-100 translate-x-0 rotate-0' 
                  : 'opacity-0 -translate-x-20 -rotate-6'
              }`}
            >
              <div className="relative w-80 h-80 mx-auto group">
                {/* Animated rings */}
                <div className="absolute inset-[-20px] rounded-full border-2 border-cyan-700/30 animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-[-40px] rounded-full border border-cyan-700/20 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
                <div className="absolute inset-[-60px] rounded-full border border-cyan-700/10 animate-spin" style={{ animationDuration: '40s' }} />
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-linear-to-br from-cyan-800 via-cyan-900 to-cyan-950 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                
                {/* Main avatar */}
                <div className="relative w-full h-full bg-linear-to-br from-gray-950 to-slate-950 rounded-full border-4 border-cyan-700/30 flex items-center justify-center overflow-hidden group-hover:border-cyan-700/60 transition-all duration-500 group-hover:scale-105">
                  <Image 
                    src="/manu2.jpeg" 
                    alt="Manu S"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center center' }}
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Floating tech badges */}
                <div className="absolute -top-4 -right-4 bg-slate-800/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-cyan-700/30 text-cyan-400 text-sm animate-bounce flex items-center gap-1.5" style={{ animationDuration: '3s' }}>
                  <ReactIcon size={16} /> React
                </div>
                <div className="absolute -bottom-4 -left-4 bg-cyan-900/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-cyan-700/30 text-cyan-500 text-sm animate-bounce flex items-center gap-1.5" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                  <NextIcon size={16} /> Next.js
                </div>
                <div className="absolute top-1/2 -right-8 bg-slate-800/30 backdrop-blur-sm px-3 py-1 rounded-full border border-cyan-700/30 text-cyan-400 text-sm animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                  AI/ML 🤖
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div 
              className={`space-y-6 transition-all duration-1000 ease-out ${
                heroVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-20'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="relative">
                <p className="text-cyan-500 text-lg mb-2 tracking-widest uppercase font-medium">Hello, I&apos;m</p>
                <h1 className="text-5xl md:text-6xl font-slate-950 text-gray-200 mb-3 relative">
                  Manu S
                  <span className="absolute -bottom-2 left-0 w-24 h-1 bg-linear-to-r from-cyan-600 to-teal-500 rounded-full" />
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold bg-linear-to-r from-cyan-600 via-teal-500 to-cyan-700 bg-clip-text text-transparent">
                  Full-Stack Developer & AI / Automation Enthusiast
                </h2>
              </div>
              
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                B.Tech student specializing in Information Science & Engineering, building full-stack web applications using modern technologies with a strong interest in backend systems, APIs, and practical AI integrations. I focus on learning by building real projects, participating in hackathons, contributing to open source, and consistently improving my problem-solving skills.
              </p>

              <div className="flex flex-wrap gap-4 text-gray-500 text-sm">
                <div className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-full border border-cyan-700/40/50 hover:border-cyan-700/50 transition-colors">
                  <span>📧</span>
                  <a href="mailto:manu.772110@gmail.com" className="hover:text-cyan-500 transition-colors">manu.772110@gmail.com</a>
                </div>
                <div className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-full border border-cyan-700/40/50 hover:border-cyan-700/50 transition-colors">
                  <span>📍</span>
                  <span>Bengaluru, India</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  className="group relative bg-linear-to-r from-cyan-600 to-teal-500 text-gray-200 font-semibold py-3 px-8 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-800/25"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Download Resume
                    <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                </a>
                <Link 
                  href="/projects" 
                  className="group border-2 border-cyan-700/50 text-cyan-400 font-semibold py-3 px-8 rounded-full hover:bg-gray-800/20 hover:border-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  View Projects
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Stats Section */}
        <div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32"
        >
          {[
            { value: "1+", label: "Years of Active Development", icon: "⏱️", delay: 0 },
            { value: "25+", label: "Projects Built", icon: "🚀", delay: 100 },
            { value: "10+", label: "Technologies Used", icon: "🛠️", delay: 200 },
            { value: "🏆", label: "Hackathons, Open Source & Coding Challenges", icon: "🏆", delay: 300 },
          ].map((stat, index) => (
            <div 
              key={index}
              className={`group relative bg-linear-to-br from-slate-950/80 to-gray-950/50 p-8 rounded-3xl border border-cyan-700/40/50 hover:border-cyan-700/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-800/10 backdrop-blur-sm overflow-hidden ${
                statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${stat.delay}ms` }}
            >
              <div className="absolute -top-10 -right-10 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-slate-950 bg-linear-to-r from-cyan-600 via-teal-500 to-cyan-700 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack Showcase */}
        <div 
          ref={techRef}
          className={`mb-32 transition-all duration-1000 ${techVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">🧰 Tech Arsenal</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">The tools and technologies I actively use to build, experiment, and grow</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <div 
                key={index}
                className={`group relative bg-linear-to-br from-slate-950 to-gray-950 p-6 rounded-2xl border border-cyan-700/40/50 hover:border-cyan-700/50 transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer ${
                  techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">{tech.icon}</div>
                <h3 className="text-gray-200 font-semibold mb-2">{tech.name}</h3>
                <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-linear-to-r from-cyan-800 to-cyan-950 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: techVisible ? `${tech.level}%` : '0%',
                      transitionDelay: `${index * 100 + 500}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Section - Cards Animate from Sides */}
        <div className="mb-32">
          <div 
            ref={journeyHeaderRef}
            className={`text-center mb-16 transition-all duration-1000 ${journeyHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">📍 My Journey</h2>
            <p className="text-gray-500">A timeline of learning, experimentation, and growth through hands-on experience</p>
          </div>
          
          <div className="relative">
            {/* Center timeline line with gradient */}
            <div 
              className={`absolute left-1/2 transform -translate-x-1/2 w-1 bg-linear-to-b from-cyan-800 via-cyan-900 to-cyan-950 hidden md:block transition-all duration-1000 rounded-full ${
                journeyHeaderVisible ? 'h-full opacity-100' : 'h-0 opacity-0'
              }`}
              style={{ transitionDelay: '300ms' }}
            />
            
            <div className="space-y-16">
              {journey.map((item, index) => (
                <JourneyCard 
                  key={index}
                  item={item}
                  index={index}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA with Glow */}
        <div 
          ref={ctaRef}
          className={`relative transition-all duration-1000 ${ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          {/* Glow background */}
          <div className="absolute inset-0 bg-linear-to-r from-cyan-800/20 via-cyan-900/20 to-blue-950/20 blur-3xl rounded-3xl" />
          
          <div className="relative text-center bg-linear-to-br from-slate-950/90 to-gray-950/90 p-16 rounded-3xl border border-cyan-700/20 backdrop-blur-sm overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, purple 1px, transparent 1px),
                                  radial-gradient(circle at 75% 75%, blue 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
              }} />
            </div>
            
            <h2 className="relative text-4xl md:text-5xl font-bold text-gray-200 mb-6">
              Let&apos;s Build Something 
              <span className="bg-linear-to-r from-cyan-900 to-cyan-900 bg-clip-text text-transparent"> Meaningful</span>
            </h2>
            <p className="relative text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
              I&apos;m open to internships, collaborations, and projects that involve real problem solving, learning, and growth. If you&apos;re working on something challenging or impactful, I&apos;d be glad to connect.
            </p>
            <div className="relative flex flex-wrap justify-center gap-6">
              <a 
                href="mailto:manu.772110@gmail.com" 
                className="group bg-linear-to-r from-cyan-600 to-teal-500 text-gray-200 font-semibold py-4 px-10 rounded-full hover:shadow-2xl hover:shadow-cyan-800/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get In Touch
              </a>
              <a 
                href="https://github.com/Manu77211" 
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-cyan-700/30 text-gray-400 font-semibold py-4 px-10 rounded-full hover:border-cyan-700 hover:text-cyan-400 hover:bg-gray-800/20 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
