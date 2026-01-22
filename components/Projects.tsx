'use client';

import { ReactIcon } from './icons/TechIcons';

import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Projects() {
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();

  const projects = [
    {
      id: 1,
      title: "SpamShield",
      description: "AI-powered spam detection platform with real-time analysis, threat categorization, and advanced analytics. Built with React, Python Flask, and Gemini AI for comprehensive message security.",
      tech: ["React", "Python", "Flask", "MongoDB", "Gemini AI", "TailwindCSS"],
      image: "🛡️",
      link: "https://github.com/Manu77211/SpamSheild"
    },
    {
      id: 2,
      title: "SecureX",
      description: "Comprehensive cybersecurity platform integrating various security tools for threat detection, automated workflows, and centralized dashboard management.",
      tech: ["React", "Node.js", "MongoDB", "JWT", "Clerk", "Express"],
      image: "🔒",
      link: "https://github.com/Manu77211/SecureX"
    },
    {
      id: 3,
      title: "Level-Up",
      description: "Personal development platform for booking sessions, tracking skill progress, and completing interactive exercises with Firebase real-time data management.",
      tech: ["HTML", "CSS", "JavaScript", "Firebase"],
      image: "📈",
      link: "https://github.com/Manu77211/level-up"
    },
    {
      id: 4,
      title: "Exam Paper Generator",
      description: "Automated question paper generator using Python and Flask. Selects questions based on difficulty levels and formats them into structured exam papers.",
      tech: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
      image: "📝",
      link: "https://github.com/Manu77211/Exam-Paper-Generator-"
    },
    {
      id: 5,
      title: "MERN Practice Projects",
      description: "Collection of 21 React projects from beginner to advanced level, providing hands-on experience with MERN stack development and modern web technologies.",
      tech: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
      image: "react",
      link: "https://github.com/Manu77211/MERN-Practice-Projects"
    },
    {
      id: 6,
      title: "Track India",
      description: "Data visualization platform empowering citizens and policymakers through open data insights for better decision making and transparency.",
      tech: ["TypeScript", "React", "Data Visualization", "Open Data"],
      image: "📊",
      link: "https://github.com/Manu77211/Track-India-Null-Coders"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-linear-to-br from-slate-900 via-cyan-950/20 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={projectsRef} className={`text-center mb-16 ${projectsVisible ? 'animate-on-scroll animate' : 'animate-on-scroll'}`}>
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, combining creativity with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-linear-to-br from-cyan-950/30 via-slate-950 to-blue-950/20 rounded-2xl p-6 border border-cyan-700/20 hover:border-cyan-700/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-800/20 ${
                projectsVisible ? 'animate-on-scroll animate' : 'animate-on-scroll'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image/Icon */}
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                {project.image === 'react' ? (
                  <ReactIcon size={70} />
                ) : (
                  <span className="text-6xl">{project.image}</span>
                )}
              </div>

              {/* Project Content */}
              <h3 className="text-2xl font-bold text-gray-200 mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 4).map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-800/20 text-cyan-400 text-sm px-3 py-1 rounded-full border border-cyan-700/20"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="bg-gray-500/10 text-gray-500 text-sm px-3 py-1 rounded-full border border-gray-500/20">
                    +{project.tech.length - 4} more
                  </span>
                )}
              </div>

              {/* Project Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-500 hover:text-cyan-400 transition-colors group-hover:translate-x-2 transform duration-300"
              >
                View Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Hover Overlay with Details */}
              <div className="absolute inset-0 bg-slate-950/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 rounded-2xl">
                <div className="text-center max-w-sm">
                  <div className="text-5xl mb-4">{project.image}</div>
                  <h4 className="text-xl font-bold text-gray-200 mb-3">{project.title}</h4>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-slate-800/30 text-cyan-600 text-xs px-2 py-1 rounded-full border border-cyan-700/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-linear-to-r from-cyan-600 to-teal-500 text-gray-200 font-semibold py-2 px-4 rounded-full hover:from-cyan-800 hover:to-cyan-950 transition-all duration-300 transform hover:scale-105"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className={`text-center mt-12 ${projectsVisible ? 'animate-on-scroll animate' : 'animate-on-scroll'}`} style={{ animationDelay: '0.8s' }}>
          <button className="bg-linear-to-r from-cyan-600 to-teal-500 text-gray-200 font-semibold py-3 px-8 rounded-full hover:from-cyan-800 hover:to-cyan-950 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-800/25">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
