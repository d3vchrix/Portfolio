import { motion } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    const currentTime = new Date().toLocaleString()

    try {
      await emailjs.send(
        'service_86m0lbp',
        'template_ilqs1ew',
        {
          client_name: formData.name,
          client_email: formData.email,
          project_interest: "General Inquiry",
          message: formData.message,
          time: new Date().toLocaleString()
        },
        'eYoVpBQAl7cdmqmCY'
      )

      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', message: '' })
      }, 3000)
    } catch (error) {
      console.error('Failed to send email:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

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
    <section id="contact" className="py-20 md:py-32 bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
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
            Get In Touch
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 mb-12 md:mb-16 text-center"
          >
            Have a project in mind? Let's create something amazing together!
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
            variants={containerVariants}
          >
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:christianpadullo@gmail.com"
                    className="flex items-center space-x-3 group hover:text-gray-300 transition-colors"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center group-hover:bg-opacity-20 transition-all">
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-base md:text-lg">christianpadullo@gmail.com</span>
                  </a>

                  <a
                    href="https://github.com/d3vchrix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 group hover:text-gray-300 transition-colors"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center group-hover:bg-opacity-20 transition-all">
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                    <span className="text-base md:text-lg">github.com/d3vchrix</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/chris-padullo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 group hover:text-gray-300 transition-colors"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center group-hover:bg-opacity-20 transition-all">
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                    <span className="text-base md:text-lg">LinkedIn Profile</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Quick Links</h3>
                <a
                  href="https://drive.google.com/file/d/1iHGgw25SajH4GJPFaW_2075EinGNXwtr/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 md:px-6 md:py-3 bg-white bg-opacity-10 rounded hover:bg-opacity-20 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2m0 0v-8m0 8H3m6-6h12" />
                  </svg>
                  <span className="text-sm md:text-base">Download CV</span>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="glass-effect p-6 md:p-8 rounded-lg space-y-4 md:space-y-6"
            >
              <div>
                <label className="block text-sm md:text-base font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white bg-opacity-5 border border-white border-opacity-20 rounded px-4 py-2 md:px-4 md:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm md:text-base font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white bg-opacity-5 border border-white border-opacity-20 rounded px-4 py-2 md:px-4 md:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm md:text-base font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-white bg-opacity-5 border border-white border-opacity-20 rounded px-4 py-2 md:px-4 md:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

             <motion.button
                type="submit"
                disabled={isLoading}
                className={`w-full py-2 md:py-3 rounded font-semibold transition-all ${
                  submitted
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-black hover:bg-gray-200'
                } ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                whileHover={!submitted && !isLoading ? { scale: 1.02 } : {}}
                whileTap={!submitted && !isLoading ? { scale: 0.98 } : {}}
              >
                {isLoading ? 'Sending...' : submitted ? '✓ Message Sent!' : 'Send Message'}
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
