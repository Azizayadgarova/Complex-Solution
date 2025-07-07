import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { SiReact, SiWordpress, SiWix } from 'react-icons/si';
import footerVideo from '../assets/video.mp4';

const Footer = () => {
  return (
    <footer className="relative text-white py-[100px] px-[4%] overflow-hidden">
      
      {/* 📽️ Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={footerVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🟦 Overlay (darken effect) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#0E1F51] opacity-80 z-10" />

      {/* 🌐 Content */}
      <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About Us */}
        <div>
          <h2 className="text-[24px] font-bold mb-2">About Us</h2>
          <hr className="w-[50px] border-t-4 rounded-md border-[#FF3E54] mb-4" />
          <p className="text-sm mb-4">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at...
          </p>
          <div className="flex gap-3">
            <a href="#" className="bg-white text-[#0E1F51] p-2 rounded-full hover:bg-[#FF3E54] hover:text-white">
              <FaLinkedin />
            </a>
            <a href="#" className="bg-white text-[#0E1F51] p-2 rounded-full hover:bg-[#FF3E54] hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="bg-white text-[#0E1F51] p-2 rounded-full hover:bg-[#FF3E54] hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="bg-white text-[#0E1F51] p-2 rounded-full hover:bg-[#FF3E54] hover:text-white">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-[24px] font-bold mb-2">Services</h2>
          <hr className="w-[50px] border-t-4 rounded-md border-[#FF3E54] mb-4" />
          <ul className="space-y-2 text-sm">
            <li>Web Design/Development</li>
            <li>App Development</li>
            <li>UI/UX Design</li>
            <li>HubSpot Integration</li>
            <li>Email Marketing</li>
            <li>Website Migration</li>
          </ul>
        </div>

        {/* Career */}
        <div>
          <h2 className="text-[24px] font-bold mb-2">Career</h2>
          <hr className="w-[50px] border-t-4 rounded-md border-[#FF3E54] mb-4" />
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <SiReact className="text-2xl bg-white text-[#0E1F51] p-1 rounded-full" />
              <div>
                <p className="font-semibold text-[#FF3E54]">ReactJs Dev.</p>
                <p>1-5 Years of Exp.</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <SiWordpress className="text-2xl bg-white text-[#0E1F51] p-1 rounded-full" />
              <div>
                <p className="font-semibold text-[#FF3E54]">Wordpress Dev.</p>
                <p>1-5 Years of Exp.</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <SiWix className="text-2xl bg-white text-[#0E1F51] p-1 rounded-full" />
              <div>
                <p className="font-semibold text-[#FF3E54]">Python Developer</p>
                <p>1-5 Years of Exp.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h2 className="text-[24px] font-bold mb-2">Subscribe Us</h2>
          <hr className="w-[50px] border-t-4 rounded-md border-[#FF3E54] mb-4" />
          <p className="text-sm mb-4">
            It is a long established fact that a reader will be distracted by the readable...
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-md text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#FF3E54] hover:bg-red-600 text-white py-2 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
