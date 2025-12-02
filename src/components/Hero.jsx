import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="text-center relative z-10 px-4">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="w-32 h-32 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-8 flex items-center justify-center border-4 border-white/20"
        >
          <span className="text-4xl text-white font-bold">M</span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Matheesha</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Data Science Student & Full-Stack Developer
        </motion.p>

        <motion.p
          className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Passionate about transforming data into insights and building innovative web solutions. 
          Currently pursuing BSc IT with Data Science specialization.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button 
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-primary to-secondary text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 min-w-[180px]"
          >
            View My Work
          </button>
          <a href="/Matheesha2025.pdf" download>
          <button className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 min-w-[180px]">
            Download CV
          </button>
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button 
          onClick={scrollToAbout}
          className="text-white/60 hover:text-white transition-colors"
        >
          <ChevronDownIcon className="w-8 h-8" />
        </button>
      </motion.div>
    </section>
  );
}