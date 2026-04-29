import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';

// Mock Database 
const projectsData = {
  'ecommerce-platform': {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built from the ground up to handle high-volume traffic and secure transactions. Features include user authentication, a dynamic shopping cart, integration with Stripe for payments, and an admin dashboard for inventory management.',
    tags: ['ASP.Net', 'C#', 'SQL Server', 'Razor Pages', 'Bootstrap'],
    demoUrl: 'https://github.com/d3vchrix',
    screenshots: [
      'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000'
    ]
  },
  'landing-pages': {
    title: 'Landing Pages',
    description: 'A collection of high-converting, responsive landing pages designed for various clients. These pages feature automated contact forms tied to SendGrid, dynamic content loading, and advanced SEO optimization.',
    tags: ['ASP.Net', 'C#', 'SMTP', 'Azure', 'SendGrid'],
    demoUrl: 'https://github.com/d3vchrix',
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000'
    ]
  },
  'web-designs': {
    title: 'Web Designs',
    description: 'A showcase of creative UI/UX designs emphasizing modern aesthetics, accessibility, and intuitive user flows. Designed using industry-standard tools before handoff to development teams.',
    tags: ['Figma', 'Photoshop', 'Adobe XD', 'UI/UX'],
    demoUrl: 'https://github.com/d3vchrix',
    screenshots: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000',
      'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000'
    ]
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  
  // Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); 
  
  // Full-Page Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (projectsData[id]) {
      setProject(projectsData[id]);
      setCurrentIndex(0); 
    }
  }, [id]);

  useEffect(() => {
    if (!project || isHovered || isModalOpen) return; 

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % project.screenshots.length);
    }, 3000); 

    return () => clearInterval(timer); 
  }, [project, isHovered, isModalOpen]);

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const currentTime = new Date().toLocaleString() 
    try {
      await emailjs.send(
        'service_86m0lbp', 
        'template_ilqs1ew', 
        {
          client_name: formData.name,
          client_email: formData.email,
          project_interest: project.title,
          message: formData.message,
          time: currentTime,
        },
        'eYoVpBQAl7cdmqmCY'
      );
      
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#10b981', '#f59e0b', '#ffffff']
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 500);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <Link to="/" className="text-blue-500 hover:text-blue-400 underline">Return to Home</Link>
      </div>
    );
  }

  const getCarouselPosition = (index) => {
    const total = project.screenshots.length;
    if (index === currentIndex) return "center";
    if (index === (currentIndex - 1 + total) % total) return "left";
    if (index === (currentIndex + 1) % total) return "right";
    return "hidden";
  };

  const carouselVariants = {
    center: { x: "0%", scale: 1, zIndex: 10, rotateY: 0, opacity: 1 },
    left: { x: "-45%", scale: 0.75, zIndex: 5, rotateY: 35, opacity: 0.4 },
    right: { x: "45%", scale: 0.75, zIndex: 5, rotateY: -35, opacity: 0.4 },
    hidden: { x: "0%", scale: 0.5, zIndex: 1, rotateY: 0, opacity: 0 }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black text-white selection:bg-white/30 overflow-hidden relative">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-[100px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-gray-400 rounded-full filter blur-[100px] opacity-10 pointer-events-none"></div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-xl border-b border-white/10 z-50 p-4 sm:px-8">
        <Link to="/#projects" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group">
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-semibold">Back to Portfolio</span>
        </Link>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: 3D Timed Glowing Carousel */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center">
            <div 
              className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center" 
              style={{ perspective: '1200px' }}
              onMouseEnter={() => setIsHovered(true)} 
              onMouseLeave={() => setIsHovered(false)} 
            >
              <AnimatePresence initial={false}>
                {project.screenshots.map((img, index) => (
                  <motion.div
                    key={index}
                    // UPDATED: Removed Glassmorphism padding/blur. Added edge-to-edge glowing shadow!
                    className="absolute w-full max-w-lg rounded-3xl overflow-hidden cursor-pointer border border-white/20 shadow-[0_0_40px_rgba(79,70,229,0.5)] transition-shadow duration-500 hover:shadow-[0_0_60px_rgba(79,70,229,0.8)]"
                    variants={carouselVariants}
                    initial={false}
                    animate={getCarouselPosition(index)}
                    transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }} 
                    onClick={() => setCurrentIndex(index)} 
                  >
                    <div className="relative">
                      {/* Very subtle gradient overlay to make the image pop slightly */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-10 mix-blend-overlay" />
                      <img src={img} alt={`${project.title} screenshot ${index + 1}`} className="w-full h-auto object-cover block" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="flex space-x-3 mt-8 z-10">
              {project.screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-12 h-2 rounded-full transition-all duration-500 ${
                    index === currentIndex ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Project Info (Kept Glassmorphism here for readability) */}
          <div className="order-1 lg:order-2 lg:col-span-5 relative">
            <motion.div 
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 leading-tight">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1.5 bg-white/10 border border-white/10 rounded-full text-xs sm:text-sm font-medium text-gray-300 backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="w-12 h-1 bg-white/20 mb-8 rounded-full"></div>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-10">
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" 
                   className="w-full inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-xl font-bold text-lg hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98]">
                  View Live Demo
                </a>
                
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg hover:from-blue-500 hover:to-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                  Let's Build Something Similar
                </button>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Full-Page "Slide Up" Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 via-black to-black flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 sm:p-8 border-b border-white/10">
              <h2 className="text-2xl font-bold text-white">Project Inquiry</h2>
              <button
                onClick={handleCloseModal}
                className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 flex items-center justify-center">
              <div className="w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-12 rounded-3xl shadow-2xl">
                
                {isSubmitted ? (
                  /* SUCCESS SCREEN */
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="text-7xl mb-6">🚀</div>
                    <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                      Message Sent!
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                      Thanks for reaching out! I will review your inquiry and respond within <span className="text-white font-bold">24 hours</span>.
                    </p>
                    <button 
                      onClick={handleCloseModal}
                      className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    >
                      Return to Project Details
                    </button>
                  </motion.div>
                ) : (
                  /* INQUIRY FORM */
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h3 className="text-3xl font-bold mb-2">Let's build your <span className="text-blue-400">{project.title}</span></h3>
                    <p className="text-gray-400 mb-8">Fill out the form below and I'll get back to you with a personalized game plan.</p>
                    
                    <form onSubmit={handleInquirySubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                          <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full p-4 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white" 
                            placeholder="John Doe" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                          <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full p-4 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white" 
                            placeholder="john@company.com" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Tell me about your project</label>
                        <textarea required rows="5" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="w-full p-4 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white resize-none" 
                          placeholder={`I'm looking to build something similar to ${project.title}, but I need...`} />
                      </div>

                      <button 
                        disabled={isSubmitting}
                        type="submit" 
                        className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${
                          isSubmitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500'
                        }`}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                      </button>
                    </form>
                  </motion.div>
                )}

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ProjectDetails;