'use client';

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
      title: "OCI Developer Professional",
      issuer: "Oracle University",
      year: "2025",
      status: "Completed",
      featured: true
    },
    {
      title: "Oracle Generative AI Professional",
      issuer: "Oracle University",
      year: "2025",
      status: "Completed",
      featured: true
    },
    {
      title: "Deep Learning For Developers",
      issuer: "Infosys Springboard",
      year: "2025",
      status: "Completed",
      featured: true
    },
    {
      title: "AI Primer Certification",
      issuer: "Infosys Springboard",
      year: "2025",
      status: "Completed",
      featured: true
    },
    {
      title: "Machine Learning for Beginners",
      issuer: "Infosys Springboard",
      year: "2025",
      status: "Completed",
      featured: true
    },
    {
      title: "Java Full Stack Workshop",
      issuer: "Reva University",
      year: "2025",
      status: "Completed",
      featured: true
    },
    {
      title: "DBMS - SQL Advanced and Fundamental topics",
      issuer: "Scaler",
      year: "2025",
      status: "Completed",
      featured: true
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'BEGINNER': return 'from-red-500 to-orange-500';
      case 'INTERMEDIATE': return 'from-yellow-500 to-orange-500';
      case 'ADVANCED': return 'from-blue-500 to-purple-500';
      case 'EXPERT': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/10 to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={skillsRef} className={`text-center mb-16 ${skillsVisible ? 'animate-on-scroll animate' : 'animate-on-scroll'}`}>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My technical skills and professional certifications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden ${skillsVisible ? 'animate-on-scroll animate' : 'animate-on-scroll'}`}
              style={{ 
                animationDelay: `${categoryIndex * 0.1}s`,
                transform: 'perspective(1000px)'
              }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-right" />
              
              <div className="flex items-center mb-6 relative z-10">
                <span className="text-4xl mr-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                  {category.icon}
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2 group/skill">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors duration-300">{skill.name}</span>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-gradient-to-r ${getLevelColor(skill.level)} text-white shadow-lg`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="skill-bar w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`skill-bar-fill bg-gradient-to-r ${getLevelColor(skill.level)} h-2.5 rounded-full relative`}
                        style={{
                          width: skillsVisible ? `${skill.percentage}%` : '0%',
                          transitionDuration: '1.5s',
                          transitionDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.1)}s`,
                          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]" style={{ backgroundSize: '200% 100%' }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className={`text-center mb-16 ${skillsVisible ? 'animate-on-scroll animate' : 'animate-on-scroll'}`} style={{ animationDelay: '0.8s' }}>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Certifications
          </h2>
          <p className="text-gray-400 text-lg">
            Professional certifications and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`cert-card bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-green-500/20 hover:border-green-400/50 transition-all duration-500 group relative overflow-hidden ${skillsVisible ? 'animate-on-scroll animate' : 'animate-on-scroll'}`}
              style={{ animationDelay: `${0.9 + (index * 0.1)}s` }}
            >
              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_infinite]" style={{ backgroundSize: '200% 100%' }} />
              
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="flex items-center mb-4 relative z-10">
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4 shadow-lg shadow-green-500/30 group-hover:shadow-green-500/50 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                    {cert.title}
                  </h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{cert.issuer}</p>
                </div>
              </div>

              <div className="flex justify-between items-center relative z-10 mb-4">
                <span className="text-green-400 text-sm font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  {cert.status}
                </span>
                <span className="text-gray-400 text-sm">{cert.year}</span>
              </div>

              <div className="flex items-center justify-between relative z-10">
                <span className="text-xs text-gray-500 bg-gray-700/50 px-3 py-1.5 rounded-full group-hover:bg-gray-700 transition-colors">
                  ✓ Certificate Valid
                </span>
                <button className="text-green-400 hover:text-green-300 text-sm font-semibold transition-all duration-300 group-hover:translate-x-1 flex items-center gap-1">
                  View Details 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}