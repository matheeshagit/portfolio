import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  ChartBarIcon, 
  CodeBracketIcon, 
  AcademicCapIcon,
  LightBulbIcon 
} from '@heroicons/react/24/outline';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: "Data Science",
      description: "Transforming raw data into actionable insights using statistical analysis and machine learning."
    },
    {
      icon: <CodeBracketIcon className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Building responsive web applications with modern technologies like React, Node.js, and Spring Boot."
    },
    {
      icon: <AcademicCapIcon className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and methodologies to stay ahead in the tech landscape."
    },
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Passionate about tackling complex challenges and finding innovative solutions."
    }
  ];

  return (
    <section id="about" ref={ref} className="py-24 bg-slate-50">
      {/* FIXED: Remove container class and use direct centering */}
      <div className="mx-auto px-6 w-full max-w-7xl">
        {/* Header Section - FIXED MARGINS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20 w-full"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"
          />
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 leading-relaxed mx-auto max-w-5xl px-4"
          >
            I'm a passionate undergraduate student specializing in Data Science, with a strong foundation 
            in full-stack web development. I love creating solutions that bridge the gap between data 
            analysis and user experience.
          </motion.p>
        </motion.div>

        {/* Features Grid - FIXED CENTERING */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 mx-auto justify-center"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-primary/20 group flex flex-col w-full"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-center flex-grow">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Personal Story - FIXED VISIBILITY */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white mx-auto max-w-6xl">
            <div className="text-center">
              <motion.h3 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                My Journey & Goals
              </motion.h3>
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl leading-relaxed mb-6 opacity-95"
              >
                As a BSc IT student specializing in Data Science, I've developed a unique blend of 
                technical skills ranging from statistical analysis and machine learning to full-stack 
                web development. I'm particularly interested in how data-driven insights can create 
                meaningful user experiences.
              </motion.p>
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl leading-relaxed opacity-95 font-semibold"
              >
                I'm currently seeking internship opportunities where I can apply my skills, learn from 
                experienced professionals, and contribute to real-world projects.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}