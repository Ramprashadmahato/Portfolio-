import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
  animate, // ✅ This was missing
} from 'framer-motion';

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular } from 'react-icons/fa';

const technicalSkills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" />, level: 90 },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" />, level: 60 },
  { name: 'Javascript', icon: <FaJs className="text-yellow-400" />, level: 85 },
  { name: 'React', icon: <FaReact className="text-cyan-400" />, level: 95 },
  // { name: 'Angular', icon: <FaAngular className="text-fuchsia-700" />, level: 80 },
];

const professionalSkills = [
  { name: 'Creativity', level: 90 },
  { name: 'Communication', level: 65 },
  { name: 'Problem Solving', level: 75 },
  { name: 'Teamwork', level: 85 },
];

function ProfessionalSkill({ skill, index, inView }) {
  const progress = useMotionValue(0);
  const strokeOffset = useTransform(progress, (value) => 100 - value);
  const percentText = useTransform(progress, (value) => `${Math.round(value)}%`);

  useEffect(() => {
    if (inView) {
      const controls = animate(progress, skill.level, {
        duration: 1.5,
        delay: index * 0.2,
        ease: 'easeOut',
      });
      return () => controls.stop();
    }
  }, [inView, index, progress, skill.level]);

  return (
    <div key={skill.name} className="relative w-28 mt-12 h-28">
      <svg className="w-full h-full" viewBox="0 0 36 36">
        <path
          className="text-gray-700"
          d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <motion.path
          className="text-cyan-400"
          d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="100, 100"
          style={{ strokeDashoffset: strokeOffset }}
        />
        <motion.text
          x="18"
          y="20.35"
          className="text-sm fill-white"
          textAnchor="middle"
          style={{ opacity: inView ? 1 : 0 }}
        >
          {percentText}
        </motion.text>
      </svg>
      <div className="text-center mt-2 text-sm">{skill.name}</div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <section className="bg-[#0a0f1a] text-white py-16 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 underline underline-offset-4">
              Technical Skills
            </h3>
            {technicalSkills.map((skill, index) => (
              <div key={skill.name} className="mb-6">
                <div className="flex items-center mb-1">
                  <span className="mr-2 text-xl">{skill.icon}</span>
                  <span className="text-lg font-medium">{skill.name}</span>
                </div>
                <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                  <motion.div
                    className="bg-cyan-400 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={controls}
                    variants={{
                      visible: { width: `${skill.level}%` },
                    }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  />
                </div>
                <div className="text-right text-sm text-gray-400">{skill.level}%</div>
              </div>
            ))}
          </div>

          {/* Professional Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-center  underline underline-offset-4">
              Professional Skills
            </h3>
            <div className="grid grid-cols-2 gap-6 justify-items-center">
              {professionalSkills.map((skill, index) => (
                <div key={skill.name} className="flex flex-col  items-center">
                  
                  <ProfessionalSkill skill={skill} index={index} inView={inView} />
                  <div className="text-center text-sm text-gray-400">{skill.level}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
