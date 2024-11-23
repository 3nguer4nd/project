import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          I am still searching for my path, although things become clearer when I engage with IT or audiovisual arts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 p-6 rounded-lg"
          >
            <Code2 className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
            <p className="text-gray-600">
              Proficient in modern web technologies including React, Node.js, and cloud platforms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-50 p-6 rounded-lg"
          >
            <Briefcase className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-gray-600">
            Work-study trainee since September 2023 at <strong>Magnum Event</strong> in Paris.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gray-50 p-6 rounded-lg"
          >
            <GraduationCap className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-gray-600">
            Student in a BTS program for IT Services for Organizations, option A (Infrastructure Solutions, Systems, and Networks).
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}