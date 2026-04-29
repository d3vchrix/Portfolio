import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti'; // The confetti library!

// Reusable Star Rating Component
const StarRating = ({ rating, setRating }) => {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          key={star}
          type="button"
          onClick={() => setRating(star)}
          className={`text-3xl transition-colors ${
            star <= rating ? 'text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]' : 'text-gray-500 hover:text-gray-400'
          }`}
        >
          ★
        </motion.button>
      ))}
    </div>
  );
};

const Survey = () => {
  const [isValidToken, setIsValidToken] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [clientInfo, setClientInfo] = useState({ name: '', company: '', position: '', email: '' });
  const [ratings, setRatings] = useState({ q1: 0, q2: 0, q3: 0, q4: 0, q5: 0 });
  const [message, setMessage] = useState('');

  // Validate Token on Load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    
    if (token === 'chris-vip-client-2026') {
      setIsValidToken(true);
    }
  }, []);

  const calculateTotalStars = () => {
    const total = ratings.q1 + ratings.q2 + ratings.q3 + ratings.q4 + ratings.q5;
    return Math.round(total / 5);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(ratings).includes(0)) {
      alert("Please rate all 5 questions using the stars.");
      return;
    }

    setIsSubmitting(true);
    const finalRating = calculateTotalStars();

    try {
      await emailjs.send(
        'service_86m0lbp',
        'template_kme977g',
        {
          client_name: clientInfo.name,
          client_company: clientInfo.company,
          client_position: clientInfo.position,
          client_email: clientInfo.email,
          final_rating: finalRating,
          testimonial_message: message,
        },
        'eYoVpBQAl7cdmqmCY'
      );
      
      // Trigger the Confetti Explosion!
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#10b981', '#f59e0b', '#ffffff']
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert("Failed to submit. Please check the console or try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // 1. Invalid Token Screen
  if (!isValidToken) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-2xl text-red-500 mb-4">Invalid or expired token.</h2>
          <Link to="/" className="text-blue-400 hover:text-blue-300 underline">Return to Portfolio</Link>
        </div>
      </div>
    );
  }

  // 2. Thank You Screen (Animated)
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-black flex items-center justify-center p-6 text-white text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-2xl max-w-lg w-full"
        >
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
            Thank You!
          </h1>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Your feedback has been successfully submitted. It was an absolute pleasure working with you!
          </p>
          
          {/* Back to Portfolio Button */}
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-full font-semibold transition-colors shadow-[0_0_15px_rgba(37,99,235,0.5)]"
            >
              Return to Portfolio
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  // 3. Survey Form Screen
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900 via-gray-900 to-black py-20 px-4 sm:px-6 flex items-center justify-center">
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        // Glassmorphism classes applied here:
        className="w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden"
      >
        {/* Subtle background glow effect inside the glass */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Project Feedback</h2>
          <p className="text-gray-300 mb-10 text-sm sm:text-base">
            Please fill out this survey to rate my performance. Your input may be featured as a public testimonial on my portfolio.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Client Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input required placeholder="Your Name" 
                className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all placeholder-gray-400" 
                onChange={e => setClientInfo({...clientInfo, name: e.target.value})} />
              <input required type="email" placeholder="Your Email" 
                className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all placeholder-gray-400" 
                onChange={e => setClientInfo({...clientInfo, email: e.target.value})} />
              <input required placeholder="Company" 
                className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all placeholder-gray-400" 
                onChange={e => setClientInfo({...clientInfo, company: e.target.value})} />
              <input required placeholder="Position" 
                className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all placeholder-gray-400" 
                onChange={e => setClientInfo({...clientInfo, position: e.target.value})} />
            </div>

            {/* 5 Questions */}
            <div className="bg-black/20 p-6 rounded-2xl border border-white/5">
              <h3 className="text-xl font-semibold mb-6">Rate my performance</h3>
              
              <div className="space-y-5">
                {[
                  { label: "1. Communication & Responsiveness", key: "q1" },
                  { label: "2. Code Quality & Technical Skill", key: "q2" },
                  { label: "3. Meeting Deadlines", key: "q3" },
                  { label: "4. Problem Solving & Logic", key: "q4" },
                  { label: "5. Overall Satisfaction", key: "q5" }
                ].map((q) => (
                  <div key={q.key} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <label className="text-gray-200 mb-2 sm:mb-0">{q.label}</label>
                    <StarRating rating={ratings[q.key]} setRating={(val) => setRatings({...ratings, [q.key]: val})} />
                  </div>
                ))}
              </div>
            </div>

            {/* Textarea */}
            <div>
              <label className="block mb-3 font-semibold text-lg">Testimonial Message</label>
              <textarea required rows="4" 
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all placeholder-gray-400 resize-none" 
                placeholder="How was your experience working with me? What did you like best?"
                onChange={e => setMessage(e.target.value)} />
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              type="submit" 
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${
                isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Submit Feedback'}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Survey;