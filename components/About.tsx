'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Link from 'next/link';

export default function About() {
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();

  const journey = [
    {
      year: "2025",
      type: "💼 Work",
      title: "SpamShield - AI Spam Detection",
      subtitle: "Personal Project",
      description: "Built a comprehensive full-stack spam detection platform with AI-powered analysis, real-time threat categorization, and interactive analytics dashboard. Integrated Gemini AI for intelligent detection with 85%+ accuracy."
    },
    {
      year: "2025",
      type: "💼 Work",
      title: "SecureX",
      subtitle: "Hackathon Project",
      description: "Designed and developed an interactive platform for cybersecurity education, providing real-time news, awareness tools, and learning resources. Built with React, Node.js, Clerk for authentication."
    },
    {
      year: "2025",
      type: "🏆 Achievement",
      title: "Oracle Certifications",
      subtitle: "Oracle University",
      description: "Earned OCI Developer Professional and Oracle Generative AI Professional certifications, demonstrating expertise in cloud development and AI technologies."
    },
    {
      year: "2024",
      type: "🎓 Education",
      title: "B.Tech in Computer Science Engineering",
      subtitle: "Reva University",
      description: "Currently in 3rd year at Reva University, Bengaluru. Specializing in Full Stack Development and Machine Learning. Expected graduation: June 2027."
    },
    {
      year: "2024",
      type: "🏆 Achievement",
      title: "AI/ML Certifications",
      subtitle: "Infosys Springboard",
      description: "Deep Learning For Developers, AI Primer Certification, and Machine Learning for Beginners certifications completed."
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div ref={aboutRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left side - Image */}
          <div className={`relative ${aboutVisible ? 'animate-left animate' : 'animate-left'}`}>
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border-4 border-purple-500/30 flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className={`space-y-6 ${aboutVisible ? 'animate-right animate' : 'animate-right'}`}>
            <div>
              <p className="text-purple-400 text-lg mb-2">Hi, I'm</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Manu S
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Aspiring Backend Engineer & AI Enthusiast
              </h2>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              B.Tech student passionate about building scalable backends, AI-powered tools, and impactful products using MERN Stack and AI/ML frameworks. Turning ideas into code, and code into impact 🚀
            </p>

            <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:manu.772110@gmail.com" className="hover:text-purple-400 transition-colors">manu.772110@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Bengaluru, India</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="/resume.pdf" target="_blank" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                Download Resume
              </a>
              <Link href="/projects" className="border-2 border-purple-400 text-purple-300 font-semibold py-3 px-6 rounded-full hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                View Projects
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-purple-500/20 text-center hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">1+</div>
            <div className="text-gray-400 text-sm">Years of Experience</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-blue-500/20 text-center hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">25+</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-cyan-500/20 text-center hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">10+</div>
            <div className="text-gray-400 text-sm">Skills & Tools</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-green-500/20 text-center hover:border-green-400/40 transition-all duration-300 hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">7+</div>
            <div className="text-gray-400 text-sm">Certifications</div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed text-center mb-8">
              Aspiring Backend Engineer and AI Enthusiast with expertise in building scalable solutions using MERN stack and AI/ML frameworks. Currently pursuing B.Tech in Computer Science, I'm passionate about automation, API development, and creating system-level AI tools that make a real difference.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Full Stack Development", "Machine Learning", "Open Source Contribution", "API Development", "Cloud Technologies", "Fitness & Health Tech"].map((interest, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-xl border border-purple-500/20 text-center hover:border-purple-400/40 transition-all duration-300">
                  <span className="text-gray-300">{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* My Journey Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">My Journey</h2>
          <p className="text-gray-400 text-center mb-12">A timeline of milestones, achievements, and career-defining moments</p>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block"></div>
            
            <div className="space-y-8">
              {journey.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 w-full">
                    <div className={`bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 ${index % 2 === 0 ? 'md:ml-auto' : ''} max-w-lg`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">{item.year}</span>
                        <span className="text-gray-400 text-sm">{item.type}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-purple-400 text-sm mb-3">{item.subtitle}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-gray-900 z-10"></div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-3xl border border-purple-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's work together</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:manu.772110@gmail.com" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
              Send me an email
            </a>
            <Link href="/projects" className="border-2 border-purple-400 text-purple-300 font-semibold py-3 px-8 rounded-full hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
              View my work →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}