'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Projects() {
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filters = ['All', 'AI/ML', 'Full Stack', 'Web Dev', 'Firebase'];

  const projects = [
    {
      id: 1,
      title: "SpamShield",
      description: "AI-powered spam detection platform with real-time analysis, threat categorization, and advanced analytics. Built with React, Python Flask, and Gemini AI for 85%+ accuracy in spam detection.",
      tech: ["React", "Python", "Flask", "MongoDB", "Gemini AI", "TailwindCSS"],
      category: ["AI/ML", "Full Stack", "Web Dev"],
      image: "/spamshield.jpeg",
      github: "https://github.com/Manu77211/SpamSheild",
      demo: "https://spam-sheild.vercel.app"
    },
    {
      id: 2,
      title: "Multi-Agent Code Debugger",
      description: "Revolutionary AI-powered debugging system using autonomous multi-agent architecture. Features Scanner, Fixer, and Editor agents working collaboratively with Gemini AI and E2B sandbox for comprehensive code analysis and intelligent fixes.",
      tech: ["Next.js", "TypeScript", "Gemini AI", "E2B Sandbox", "Inngest", "Monaco Editor"],
      category: ["AI/ML", "Full Stack"],
      image: "/multiagent.jpeg",
      github: "https://github.com/Manu77211/multiagent.git",
      demo: "https://multi-agent-code-debugger.vercel.app/"
    },
    {
      id: 3,
      title: "Krishi Sakhi - Agriverse",
      description: "AI-powered farming assistant delivering personalized crop recommendations and agricultural insights to Indian farmers. Integrates Gemini AI for soil analysis, OpenWeather API for forecasts, and market data agents for commodity prices.",
      tech: ["Next.js 15", "TypeScript", "Gemini AI", "OpenWeather API", "TailwindCSS", "Vercel"],
      category: ["AI/ML", "Full Stack", "Web Dev"],
      image: "/agriverse.png",
      github: "https://github.com/Manu77211/Agriverse",
      demo: "https://agriverse-seven.vercel.app/"
    },
    {
      id: 4,
      title: "SecureX",
      description: "Comprehensive cybersecurity education platform providing real-time news, awareness tools, and learning resources. Built with React, Node.js, and Clerk authentication for secure user management.",
      tech: ["React", "Node.js", "MongoDB", "JWT", "Clerk", "Express"],
      category: ["Full Stack", "Web Dev"],
      image: "/securex.png",
      github: "https://github.com/Manu77211/SecureX",
      demo: "https://securex-innovatrix.vercel.app/"
    },
    {
      id: 5,
      title: "Track India",
      description: "Modern Next.js dashboard for tracking Indian infrastructure development with real-time updates, AI chat, and interactive visualizations. Features data-driven insights empowering citizens and policymakers.",
      tech: ["Next.js", "TypeScript", "React", "Recharts", "Leaflet", "TailwindCSS"],
      category: ["Full Stack", "Web Dev"],
      image: "/trackindia.jpeg",
      github: "https://github.com/Manu77211/Track-India-Null-Coders",
      demo: null
    },
    {
      id: 6,
      title: "Level-Up",
      description: "Personal development platform for booking sessions, tracking skill progress, and completing interactive exercises with Firebase real-time data management and responsive design.",
      tech: ["HTML5", "CSS3", "JavaScript", "Firebase", "Real-time DB"],
      category: ["Web Dev", "Firebase"],
      image: "/levelup.png",
      github: "https://github.com/Manu77211/level-up",
      demo: "https://levelup-8635e.web.app/"
    }
  ];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(selectedFilter));

  return (
    <section id="projects" className="py-20 bg-linear-to-br from-cyan-950/20 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={projectsRef} className={`text-center mb-16 ${projectsVisible ? 'animate-on-scroll animate' : 'animate-on-scroll'}`}>
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
            A showcase of my recent work, combining creativity with cutting-edge technology
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-linear-to-r from-cyan-600 to-teal-500 text-white shadow-lg shadow-cyan-800/50'
                    : 'bg-slate-900/50 text-gray-400 border border-cyan-700/30 hover:border-cyan-700/60 hover:text-cyan-400'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-linear-to-br from-cyan-950/30 via-slate-950 to-blue-950/20 rounded-2xl overflow-hidden border border-cyan-700/20 hover:border-cyan-700/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-800/20 ${
                projectsVisible ? 'animate-on-scroll animate' : 'animate-on-scroll'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={project.id === 2}
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/50 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-200 mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-800/20 text-cyan-400 text-sm px-3 py-1 rounded-full border border-cyan-700/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="bg-gray-500/10 text-gray-500 text-sm px-3 py-1 rounded-full border border-gray-500/20">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-linear-to-r from-cyan-600 to-teal-500 text-gray-200 font-semibold py-2 px-4 rounded-lg hover:from-cyan-800 hover:to-cyan-950 transition-all duration-300"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${project.demo ? 'flex-1' : 'w-full'} text-center border-2 border-cyan-700/50 text-cyan-400 font-semibold py-2 px-4 rounded-lg hover:bg-cyan-900/20 hover:border-cyan-700 transition-all duration-300`}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className={`text-center mt-12 ${projectsVisible ? 'animate-on-scroll animate' : 'animate-on-scroll'}`} style={{ animationDelay: '0.8s' }}>
          <a 
            href="https://github.com/Manu77211?tab=repositories" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-linear-to-r from-cyan-600 to-teal-500 text-gray-200 font-semibold py-3 px-8 rounded-full hover:from-cyan-800 hover:to-cyan-950 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-800/25"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
