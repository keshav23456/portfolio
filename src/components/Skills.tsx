import React from 'react';
import { motion } from 'framer-motion';

const SkillSection = ({ title, skills }: { title: string; skills: string[] }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
      <div className="flex flex-wrap">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-badge"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    {
      title: 'Languages',
      skills: ['Python', 'JavaScript', 'C++', 'Java', 'SQL'],
    },
    {
      title: 'Frontend',
      skills: ['React', 'HTML/CSS', 'Tailwind CSS', 'Rich Text Editors (RTE)'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Appwrite', 'RESTful APIs'],
    },
    {
      title: 'Databases/Storage',
      skills: ['MongoDB', 'PostgreSQL', 'Cloudinary'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'Postman', 'Docker', 'VS Code'],
    },
    {
      title: 'Soft Skills',
      skills: ['Problem-Solving', 'Leadership', 'Communication', 'Teamwork'],
    },
  ];

  return (
    <section id="skills" className="bg-gray-50 py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills</h2>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((section, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillSection
                  title={section.title}
                  skills={section.skills}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;