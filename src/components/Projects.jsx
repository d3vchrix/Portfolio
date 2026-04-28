import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      tags: ['ASP.Net', 'C#', 'SQL', 'Razor'],
      link: '#',
      color: 'from-gray-600 to-gray-800',
    },
    {
      title: 'Landing Pages',
      description: 'Responsive designs of various company with automated contact',
      tags: ['ASP.Net', 'C#', 'SMTP', 'Razor', 'Azure', 'SendGrid'],
      link: '#',
      color: 'from-gray-600 to-gray-800',
    },
            {
      title: 'Web Designs',
      description: 'Creative web designs that meets clients expectations ',
      tags: ['Figma', 'Photoshop', 'Adobe'],
      link: '#',
      color: 'from-gray-600 to-gray-800',
    },
    
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="projects" className="py-20 md:py-32 bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 mb-12 md:mb-16"
          >
            Check out some of my recent work
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="h-full bg-gray-900 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
                  {/* Project Image Placeholder */}
                  <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300" />
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-gray-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm md:text-base mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs md:text-sm px-3 py-1 bg-gray-800 rounded-full text-gray-300 group-hover:bg-white group-hover:text-black transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Link Arrow */}
                  <div className="px-6 pb-4">
                    <div className="flex items-center space-x-2 text-white group-hover:translate-x-2 transition-transform">
                      <span className="text-sm font-semibold">View Project</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* View More */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-12 md:mt-16"
          >
            <motion.a
              href="https://github.com/d3vchrix"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white rounded font-semibold hover:bg-white hover:text-black transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
