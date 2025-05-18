import React from 'react';
import Ecommerce from '../Images/E-commerce.png';
import classroom from '../Images/classroom.png';
import learning from '../Images/E-LearningPlatform.png';
import Inventor from '../Images/Inventor.png';
import Furniture from '../Images/Furnuter.png';
import School from '../Images/school.png';

const personalProjects = [
  {
    id: 1,
    image: Ecommerce,
    alt: 'E-commerce Website',
    name: 'E-commerce Website',
    description:
      'React, Node.js, Express, MongoDB - A full-stack e-commerce platform with product listings, cart, and payment features.',
  },
  {
    id: 2,
    image: learning,
    alt: 'E-Learning Platform',
    name: 'E-Learning Platform',
    description:
      'React, Node.js, Express, MongoDB - An interactive e-learning platform with course management and user progress tracking.',
  },
  {
    id: 3,
    image: Inventor,
    alt: 'Inventory Management System',
    name: 'Inventory Management System',
    description:
      'React, Node.js, Express, MongoDB - An interactive inventory system with management features.',
  },
];

const academicProjects = [
  {
    id: 4,
    image: Furniture,
    alt: 'Furniture Management System',
    name: 'Furniture Management System',
    description:
      'Python - A system to manage furniture inventory and orders, developed as an academic project.',
  },
  {
    id: 5,
    image: School,
    alt: 'School Management System',
    name: 'School Management System',
    description:
      'Java - A school management desktop application handling students, attendance, grading, and staff.',
  },
  {
    id: 6,
    image: classroom,
    alt: 'E-Classroom Platform',
    name: 'E-Classroom Platform',
    description:
      'Database-driven platform supporting classroom activities and resource management.',
  },
];

export default function Projects() {
  return (
    <section className="bg-[#0a0f1a] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Latest <span className="text-cyan-400">Projects</span>
        </h2>

        {/* Personal Projects */}
        <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Personal Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {personalProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#111827] rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/40 transition-shadow duration-300"
            >
              <img src={project.image} alt={project.alt} className="w-full h-60 object-cover" />

              {/* Project Name Always Visible */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 px-4 py-2 z-10">
                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
              </div>

              {/* Hover Description */}
              <div className="absolute inset-0 bg-[#1f2937] bg-opacity-95 flex flex-col justify-center items-center text-center p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Projects */}
        <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Academic Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {academicProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#111827] rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/40 transition-shadow duration-300"
            >
              <img src={project.image} alt={project.alt} className="w-full h-60 object-cover" />

              {/* Project Name Always Visible */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 px-4 py-2 z-10">
                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
              </div>

              {/* Hover Description */}
              <div className="absolute inset-0 bg-[#1f2937] bg-opacity-95 flex flex-col justify-center items-center text-center p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
