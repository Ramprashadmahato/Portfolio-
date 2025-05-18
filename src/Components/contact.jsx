import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaInstagram, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    to_name: "Ram Prashad Mahato",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_8w659th",    // replace with your EmailJS service ID
        "template_gvb7pp6",   // replace with your EmailJS template ID
        formData,
        "e1KxchnbJw-CarP1_"        // replace with your EmailJS user/public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <>
      <div className="min-h-screen bg-[#0f172a] text-white px-6 md:px-12 py-16 flex flex-col md:flex-row justify-between items-center">

        {/* Left Section */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">
            Contact <span className="text-teal-400">Me</span>
          </h2>
          <p className="text-lg text-gray-300 mb-2">Let’s Work Together</p>
          <p className="text-sm text-gray-400 leading-relaxed max-w-md">
            I'm always excited to collaborate on new projects, explore innovative ideas, or simply connect with like-minded individuals. Whether you have a question, a project in mind, or just want to say hello — feel free to drop me a message anytime!
          </p>


          <div className="mt-6 text-sm space-y-1 text-gray-300">
            <p><span className="font-semibold">Email:</span> rpxingh201@gmail.com</p>
            <p><span className="font-semibold">Phone:</span>+977-9826872678</p>
          </div>

          <div className="flex space-x-5 mt-6">
            <a href="https://www.facebook.com/share/1F3TaC8N3C/" className="text-teal-400 hover:text-white transition"><FaFacebook size={22} /></a>
            <a href="https://www.instagram.com/ramparsad3011?igsh=am5wa2Q1b3E0YXNq" className="text-teal-400 hover:text-white transition"><FaInstagram size={22} /></a>
            <a href="https://github.com/Ramprashadmahato" className="text-teal-400 hover:text-white transition"><FaGithub size={22} /></a>
            <a href="https://www.linkedin.com/in/ram-parsad-mahato-63b4412b1/" className="text-teal-400 hover:text-white transition"><FaLinkedin size={22} /></a>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="md:w-1/2 w-full">
          <form
            onSubmit={handleSubmit}
            className="bg-[#1e293b] p-8 rounded-2xl shadow-xl space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-[#0f172a] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-[#0f172a] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Enter Your Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-[#0f172a] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Enter Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-[#0f172a] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-teal-300 cursor-pointer hover:bg-teal-500 text-black font-semibold py-3 rounded-md transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <footer className="bg-[#030f2e] text-gray-400 text-center py-6 border-t border-gray-700">
        <p className="text-sm">
          © 2025 Web Developer <span className="text-cyan-400">Ram Prashad Mahato</span>
        </p>
      </footer>
    </>
  );
}
