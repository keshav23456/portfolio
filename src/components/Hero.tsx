import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="section-container">
        <motion.div
          className="max-w-3xl"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="text-primary-500 font-medium mb-2"
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4"
          >
            Keshav Soni
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-600 mb-8"
          >
            Full Stack Developer | B.Tech in Mathematics & Computing
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-500 mb-2"
          >
            Delhi, India
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <a
              href="mailto:keshav.ug23@nsut.ac.in"
              className="flex items-center gap-2 text-gray-600 hover:text-primary-500 transition-colors"
            >
              <Mail size={18} />
              <span>keshav.ug23@nsut.ac.in</span>
            </a>
            <a
              href="tel:+918901773289"
              className="flex items-center gap-2 text-gray-600 hover:text-primary-500 transition-colors"
            >
              <Phone size={18} />
              <span>+91 8901773289</span>
            </a>
            <a
              href="https://github.com/keshav23456"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-primary-500 transition-colors"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/keshav-soni-787419267/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-primary-500 transition-colors"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="button-primary">
              View Projects
            </a>
            <a href="/resume_apc.pdf" className="button-secondary" download>
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;