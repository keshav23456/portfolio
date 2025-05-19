import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <img 
                  src="https://res.cloudinary.com/dhckg4kuj/image/upload/v1747574551/ipnupopw76bjvfadwvvk.png" 
                  alt="Keshav Soni"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="card h-full flex flex-col justify-center">
                <p className="text-gray-700 leading-relaxed mb-6">
                  I'm a B.Tech student in Mathematics and Computing at Netaji Subhash Engineering College, with a passion for solving real-world problems through impactful software solutions.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  With hands-on experience in full-stack development, I specialize in building scalable platforms using the MERN stack and cloud services like Appwrite and Cloudinary.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  I'm also an active participant in national hackathons and a recognized tech leader, having led award-winning projects across diverse domains.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  As a detail-oriented developer with strong analytical and communication skills, I aim to create digital solutions that make a difference.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;