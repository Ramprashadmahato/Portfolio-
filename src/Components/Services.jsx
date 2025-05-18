import React from 'react';
import { FaCode, FaPaintBrush } from 'react-icons/fa';
import { AiOutlineAppstore } from 'react-icons/ai';

const servicesData = [
  {
  icon: <FaCode />,
  title: 'UI/UX Design',
  description:
    'I’m learning to create clean, user-friendly interfaces with a focus on usability and accessibility. I aim to design intuitive layouts that improve the overall user experience through wireframing and user research.',
},
{
  icon: <FaPaintBrush />,
  title: 'Web Design',
  description:
    'I design responsive and visually appealing websites using HTML, CSS, and modern design principles. I focus on translating ideas into engaging web pages that reflect the purpose and brand identity of the client.',
},
{
  icon: <AiOutlineAppstore />,
  title: 'App Design',
  description:
    'As I develop my skills in full stack development, I’m also learning how to design application interfaces that are both functional and aesthetically pleasing, ensuring a seamless user journey on web and mobile platforms.',
},

];

export default function Services() {
  return (
    <section className="bg-[#0a0f1a] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          My <span className="text-cyan-400">Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-[#111827] p-6 rounded-xl shadow-lg border border-cyan-900 hover:shadow-cyan-500/50 transition-shadow duration-300"
            >
              <div className="text-4xl text-cyan-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <button className="bg-cyan-400 hover:bg-cyan-700 text-black font-semibold px-4 py-2 rounded-full">
                Learn more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
