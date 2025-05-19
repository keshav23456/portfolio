import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const Leadership = () => {
  const leadershipRoles = [
    {
      position: 'Executive Member',
      organization: 'Axiom',
      period: '2024–Present',
      contributions: [
        'Contributed to official website development',
        'Helped organize technical workshops and events',
        'Mentored junior members in web development',
      ],
      link: 'https://axiom-final.vercel.app/'
    },
  ];

  return (
    <section id="leadership" className="bg-gray-50 py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Leadership</h2>
          
          <div className="mt-12">
            {leadershipRoles.map((role, index) => (
              <motion.div
                key={index}
                className="card flex md:flex-row flex-col md:items-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 bg-gray-100 p-5 rounded-full">
                  <Users size={32} className="text-primary-500" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {role.position}
                  </h3>
                  <h4 className="text-lg font-medium text-primary-500 mb-2">
                    <a 
                      href={role.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex items-center gap-2 group"
                    >
                      {role.organization}
                      <span className="text-primary-400 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </h4>
                  <p className="text-gray-600 mb-4">{role.period}</p>
                  
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {role.contributions.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;