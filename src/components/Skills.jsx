import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Designs',
      skills: ['Photoshop', 'Figma', 'Canva'],
    },
    {
      category: 'Frontend',
      skills: ['Bootstrap', 'HTML', 'CSS', 'React', 'Vite'],
    },
    {
      category: 'Backend',
      skills: ['ASP.Net', 'C#', 'SQL Server', 'MVC', 'Ajax'],
    },
    {
      category: 'Tools & Cloud',
      skills: ['Git', 'Azure', 'Google Console', 'ReCaptcha'],
    },
    {
      category: 'AI Tools',
      skills: ['ChatGpt', 'Gemini', 'Claude'],
    },
    {
      category: 'Deployment',
      skills: ['Azure', 'Github', 'CI/CD'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="skills" className="py-20 md:py-32 bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-center"
          >
            Skills & Technologies
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 mb-12 md:mb-16 text-center max-w-2xl mx-auto"
          >
            I've worked with a diverse range of technologies to build scalable applications
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={categoryVariants}
                className="glass-effect p-6 md:p-8 rounded-lg hover:shadow-2xl transition-all"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-6">{category.category}</h3>

                <motion.div
                  className="flex flex-wrap gap-3"
                  variants={containerVariants}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      variants={itemVariants}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="px-4 py-2 bg-white bg-opacity-10 backdrop-blur rounded-full text-sm md:text-base font-medium hover:bg-white hover:text-black transition-all cursor-pointer border border-white border-opacity-20"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Proficiency Bars - Mobile First */}
          <motion.div
            variants={categoryVariants}
            className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              { name: 'Frontend Development', level: 80 },
              { name: 'Backend Development', level: 80 },
              { name: 'UI/UX Design', level: 95 },
              { name: 'DevOps & Deployment', level: 45 },
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold text-sm md:text-base">{skill.name}</span>
                  <span className="text-gray-400 text-xs md:text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-white to-gray-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: 'easeOut', delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
