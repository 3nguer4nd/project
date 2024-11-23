import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Portfolio Creation',
    description: 'Personal portfolio creation using Bolt.new',
    image: '/images/img1.jpg',
    github: 'https://github.com/3nguer4nd/project.git',
    demo: 'https://enguerand-ca.fr',
    tags: ['Website', 'AI', 'Programming language']
  },
  {
    title: 'Ad title',
    description: 'Ad descriptive',
    image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com',
    demo: 'https://example.com',
    tags: ['Ad skill', 'Ad skill', 'Ad skill']
  },
  {
    title: 'Ad title',
    description: 'Ad descriptive',
    image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com',
    demo: 'https://example.com',
    tags: ['Ad skill', 'Ad skill', 'Ad skill']
  },
  {
    title: 'Ad title',
    description: 'Ad descriptive',
    image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com',
    demo: 'https://example.com',
    tags: ['Ad skill', 'Ad skill', 'Ad skill']
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-white" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}