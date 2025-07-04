import React, { useState, useEffect } from 'react';
import image from '../assets/image.svg'
import { useTranslation } from 'react-i18next';
import AbouteUs from '../Componets/AbouteUs';
import OurProcess from '../Componets/OurProcess';
import OurService from '../Componets/OurService';
import Footer from '../Componets/Footer';
import Employees from '../Componets/Projects';
import Contact from './Contact';
import GetInTuch from '../Componets/GetInTuch';
import Statistics from '../Componets/Statistics';
import Advantages from '../Componets/Advantages';
import Projects from '../Componets/Projects';


const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  const circle1Avoidance = calculateAvoidance(100, window.innerHeight - 100, mousePosition.x, mousePosition.y);
  const circle2Avoidance = calculateAvoidance(window.innerWidth - 150, 100, mousePosition.x, mousePosition.y);
  const circle3Avoidance = calculateAvoidance(window.innerWidth / 2, window.innerHeight / 2, mousePosition.x, mousePosition.y);
  const circle4Avoidance = calculateAvoidance(150, 150, mousePosition.x, mousePosition.y);
  const circle5Avoidance = calculateAvoidance(window.innerWidth - 50, window.innerHeight - 150, mousePosition.x, mousePosition.y);

  return (
    <div>
      <div className='relative bg-white min-h-screen h-[600px] overflow-hidden cursor-none'>

        {/* 🔴 Custom sichqoncha kursori (YANGILANGAN QISM) */}
        <div
          className="fixed w-6 h-6 bg-red-500 rounded-full pointer-events-none z-50 opacity-70"
          style={{
            transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)`,
            transition: 'transform 0.01s linear'
          }}
        />


        <div
          className="absolute w-48 h-48 bg-gray-200 rounded-full opacity-60 transition-all duration-500 ease-out"
          style={{
            bottom: -50 + circle1Avoidance.y,
            left: -50 + circle1Avoidance.x,
            transform: 'scale(1)',
            animation: 'pulse 6s ease-in-out infinite'
          }}
        />
        <div
          className="absolute w-32 h-32 bg-gray-200 rounded-full opacity-40 transition-all duration-500 ease-out"
          style={{
            top: 40 + circle2Avoidance.y,
            right: 80 + circle2Avoidance.x,
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />
        <div
          className="absolute w-40 h-40 bg-red-100 rounded-full opacity-70 border-4 border-red-200 transition-all duration-500 ease-out"
          style={{
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) translate(${circle3Avoidance.x}px, ${circle3Avoidance.y}px)`,
            animation: 'pulse 3s ease-in-out infinite'
          }}
        />
        <div
          className="absolute w-24 h-24 bg-red-100 rounded-full opacity-60 transition-all duration-500 ease-out"
          style={{
            top: 80 + circle4Avoidance.y,
            left: 80 + circle4Avoidance.x,
            animation: 'pulse 6s ease-in-out infinite'
          }}
        />
        <div
          className="absolute w-24 h-24 bg-gray-200 rounded-full opacity-50 transition-all duration-500 ease-out"
          style={{
            bottom: 80 + circle5Avoidance.y,
            right: -30 + circle5Avoidance.x,
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />

        <div className="relative z-10 flex justify-between px-16 py-12 items-center">
          <div>
            <p className='text-2xl text-red-500 font-medium'>\ {t('intro')} \</p>
            <h2 className='text-blue-900 text-[60px] w-4/5 font-medium leading-tight'>   {t('heading')}</h2>
            <button className='w-40 h-15 mt-5 px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300'>
              {t('view_more')}
            </button>
          </div>
          <div>
            <img src={image} alt="Business growth" />
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
        <Statistics/>
   
       <Advantages/>
        <Projects/>
          <GetInTuch/>
    </div>

  );

};

export default Home;
