'use client';

import Image from 'next/image';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Skills() {
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: "AI/ML",
      icon: "🤖",
      skills: [
        { name: "Hugging Face", level: "BEGINNER", percentage: 60 },
        { name: "LangChain", level: "BEGINNER", percentage: 60 }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Express.js", level: "INTERMEDIATE", percentage: 75 },
        { name: "Flask", level: "INTERMEDIATE", percentage: 75 },
        { name: "Node.js", level: "INTERMEDIATE", percentage: 75 }
      ]
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: [
        { name: "Prisma", level: "ADVANCED", percentage: 85 },
        { name: "PostgreSQL", level: "INTERMEDIATE", percentage: 75 },
        { name: "Supabase", level: "INTERMEDIATE", percentage: 75 },
        { name: "MySQL", level: "INTERMEDIATE", percentage: 75 }
      ]
    },
    {
      title: "Frontend",
      icon: "💻",
      skills: [
        { name: "React", level: "EXPERT", percentage: 95 },
        { name: "Tailwind CSS", level: "EXPERT", percentage: 95 },
        { name: "Framer Motion", level: "INTERMEDIATE", percentage: 75 },
        { name: "Next.js", level: "INTERMEDIATE", percentage: 75 }
      ]
    },
    {
      title: "Languages",
      icon: "💬",
      skills: [
        { name: "C++", level: "INTERMEDIATE", percentage: 75 },
        { name: "JavaScript", level: "INTERMEDIATE", percentage: 75 },
        { name: "TypeScript", level: "INTERMEDIATE", percentage: 75 },
        { name: "Python", level: "INTERMEDIATE", percentage: 75 }
      ]
    },
    {
      title: "Tools",
      icon: "🔧",
      skills: [
        { name: "VS Code", level: "EXPERT", percentage: 95 },
        { name: "Git", level: "ADVANCED", percentage: 85 },
        { name: "GitHub", level: "ADVANCED", percentage: 85 },
        { name: "Postman", level: "ADVANCED", percentage: 85 },
        { name: "Vercel", level: "ADVANCED", percentage: 85 },
        { name: "Vite", level: "ADVANCED", percentage: 85 },
        { name: "CI/CD", level: "INTERMEDIATE", percentage: 75 },
        { name: "Docker", level: "INTERMEDIATE", percentage: 75 },
        { name: "GitHub Actions", level: "INTERMEDIATE", percentage: 75 },
        { name: "GitLab", level: "INTERMEDIATE", percentage: 75 },
        { name: "Playwright", level: "INTERMEDIATE", percentage: 75 }
      ]
    }
  ];

  const certifications = [
    {
      title: "Fundamentals of Artificial Intelligence",
      issuer: "NPTEL",
      year: "2025",
      image: "/fundamentals of ai nptel.png",
      pdf: "/Fundamentals of Artificial Intelligence NPTEL.pdf",
      description: "Comprehensive course on AI fundamentals covering core concepts, algorithms, and practical applications."
    },
    {
      title: "Software Engineering",
      issuer: "NPTEL",
      year: "2025",
      image: "/software engineering nptel.png",
      pdf: "/Software Engineering NPTEL.pdf",
      description: "In-depth study of software engineering principles, methodologies, and best practices."
    },
    {
      title: "Fundamentals of Java Programming",
      issuer: "Coursera",
      year: "2024",
      image: "/coursera funadamental of java programming.png",
      pdf: "/Coursera Fundamentals of java programs.pdf",
      description: "Complete Java programming fundamentals including OOP concepts and practical implementation."
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "IBM",
      year: "2024",
      image: "/ibm intro to ai.png",
      pdf: "/IBM introduction to AI.pdf",
      description: "Introduction to AI concepts, machine learning basics, and real-world applications."
    },
    {
      title: "Computer Networks",
      issuer: "IBM",
      year: "2024",
      image: "/ibm computer networks.png",
      pdf: "/IBM Computer Networks.pdf",
      description: "Comprehensive understanding of computer networking concepts, protocols, and architectures."
    },
    {
      title: "Database and Management",
      issuer: "Meta",
      year: "2024",
      image: "/meta database structure and management.png",
      pdf: "/Meta Database and management.pdf",
      description: "Database design, management, and optimization techniques with practical implementations."
    },
    {
      title: "Software Development",
      issuer: "Coursera",
      year: "2024",
      image: "/Software Development.png",
      pdf: "/Software development.pdf",
      description: "Complete software development lifecycle, agile methodologies, and team collaboration."
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'BEGINNER': return 'from-cyan-900 to-cyan-900';
      case 'INTERMEDIATE': return 'from-yellow-500 to-cyan-900';
      case 'ADVANCED': return 'from-cyan-600 to-teal-500';
      case 'EXPERT': return 'from-cyan-800 to-cyan-800';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="skills" className="py-20 bg-linear-to-br from-cyan-950/20 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={skillsRef} className={`text-center mb-16 ${skillsVisible ? 'animate-on-scroll animate' : 'animate-on-scroll'}`}>
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            My technical skills and professional certifications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`group bg-linear-to-br from-cyan-950/30 via-slate-950 to-blue-950/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-700/20 hover:border-cyan-700/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-800/20 relative overflow-hidden ${skillsVisible ? 'animate-on-scroll animate' : 'animate-on-scroll'}`}
              style={{ 
                animationDelay: `${categoryIndex * 0.1}s`,
                transform: 'perspective(1000px)'
              }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-cyan-900/5 via-transparent to-cyan-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-cyan-800/20 to-transparent rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-right" />
              
              <div className="flex items-center mb-6 relative z-10">
                <span className="text-4xl mr-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                  {category.icon}
                </span>
                <h3 className="text-2xl font-bold text-gray-200 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-cyan-900 group-hover:to-cyan-900 group-hover:bg-clip-text transition-all duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2 group/skill">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-medium group-hover/skill:text-gray-200 transition-colors duration-300">{skill.name}</span>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-linear-to-r ${getLevelColor(skill.level)} text-gray-200 shadow-lg`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="skill-bar w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`skill-bar-fill bg-linear-to-r ${getLevelColor(skill.level)} h-2.5 rounded-full relative`}
                        style={{
                          width: skillsVisible ? `${skill.percentage}%` : '0%',
                          transitionDuration: '1.5s',
                          transitionDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.1)}s`,
                          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]" style={{ backgroundSize: '200% 100%' }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-cyan-800 via-cyan-900 to-cyan-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className={`text-center mb-16 ${skillsVisible ? 'animate-on-scroll animate' : 'animate-on-scroll'}`} style={{ animationDelay: '0.8s' }}>
          <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-green-400 to-cyan-800 bg-clip-text text-transparent mb-4">
            Certifications
          </h2>
          <p className="text-gray-500 text-lg">
            Professional certifications and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group bg-linear-to-br from-cyan-950/30 via-slate-950 to-blue-950/20 rounded-2xl overflow-hidden border border-green-500/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-800/20 ${skillsVisible ? 'animate-on-scroll animate' : 'animate-on-scroll'}`}
              style={{ animationDelay: `${0.9 + (index * 0.1)}s` }}
            >
              {/* Certificate Preview Image */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-900">
                <Image 
                  src={cert.image} 
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                  {cert.year}
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <div className="flex items-start mb-3">
                  <div className="w-12 h-12 bg-linear-to-r from-green-500 to-cyan-900 rounded-full flex items-center justify-center mr-3 shadow-lg shadow-green-500/30 group-hover:shadow-green-500/50 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-bold text-gray-200 group-hover:text-green-400 transition-colors line-clamp-2 mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-cyan-400 text-sm font-semibold">{cert.issuer}</p>
                  </div>
                </div>

                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {cert.description}
                </p>

                {/* Action Button */}
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-linear-to-r from-green-600 to-cyan-600 text-white font-semibold py-2.5 px-4 rounded-lg hover:from-green-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  View Certificate
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
