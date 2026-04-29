import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const carouselRef = useRef(null);
  const [dragWidth, setDragWidth] = useState(0);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      tags: ['ASP.Net', 'C#', 'SQL', 'Razor'],
      link: '/project/ecommerce-platform',
      color: 'from-gray-600 to-gray-800',
    },
    {
      title: 'Landing Pages',
      description: 'Responsive designs of various company with automated contact',
      tags: ['ASP.Net', 'C#', 'SMTP', 'Razor', 'Azure', 'SendGrid'],
      link: '/project/landing-pages',
      color: 'from-gray-600 to-gray-800',
    },
    {
      title: 'Web Designs',
      description: 'Creative web designs that meets clients expectations',
      tags: ['Figma', 'Photoshop', 'Adobe'],
      link: '/project/web-designs',
      color: 'from-gray-600 to-gray-800',
    },
  ];

  // Dynamically calculate the exact drag constraints based on the screen size
  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setDragWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };

    updateWidth(); // Run on mount
    window.addEventListener('resize', updateWidth); // Update if user resizes window
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-black text-white px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Headers */}
          <div className="max-w-6xl mx-auto px-4 md:px-0">
            <motion.h2
              variants={headerVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
            >
              Featured Projects
            </motion.h2>

            <motion.p
              variants={headerVariants}
              className="text-lg text-gray-400 mb-12 md:mb-16"
            >
              Check out some of my recent work. <span className="text-sm italic text-gray-500">(Drag or swipe to view)</span>
            </motion.p>
          </div>

          {/* Animated Carousel Container */}
          <div ref={carouselRef} className="relative w-full max-w-7xl mx-auto overflow-hidden">
            <motion.div
              className="flex gap-6 md:gap-8 px-4 md:px-8 pb-10 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ right: 0, left: -dragWidth }}
              dragElastic={0.1}
            >
              {projects.map((project, index) => (
                <Link
                  key={index}
                  to={project.link}
                  draggable="false" // Stops the browser from trying to native-drag the link
                  className="min-w-[300px] md:min-w-[400px] group flex-shrink-0 select-none block"
                >
                  {/* GLASSMORPHISM CARD */}
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col transition-all duration-300 pointer-events-none"
                  >
                    <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden border-b border-white/10`}>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300" />
                    </div>

                    <div className="p-6 md:p-8 flex-grow flex flex-col pointer-events-auto cursor-pointer">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-gray-300 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 text-sm md:text-base mb-6 flex-grow leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs md:text-sm px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 group-hover:bg-white/20 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="px-6 md:px-8 pb-6 pointer-events-auto cursor-pointer">
                      <div className="flex items-center space-x-2 text-gray-400 group-hover:text-white group-hover:translate-x-2 transition-all">
                        <span className="text-sm font-semibold">View Project</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>

          {/* View More Button */}
          <motion.div
            variants={headerVariants}
            className="flex justify-center mt-8 md:mt-12"
          >
            <motion.a
              href="https://github.com/d3vchrix"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white/30 bg-white/5 backdrop-blur-sm rounded-xl font-semibold hover:bg-white/10 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
