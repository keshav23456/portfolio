import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Mathematics & Computing',
      institution: 'Netaji Subhash Engineering College',
      period: '2023–2027',
      grade: 'CGPA: 7.6',
    },
    {
      degree: 'Class XII',
      institution: 'M.A.G.S.S School, Sirsa',
      period: '2023',
      grade: '90%',
    },
    {
      degree: 'Class X',
      institution: 'M.A.G.S.S School, Sirsa',
      period: '2021',
      grade: '87.8%',
    },
  ];

  return (
    <section id="education" className="bg-white py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          
          <div className="mt-12">
            <div className="relative">
              {/* Vertical Line */}
              <div className="hidden md:block absolute left-[19px] top-0 bottom-0 w-0.5 bg-gray-200 z-0"></div>
              
              <div className="space-y-12">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="ml-0 md:ml-8">
                      <div className="card overflow-hidden border-l-4 border-primary-500">
                        <div className="md:flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800">
                              {edu.degree}
                            </h3>
                            <h4 className="text-lg font-medium text-primary-500 mb-2">
                              {edu.institution}
                            </h4>
                            
                            <div className="flex items-center text-gray-500 text-sm mb-2">
                              <Calendar size={16} className="mr-1" />
                              <span>{edu.period}</span>
                            </div>
                            
                            <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium inline-block">
                              {edu.grade}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;