"use client"

import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='flex flex-col items-center justify-center py-20 w-full z-[20]'
    >
      <div className='max-w-[800px] w-full flex flex-col gap-8'>
        <motion.div
          className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 hover:border-purple-400/50 transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div>
                <h3 className="font-tt-ramillas-light text-xl md:text-2xl text-white">
                  Software Engineer Intern
                </h3>
                <p className="font-tt-ramillas-extralight text-purple-300">
                  Reddit, Inc. • Summer 2024
                </p>
              </div>
            </div>
            
            <div className="space-y-3">
              <p className="font-tt-ramillas-extralight text-gray-300 leading-relaxed">
                Developed and optimized full-stack features for Reddit's core platform, 
                impacting millions of daily users through enhanced user experience and performance improvements.
              </p>
              
              <ul className="space-y-2 font-tt-ramillas-extralight text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Built responsive React components and implemented efficient state management solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Optimized backend APIs and database queries for improved application performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Collaborated with cross-functional teams using Agile methodologies</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {['React', 'TypeScript', 'Python', 'PostgreSQL', 'GraphQL'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-tt-ramillas-extralight border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Experience; 