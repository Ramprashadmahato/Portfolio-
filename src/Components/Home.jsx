import React from 'react';
import { FaLinkedinIn, FaGithub, FaFacebook, FaInstagram, FaDownload } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import Images from '../Images/Ram.png';

export default function Home() {
  return (
    // Add "group" here to control hover state
    <section
      id="home"
      className="min-h-screen -mt-20  bg-[#0d0f24] text-white flex items-center justify-center px-6 group"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 -mb-40 items-center">

        {/* Left Content */}
        <div className="space-y-6">
          <h1
            className="
              text-4xl md:text-5xl font-bold mb-4 
              opacity-0 translate-x-[-20px] group-hover:opacity-100 group-hover:translate-x-0
              transition-all duration-500 delay-200
            "
          >
            Ram Prashad Mahato
          </h1>

          <h2
            className="
              text-2xl md:text-3xl font-semibold mb-4 
              opacity-0 translate-x-[-20px] group-hover:opacity-100 group-hover:translate-x-0
              transition-all duration-500 delay-400
            "
          >
            I'm a{' '}
            <span className="text-green-400">
              <TypeAnimation
                sequence={['Web Developer', 2000, 'Software Developer', 2000, 'Freelancer', 2000]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h2>

          <p className="
          text-gray-300 mb-6
          opacity-0 translate-x-[-20px] group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-500 delay-600
        ">
            I'm an aspiring Web Developer and software Developer with a strong foundation in front-end and back-end technologies. While I’m not yet employed, I’ve built several personal projects and studied real-world development workflows to understand how modern companies operate. I'm a fast learner, passionate about clean code and responsive design, and actively seeking a web development internship to gain hands-on experience and contribute to real projects.
          </p>


          {/* Download CV + Social Icons */}
          <div
            className="
              flex flex-wrap gap-4 mt-6 items-center text-green-400 text-xl
              opacity-0 translate-x-[-20px] group-hover:opacity-100 group-hover:translate-x-0
              transition-all duration-500 delay-800
            "
          >
            <a
              href="/Ram Prashad Mahato Cv.pdf"
              download
              className="inline-flex items-center gap-2 bg-green-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition"
            >
              <FaDownload /> Download CV
            </a>
            <a href="https://www.linkedin.com/in/ram-parsad-mahato-63b4412b1/" className="hover:text-white transition"><FaLinkedinIn /></a>
            <a href="https://github.com/Ramprashadmahato" className="hover:text-white transition"><FaGithub /></a>
            <a href="https://www.facebook.com/share/1F3TaC8N3C/" className="hover:text-white transition"><FaFacebook /></a>
            <a href="https://www.instagram.com/ramparsad3011?igsh=am5wa2Q1b3E0YXNq" className="hover:text-white transition"><FaInstagram /></a>
          </div>
          <button className="bg-cyan-400 text-[#0d0f24] px-6 py-2 rounded-full font-semibold hover:bg-cyan-700 transition">
            More About Me
          </button>
        </div>

        {/* Right Profile Image with Animated Border and Show Animation */}
        <div className="relative w-full flex justify-center">
          <div className=" relative w-[250px] h-[250px] rounded-full p-1
                      bg-gradient-to-tr from-cyan-400 via-purple-600 to-pink-500
                      shadow-[0_0_20px_cyan] animate-spin-slow
                      flex items-center justify-center transition duration-300
                      hover:shadow-[0_0_25px_6px_cyan]
                      cursor-pointer
                    ">
            <div className="w-full h-full rounded-full bg-[#0d0f24] flex items-center justify-center overflow-hidden">
              <img
                src={Images}
                alt="Ram Prashad Mahato"
                className="rounded-full object-cover w-[220px] h-[220px] border-2 border-[#0d0f24]"
              />
            </div>

            {/* Optional extra glowing outer layer */}
            <div className="absolute inset-0 rounded-full pointer-events-none blur-[8px] opacity-30 bg-gradient-to-tr from-cyan-400 via-purple-600 to-pink-500"></div>
          </div>
        </div>


      </div>
    </section>
  );
}
