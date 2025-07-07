import React from 'react';
import { useTranslation } from 'react-i18next';
import comony from '../assets/abouteimage.svg';
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
    <div className='bg-[#F7F7F7] flex flex-col md:flex-row px-4 sm:px-6 md:px-8 lg:px-[4%] py-12 sm:py-16 md:py-20 lg:py-[100px] justify-between items-center'>
      {/* Rasm qismi: kenglik va margin responsiv qilindi */}
      <div className='w-full md:w-1/2 mb-8 sm:mb-10 md:mb-0 flex justify-center md:justify-start'> {/* Mobil markazlash uchun flex qo'shildi */}
        <img className='max-w-full sm:max-w-[350px] md:max-w-[450px] w-full h-auto object-contain' src={comony} alt="About us illustration" /> {/* Rasm o'lchamlari responsiv qilindi */}
      </div>
      {/* Matn kontenti qismi: padding va matn tekislash responsiv qilindi */}
      <div className='w-full md:w-1/2 md:pl-8 text-center md:text-left'> {/* Mobil matn markazlash uchun text-center qo'shildi */}
        <p className='text-lg sm:text-xl md:text-2xl lg:text-[24px] text-[#FF3E54] font-medium mb-2'>\ {t('label')} \</p> {/* Matn o'lchamlari responsiv qilindi */}
        <h2 className='text-[30px] sm:text-4xl md:text-[46px] lg:text-[46px] text-[#0E1F51]  font-medium mb-4'> {t('title')}</h2> {/* Matn o'lchamlari responsiv qilindi */}

        <div className='flex flex-col md:flex-row items-start mt-4 sm:mt-5'> {/* Flex yo'nalishi responsiv qilindi */}
          <div className='flex-1 md:flex md:justify-center md:flex-col'>
            <p className='mt-4 sm:mt-5 text-base sm:text-lg lg:text-[20px] text-gray-700 leading-relaxed w-full md:w-[95%] mx-auto md:mx-0'> {/* Matn o'lchamlari va kenglik responsiv qilindi */}
              {t('description')}
            </p>
            <button
              onClick={handleClick}
              className='w-36 h-12 sm:w-40 sm:h-14 mt-6 sm:mt-8 px-6 py-3 font-medium bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300 shadow-md'
            >
              {t('button')}
            </button>
          </div>
          <motion.img
            src={strelka}
            alt="strelka"
            className='hidden md:block mt-12 lg:mt-[100px] w-[80px] h-[100px] lg:w-[120px] lg:h-[150px] ml-4 lg:ml-0' // O'lchamlar va margin responsiv qilindi
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
