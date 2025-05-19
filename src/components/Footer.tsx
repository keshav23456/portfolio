import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-bold">Keshav Soni</h2>
            <p className="text-gray-400 mt-2">Full Stack Developer</p>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-gray-400" />
              <a 
                href="mailto:keshav.ug23@nsut.ac.in" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                keshav.ug23@nsut.ac.in
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-gray-400" />
              <a 
                href="tel:+918901773289" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                +91 8901773289
              </a>
            </div>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/keshav23456" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/keshav-soni-787419267/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="/resume_apc.pdf"
              download
              className="px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Keshav Soni. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;