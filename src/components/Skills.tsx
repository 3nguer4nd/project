import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  description: string;
  color: string;
}

const skills: Skill[] = [
  { 
    name: 'React', 
    level: 90, 
    description: 'Building user interfaces',
    color: 'bg-blue-400' 
  },
  { 
    name: 'HTML/CSS', 
    level: 85, 
    description: 'Structure and styling',
    color: 'bg-orange-400' 
  },
  { 
    name: 'Tailwind', 
    level: 80, 
    description: 'Utility-first CSS',
    color: 'bg-teal-400' 
  },
  { 
    name: 'Node.js', 
    level: 80, 
    description: 'Server-side JavaScript',
    color: 'bg-green-400' 
  },
  { 
    name: 'Express', 
    level: 75, 
    description: 'Web framework',
    color: 'bg-gray-400' 
  },
  { 
    name: 'MongoDB', 
    level: 70, 
    description: 'NoSQL database',
    color: 'bg-green-600' 
  },
  { 
    name: 'TypeScript', 
    level: 85, 
    description: 'Typed JavaScript',
    color: 'bg-indigo-400' 
  },
  { 
    name: 'Python', 
    level: 75, 
    description: 'General-purpose language',
    color: 'bg-yellow-400' 
  },
  { 
    name: 'Git', 
    level: 85, 
    description: 'Version control',
    color: 'bg-red-400' 
  },
  { 
    name: 'Docker', 
    level: 65, 
    description: 'Containerization',
    color: 'bg-blue-600' 
  },
  { 
    name: 'AWS', 
    level: 70, 
    description: 'Cloud services',
    color: 'bg-yellow-600' 
  }
];

const getRandomPosition = (index: number) => {
  // Utilisation d'une grille virtuelle pour mieux répartir les bulles
  const gridSize = Math.ceil(Math.sqrt(skills.length));
  const cellSize = 200; // Taille de chaque cellule de la grille

  // Position de base dans la grille
  const row = Math.floor(index / gridSize);
  const col = index % gridSize;

  // Ajout d'une variation aléatoire à la position
  const randomOffset = () => (Math.random() - 0.5) * 150;

  // Calcul de la position finale avec décalage aléatoire
  const baseX = (col - gridSize / 2) * cellSize;
  const baseY = (row - gridSize / 2) * cellSize;

  return {
    x: baseX + randomOffset(),
    y: baseY + randomOffset()
  };
};

const SkillBubble: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const size = 100 + (skill.level / 100) * 60;
  const position = getRandomPosition(index);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, x: position.x * 2, y: position.y * 2 }}
      whileInView={{ 
        scale: 1, 
        opacity: 1, 
        x: position.x, 
        y: position.y,
        transition: { 
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: index * 0.1
        }
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.1,
        zIndex: 10,
        transition: { duration: 0.2 }
      }}
      className={`absolute rounded-full ${skill.color} cursor-pointer group shadow-lg`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <span className="font-bold text-center whitespace-nowrap">{skill.name}</span>
        <span className="text-sm opacity-90">{skill.level}%</span>
        <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center">
          {skill.description}
        </span>
      </div>
    </motion.div>
  );
};

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

        <div className="relative h-[800px] flex items-center justify-center mx-auto">
          <div className="absolute inset-0 flex items-center justify-center">
            {skills.map((skill, index) => (
              <SkillBubble 
                key={skill.name} 
                skill={skill} 
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}