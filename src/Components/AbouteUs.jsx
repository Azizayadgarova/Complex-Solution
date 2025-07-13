import React from 'react';
import { useTranslation } from 'react-i18next';
import comony from '../assets/servis.svg';
import strelka from '../assets/Strelka.png';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AbouteUs = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/aboute');
  };

  return (
    // Asosiy konteyner: padding va flex yo'nalishi responsiv qilindi
    <div className='bg-[#F7F7F7] px-[4%] justify-between  flex flex-col md:flex-row max-[760px]:flex-col  sm:px-6 md:px-8 lg:px-[4%] py-14 sm:py-16 md:py-20 lg:py-[100px]  items-center'>
      {/* Rasm qismi */}
      <div className='w-full md:w-1/3 mb-8 sm:mb-10 md:mb-0 flex justify-center md:justify-start max-[760px]:mb-6'>
        <img
          className='max-w-full w-[500px] ml-10 sm:max-w-[350px] md:max-w-[450px] w-full h-auto object-contain max-[760px]:max-w-[300px]'
          src={comony}
          alt="About us illustration"
        />
      </div>

      {/* Matn qismi */}
      {/* Matn qismi */}
      <div className='w-full md:w-1/2 text-center md:text-left max-[760px]:text-center'>
        <p className='text-lg sm:text-xl md:text-2xl lg:text-[24px] text-[#FF3E54] font-medium mb-2'>\ {t('label')} \</p>
        <h2 className='text-[30px] w-[590px]  sm:text-4xl md:text-[46px] lg:text-[46px] text-[#0E1F51] font-medium'>
          {t('title')}
        </h2>

        <div className='flex flex-col md:flex-row items-start mt-4 sm:mt-5 max-[760px]:items-center'>
          <div className='flex-1 md:flex md:justify-center md:flex-col'>
            <p className=' w-[80%] sm:mt-5 text-base sm:text-lg lg:text-[20px] text-gray-700 leading-relaxed md:w-[95%] mx-auto md:mx-0 max-[760px]:text-center max-[760px]:text-[16px]'>
              {t('description')}
            </p>
            <button
              onClick={handleClick}
              className='w-36 h-12 sm:w-40 sm:h-14 mt-6 sm:mt-8 px-6  font-medium bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300 shadow-md max-[760px]:mx-auto'
            >
              {t('button')}
            </button>
          </div>

          {/* Strelka faqat katta ekranlarda */}
          <motion.img
            src={strelka}
            alt="strelka"
            className='hidden md:block mt-12 lg:mt-[100px] w-[80px] h-[100px] lg:w-[120px] lg:h-[150px] ml-4 lg:ml-0'
            animate={{
              x: [0, 20, 0, -40, 0],
              y: [0, -5, 0, 5, 0],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>

    </div>

  );
};

export default AbouteUs;
