import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Tech Lead',
      company: 'EventX',
      period: 'Feb 2025 – Present',
      description: [
        'Led development of a full-stack event management platform using the MERN stack',
        'Integrated Appwrite authentication and Cloudinary storage services',
        'Implemented JWT-based authentication & Role-Based Access Control',
        'Designed and built a dynamic form builder for event creation',
      ],
    },
  ];

  return (
    <section id="experience" className="bg-white py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience</h2>
          
          <div className="mt-12 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="card overflow-hidden border-l-4 border-primary-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="md:flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                    <h4 className="text-lg font-medium text-primary-500 mb-2">{exp.company}</h4>
                    
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <Calendar size={16} className="mr-1" />
                      <span>{exp.period}</span>
                    </div>
                    
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;