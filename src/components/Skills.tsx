import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Programmation', level: 30 },
  { name: 'Virtualisation', level: 40 },
  { name: 'None', level: 0 },
  { name: 'None', level: 0 },
  { name: 'None', level: 0 },
  { name: 'None', level: 0 },
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        <div className="grid gap-6 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4">
                <div className="min-w-[120px] text-lg font-medium truncate">
                  {skill.name}
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-4">
                  <motion.div
                    className="bg-blue-500 h-4 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
                <div className="min-w-[48px] text-right text-gray-600">
                  {skill.level}%
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}