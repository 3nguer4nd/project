import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}

const skills: Skill[] = [
  { name: 'React', level: 90, category: 'Frontend', color: 'bg-blue-400' },
  { name: 'TypeScript', level: 85, category: 'Languages', color: 'bg-indigo-400' },
  { name: 'Node.js', level: 80, category: 'Backend', color: 'bg-green-400' },
  { name: 'Python', level: 75, category: 'Languages', color: 'bg-yellow-400' },
  { name: 'AWS', level: 70, category: 'Cloud', color: 'bg-orange-400' },
  { name: 'Docker', level: 65, category: 'DevOps', color: 'bg-purple-400' },
  { name: 'GraphQL', level: 60, category: 'Backend', color: 'bg-pink-400' },
  { name: 'Figma', level: 55, category: 'Design', color: 'bg-red-400' },
];

const SkillBubble: React.FC<{ skill: Skill }> = ({ skill }) => {
  // Calculate size based on skill level (min 100px, max 160px)
  const size = 100 + (skill.level / 100) * 60;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      className={`relative rounded-full ${skill.color} cursor-pointer`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <span className="font-bold text-center whitespace-nowrap">{skill.name}</span>
        <span className="text-sm opacity-90">{skill.level}%</span>
        <span className="text-xs opacity-75">{skill.category}</span>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

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

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category} className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{category}</h3>
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                {skills
                  .filter(skill => skill.category === category)
                  .map(skill => (
                    <SkillBubble key={skill.name} skill={skill} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}