import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function App() {
  const [dark, setDark] = useState(true);

  const projects = [
    {
      title: 'AI Powered House Price Prediction',
      desc: 'A supervised learning model with data cleaning, training & testing to predict house prices.',
      link: 'https://github.com/hrishit17/House_price_prediction',
    },
    {
      title: 'Lottery Game',
      desc: 'A frontend React game combined with Node.js backend concepts. Interactive UI and game logic.',
      link: 'https://github.com/hrishit17/Lotterygame/upload/main',
    },
  ];

  const skills = [
    'Java', 'Python', 'React.js', 'Node.js', 'PyTorch', 'Anaconda', 'Postman', 'SQL', 'DSA', 'OOPS', 'AI & ML'
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };
  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className={dark ? 'min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100' : 'min-h-screen bg-white text-gray-900'}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header / Hero */}
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Hrishit Mukherjee</h1>
            <p className="mt-1 text-sm opacity-80">Software Engineer • B.Tech CSE (AI & ML) — Meghnad Saha Institute of Technology</p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDark(!dark)}
              className="px-3 py-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
              aria-label="Toggle theme">
              {dark ? 'Dark' : 'Light'}
            </button>

            <a href="mailto:hrishit@example.com" className="p-2 rounded-full bg-white/5 hover:scale-105 transform transition">
              <FaEnvelope />
            </a>

            <a href="https://github.com/hrishit17" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:scale-105 transform transition">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/hrishit-mukherjee-816848295" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:scale-105 transform transition">
              <FaLinkedin />
            </a>
          </div>
        </header>

        {/* Intro card */}
        <motion.section initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 bg-white/5 p-6 rounded-2xl backdrop-blur-md shadow-lg">
            <h2 className="text-xl font-semibold">About Me</h2>
            <p className="mt-3 text-sm leading-relaxed opacity-90">
              I am a software engineer currently in my 4th year pursuing B.Tech CSE (AI & ML) from Meghnad Saha Institute of Technology. I am keen on learning new technologies and building solutions in the domains of Machine Learning and Artificial Intelligence.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="text-xs opacity-80">Location
                <div className="text-sm font-medium">India</div>
              </div>
              <div className="text-xs opacity-80">Education
                <div className="text-sm font-medium">B.Tech CSE (AI & ML)</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-500/20 to-violet-500/20 p-6 rounded-2xl flex flex-col items-center justify-center shadow-lg">
            <div className="w-28 h-28 rounded-full bg-white/6 flex items-center justify-center text-3xl font-bold">HM</div>
            <p className="mt-4 text-sm text-center">Machine Learning & AI Enthusiast · Frontend & Backend</p>
          </div>
        </motion.section>

        {/* Projects */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold">Projects</h3>
            <p className="text-sm opacity-80">Click any card to view the GitHub repo</p>
          </div>

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{once:true}} className="grid sm:grid-cols-2 gap-6">
            {projects.map((p, idx) => (
              <motion.a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="block p-6 rounded-2xl bg-white/5 hover:bg-white/6 transition-shadow shadow-md backdrop-blur-md"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-lg">{p.title}</h4>
                    <p className="mt-2 text-sm opacity-90 leading-relaxed">{p.desc}</p>
                  </div>

                  <div className="ml-4 shrink-0 flex items-center">
                    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="3" width="22" height="18" rx="3" stroke="currentColor" strokeWidth="1.2" opacity="0.6"/>
                      <path d="M8 12h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 16h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
                    </svg>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-xs opacity-80">Tech used: React, Node.js, Python, PyTorch</div>
                  <div className="text-xs font-medium">View on GitHub →</div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <motion.ul variants={container} initial="hidden" whileInView="show" viewport={{once:true}} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {skills.map((s) => (
              <motion.li key={s} variants={item} className="p-3 rounded-xl bg-white/4 backdrop-blur-md text-sm font-medium flex items-center justify-center">
                {s}
              </motion.li>
            ))}
          </motion.ul>
        </section>

        {/* Contact / Footer */}
        <footer className="mt-8 border-t border-white/6 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm">Made with ❤️ by <span className="font-semibold">Hrishit Mukherjee</span></div>
              <div className="text-xs opacity-80 mt-1">B.Tech CSE (AI & ML) • Meghnad Saha Institute of Technology</div>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://github.com/hrishit17" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100">
                <FaGithub /> GitHub
              </a>

              <a href="https://www.linkedin.com/in/hrishit-mukherjee-816848295" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
