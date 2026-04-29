import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [profileImage, setProfileImage] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/users/d3vchrix')
      .then(res => res.json())
      .then(data => setProfileImage(data.avatar_url))
      .catch(err => console.error('Error fetching GitHub profile:', err))
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black text-white px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-[100px] opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-400 rounded-full filter blur-[100px] opacity-10"></div>

      <motion.div
        className="w-full max-w-5xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Content Wrapper */}
          <motion.div className="space-y-6 md:space-y-8 bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl">
            
            {/* UPDATED: Name Animation & Emphasis */}
            <motion.div variants={itemVariants} className="flex flex-col">
              <motion.span 
                className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-medium tracking-wide mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Hey, I'm
              </motion.span>
              
              <motion.h1 
                className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-none"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  scale: 1.02, 
                  textShadow: "0px 0px 20px rgba(255,255,255,0.4)" 
                }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 cursor-default">
                  Christian
                </span>
              </motion.h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed"
            >
              Full-stack developer passionate about building modern web applications with cutting-edge technologies.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-white/30 rounded-xl font-semibold hover:bg-white/10 transition-all shadow-lg backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-all shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* UPDATED: Social Links */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              {/* GitHub */}
              <motion.a
                href="https://github.com/d3vchrix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-white/30 rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                title="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/chris-padullo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-white/30 rounded-full hover:bg-[#0077b5] hover:border-[#0077b5] transition-all backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>

              {/* Facebook */}
              <motion.a
                href="https://www.facebook.com/chris.padullo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-white/30 rounded-full hover:bg-[#1877F2] hover:border-[#1877F2] transition-all backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.66c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10.02 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                </svg>
              </motion.a>

              {/* Viber */}
              <motion.a
                href="viber://chat?number=+639958968636"
                className="w-12 h-12 flex items-center justify-center border border-white/30 rounded-full hover:bg-[#7360f2] hover:border-[#7360f2] transition-all backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Viber"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.2 12.3c-.2-1.7-1-3.2-2.1-4.3-1.1-1.1-2.6-1.9-4.3-2.1-.5-.1-1-.4-1.1-.9-.1-.5.3-1 .8-1.1 2.2-.3 4.2.7 5.7 2.2 1.5 1.5 2.5 3.5 2.2 5.7-.1.5-.6.9-1.1.8-.4-.1-.7-.6-.6-1.1zM18.8 12.6c-.1-1.1-.6-2.1-1.4-2.8-.8-.8-1.8-1.3-2.8-1.4-.5-.1-.8-.5-.8-1s.4-.9.9-.8c1.5.1 2.8.9 3.8 1.9s1.8 2.3 1.9 3.8c.1.5-.3.9-.8 1-.5 0-1-.4-1.1-.9zm-3.6 1c-.1-.5-.4-.9-.8-1.1-.4-.2-.9-.1-1.3.2l-1.4 1.1c-1.3-.6-2.5-1.8-3.1-3.1l1.1-1.4c.3-.4.4-.9.2-1.3-.2-.4-.6-.7-1.1-.8l-2.8-.7c-.5-.1-1 .2-1.2.7l-.8 2.2c-.3 1.1.1 2.3.6 3.3 1.1 2.4 3.1 4.4 5.5 5.5 1 .5 2.2.9 3.3.6l2.2-.8c.5-.2.8-.7.7-1.2l-.7-2.8z"/>
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image Wrapper */}
          <motion.div
            className="flex justify-center items-center"
            variants={imageVariants}
            whileHover="hover"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 before:absolute before:-inset-2 before:bg-white/20 before:rounded-full before:filter before:blur-xl before:opacity-50">
              {profileImage && (
                <motion.img
                  src={profileImage}
                  alt="Profile"
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              )}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero