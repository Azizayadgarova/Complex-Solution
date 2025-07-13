import React, { useState, useEffect } from 'react';
import image from '../assets/img.png';
import { useTranslation } from 'react-i18next';
import AbouteUs from '../Components/AbouteUs';
import OurProcess from '../Components/OurProcess';
import OurService from '../Components/OurService';
import Projects from '../Components/Projects'; 
import GetInTuch from '../Components/GetInTuch';
import Statistics from '../Components/Statistics';
import Advantages from '../Components/Advantages';
import Skill from '../Components/Skill';
import Results from '../Components/Results';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/aboute');
  };
  // Sichqoncha harakatini kuzatish
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Sharchalarning sichqonchadan qochishini hisoblash
  const calculateAvoidance = (elementX, elementY, mouseX, mouseY, strength = 200) => {
    const distance = Math.sqrt(Math.pow(mouseX - elementX, 2) + Math.pow(mouseY - elementY, 2));
    const avoidanceRange = 180;

    if (distance < avoidanceRange) {
      const angle = Math.atan2(elementY - mouseY, elementX - mouseX);
      const force = Math.pow((avoidanceRange - distance) / avoidanceRange, 2);
      return {
        x: Math.cos(angle) * force * strength,
        y: Math.sin(angle) * force * strength
      };
    }
    return { x: 0, y: 0 };
  };

  return (
    <div>
      <div className='relative bg-white min-h-screen md:h-[600px] overflow-hidden cursor-none'> {/* h-[600px] faqat md va undan kattalar uchun */}

        {/* 🔴 Custom sichqoncha kursori */}
        <div
          className="fixed w-6 h-6 bg-red-500 rounded-full pointer-events-none z-50 opacity-70"
          style={{
            transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)`,
            transition: 'transform 0.01s linear'
          }}
        />

        {/* Dumaloq fon elementlari - Sichqonchadan qochadi */}
        {/* Har bir sharchaning o'lchami va joylashuvi responsiv qilindi */}
        <div
          className="absolute w-32 h-32 sm:w-48 sm:h-48 bg-gray-200 rounded-full opacity-60 transition-all duration-500 ease-out"
          style={{
            bottom: -50 + calculateAvoidance(window.innerWidth * 0.1, window.innerHeight * 0.9, mousePosition.x, mousePosition.y).y,
            left: -50 + calculateAvoidance(window.innerWidth * 0.1, window.innerHeight * 0.9, mousePosition.x, mousePosition.y).x,
            transform: 'scale(1)',
            animation: 'pulse 6s ease-in-out infinite'
          }}
        />
        <div
          className="absolute w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded-full opacity-40 transition-all duration-500 ease-out"
          style={{
            top: 40 + calculateAvoidance(window.innerWidth * 0.9, window.innerHeight * 0.1, mousePosition.x, mousePosition.y).y,
            right: 80 + calculateAvoidance(window.innerWidth * 0.9, window.innerHeight * 0.1, mousePosition.x, mousePosition.y).x,
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />
        <div
          className="absolute w-32 h-32 sm:w-40 sm:h-40 bg-red-100 rounded-full opacity-70 border-4 border-red-200 transition-all duration-500 ease-out"
          style={{
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) translate(${calculateAvoidance(window.innerWidth / 2, window.innerHeight / 2, mousePosition.x, mousePosition.y).x}px, ${calculateAvoidance(window.innerWidth / 2, window.innerHeight / 2, mousePosition.x, mousePosition.y).y}px)`,
            animation: 'pulse 3s ease-in-out infinite'
          }}
        />
        <div
          className="absolute w-16 h-16 sm:w-24 sm:h-24 bg-red-100 rounded-full opacity-60 transition-all duration-500 ease-out"
          style={{
            top: 80 + calculateAvoidance(window.innerWidth * 0.15, window.innerHeight * 0.15, mousePosition.x, mousePosition.y).y,
            left: 80 + calculateAvoidance(window.innerWidth * 0.15, window.innerHeight * 0.15, mousePosition.x, mousePosition.y).x,
            animation: 'pulse 6s ease-in-out infinite'
          }}
        />
        <div
          className="absolute w-16 h-16 sm:w-24 sm:h-24 bg-gray-200 rounded-full opacity-50 transition-all duration-500 ease-out"
          style={{
            bottom: 80 + calculateAvoidance(window.innerWidth * 0.85, window.innerHeight * 0.85, mousePosition.x, mousePosition.y).y,
            right: -30 + calculateAvoidance(window.innerWidth * 0.85, window.innerHeight * 0.85, mousePosition.x, mousePosition.y).x,
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />

        {/* Asosiy kontent */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between px-4 sm:px-8 lg:px-16 py-12 items-center text-center md:text-left">
          <div className="md:w-1/2 mb-8 md:mb-0"> {/* Mobil va desktopda kenglik va margin */}
            <p className='text-xl sm:text-2xl text-red-500 font-medium mb-2'>\ {t('intro')} \</p> {/* Matn o'lchamlari responsiv */}
            <h2 className='text-4xl sm:text-5xl lg:text-[60px] text-blue-900 font-medium leading-tight mb-6'>
              {t('heading')}
            </h2>
            <button onClick={handleClick} className='w-36 h-12 sm:w-40 sm:h-17 mt-4 px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300'>
              {t('view_more')}
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center"> {/* Rasmni markazga joylash */}
            <img src={image} alt="Business growth" className="max-w-full h-auto" /> {/* Rasmni responsiv qilish */}
          </div>
        </div>

        <style>{`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.6;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.8;
            }
          }
        `}</style>
      </div>
      <AbouteUs />
      <OurProcess />
      <OurService />
      <Statistics />
      <Skill />
      <Advantages />
      <Projects />
      <Results />
      <GetInTuch />
    </div>
  );
};

export default Home;
