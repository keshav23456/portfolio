import React from 'react';
import { motion } from 'framer-motion';
import { Award, Medal } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: '1st Place – Hack With MAIT 5.0',
      description: 'Orkes Track',
      icon: <Award className="text-yellow-500" size={24} />,
    },
    {
      title: 'Top 12 – Amazon Sambhav 2024',
      description: 'Out of 100,000+ teams',
      icon: <Award className="text-yellow-500" size={24} />,
    },
    {
      title: '5th Place – CSI InnoWave Hackathon',
      description: 'Innovation category',
      icon: <Medal className="text-gray-500" size={24} />,
    },
    {
      title: '3rd Place – IIIT ESUMMIT HackforImpact',
      description: 'Social Impact category',
      icon: <Medal className="text-amber-800" size={24} />,
    },
  ];

  return (
    <section id="achievements" className="bg-white py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Achievements</h2>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="card text-center h-full flex flex-col items-center justify-center py-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 p-3 bg-gray-50 rounded-full">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;