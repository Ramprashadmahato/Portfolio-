import React from 'react';
import Images from '../Images/About.jpg'

export default function About() {
  return (
    <section className="min-h-screen bg-[#0d0f24] text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start gap-80">

        {/* Left: Glowing Profile Image */}
        <div
          className=" relative ml-20 mt-32 w-60 h-60 rounded-full 
                    bg-gradient-to-tr from-cyan-400  
                    p-1 shadow-[0_0_20px_cyan] 
                    cursor-pointer 
                    transition duration-300 
                    hover:shadow-[0_0_30px_8px_cyan] " >
          {/* Inner Circle with image and glow */}
          <div className="w-full h-full rounded-full bg-[#0d0f24] flex items-center justify-center overflow-hidden">
            <img
              src={Images}
              alt="Profile"
              className="rounded-full object-cover w-56 h-56"
            />
          </div>

          {/* Outer glow ring (optional intensified hover effect) */}
          <div className="absolute inset-0 rounded-full pointer-events-none shadow-[0_0_20px_6px_cyan] blur-[8px]"></div>
        </div>


        {/* Right: Text Content */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <h3 className="text-xl font-semibold mb-6">Aspiring Full Stack Developer</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            I’m currently pursuing a BSc (Hons) degree in Computing at Islington College, where I’ve been building a strong foundation in both front-end and back-end web technologies. I’m passionate about developing innovative, user-friendly websites and applications, and I’m always exploring new tools, frameworks, and best practices in the industry.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            My goal is to become a skilled Software Developer and Full Stack Web Developer, and eventually work as a Freelancer to deliver custom digital solutions. I’m currently seeking a Web Development Internship to gain real-world experience, improve my technical and problem-solving skills, and contribute to impactful projects in a collaborative team environment.
          </p>

          <button className="bg-cyan-400 text-[#0d0f24] px-6 py-2 rounded-full font-semibold hover:bg-cyan-700 transition">
            More About Me
          </button>
        </div>
      </div>
    </section>
  );
}
