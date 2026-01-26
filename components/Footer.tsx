export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-cyan-950/20 via-slate-900 to-slate-950 border-t border-cyan-800/20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-linear-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent mb-4">
              Manu
            </h3>
            <p className="text-gray-500 mb-6 max-w-md">
              Full-stack developer focused on building real applications, strengthening backend depth, and integrating AI into practical products.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Manu77211" target="_blank" rel="noopener noreferrer"
                 className="text-gray-500 hover:text-cyan-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/manu-s-dev" target="_blank" rel="noopener noreferrer"
                 className="text-gray-500 hover:text-cyan-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:manu.772110@gmail.com"
                 className="text-gray-500 hover:text-green-400 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-500 hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="/projects" className="text-gray-500 hover:text-cyan-400 transition-colors">Projects</a></li>
              <li><a href="/skills" className="text-gray-500 hover:text-cyan-400 transition-colors">Skills</a></li>
              <li><a href="/profile" className="text-gray-500 hover:text-cyan-400 transition-colors">Profile</a></li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-gray-800/20 border border-cyan-700/30 text-cyan-400 px-2 py-1 rounded">React</span>
              <span className="text-xs bg-cyan-900/10 border border-cyan-700/30 text-cyan-500 px-2 py-1 rounded">Next.js</span>
              <span className="text-xs bg-cyan-950/10 border border-cyan-700/30 text-cyan-400 px-2 py-1 rounded">TypeScript</span>
              <span className="text-xs bg-green-500/10 border border-green-500/30 text-green-300 px-2 py-1 rounded">Node.js</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            © 2025 Manu. Built with Next.js and consistent effort.
          </p>
        </div>
      </div>
    </footer>
  );
}
