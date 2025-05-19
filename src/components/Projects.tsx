import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

type ProjectType = {
  title: string;
  description: string;
  technologies: string[];
  role: string;
  impact: string;
  links?: {
    live?: string;
    github?: string;
  };
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: ProjectType[] = [
    {
      title: 'EventX',
      description: 'A comprehensive event management platform allowing users to create events, book tickets, and manage registrations through a dynamic form builder',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Appwrite', 'Cloudinary'],
      role: 'Tech Lead',
      impact: 'Streamlined event management process, reducing setup time by 40% and increasing attendance tracking accuracy',
      links: {
        live: 'https://eventx-beige.vercel.app/',
        github: 'https://github.com/keshav23456/eventx',
      },
    },
    {
      title: 'Blog Website',
      description: 'A modern blogging platform with rich text editing capabilities and responsive design',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Rich Text Editor'],
      role: 'Full Stack Developer',
      impact: 'Created an intuitive blogging experience with seamless content management',
      links: {
        live: 'https://blog-nine-kappa-45.vercel.app/',
        github: 'https://github.com/keshav23456/blog',
      },
    },
    {
      title: 'CropX',
      description: 'An agricultural solution for crop disease prediction with an image dashboard integrated with Cloudinary',
      technologies: ['TensorFlow', 'React', 'Python', 'Cloudinary', 'Flask'],
      role: 'Machine Learning Developer',
      impact: 'Achieved 92% accuracy in disease detection, helping farmers identify crop issues early',
      links: {
        github: 'https://github.com/keshav23456/cropx',
      },
    },
    {
      title: 'SAVI',
      description: 'Emergency application with live tracking and Firebase push notifications for immediate assistance',
      technologies: ['React Native', 'Firebase', 'Google Maps API', 'Node.js'],
      role: 'Mobile Developer',
      impact: 'Reduced emergency response time by 28% in pilot program with local safety authorities',
      links: {
        github: 'https://github.com/keshav23456/savi',
      },
    },
  ];

  const handleToggleProject = (index: number) => {
    if (activeProject === index) {
      setActiveProject(null);
    } else {
      setActiveProject(index);
    }
  };

  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projects</h2>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`card group cursor-pointer hover:border-primary-500 hover:border transition-all duration-300 overflow-hidden ${
                  activeProject === index ? 'border-primary-500 border' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleToggleProject(index)}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-primary-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {activeProject === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gray-100"
                  >
                    <div className="mb-2">
                      <span className="font-medium text-gray-700">Role:</span>{' '}
                      <span className="text-gray-600">{project.role}</span>
                    </div>
                    <div className="mb-4">
                      <span className="font-medium text-gray-700">Impact:</span>{' '}
                      <span className="text-gray-600">{project.impact}</span>
                    </div>
                    
                    {project.links && (
                      <div className="flex space-x-4">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-700 hover:text-primary-500 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={18} className="mr-1" />
                            <span>GitHub</span>
                          </a>
                        )}
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-700 hover:text-primary-500 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={18} className="mr-1" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;