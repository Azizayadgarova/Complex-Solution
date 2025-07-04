import React from 'react';
import comony from '../assets/abouteimage.svg';
import strelka from '../assets/Strelka.png';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AbouteUs = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/aboute');
  };

  return (
    <div className='bg-[#F7F7F7] flex flex-col md:flex-row px-[4%] py-[100px] justify-between items-center'>
      <div className='w-full md:w-1/2 mb-10 md:mb-0'>
        <img className='max-w-[450px] w-full' src={comony} alt="About us image" />
      </div>
      <div className='w-full md:w-1/2 md:pl-8'>
        <p className='text-[#FF3E54] text-[24px] font-medium'>\ {t('label')} \</p>
        <h2 className='text-[#0E1F51] text-[36px] md:text-[46px] font-medium '>{t('title')}</h2>

        <div className='flex items-start mt-5'>
          <div className='flex-1'>
            <p className='mt-[20px] text-[18px] md:text-[20px] text-balance w-[95%]'>{t('description')}</p>
            <button
              onClick={handleClick}
              className='w-40 h-15 mt-5 px-6 py-3 font-medium bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300'
            >
              {t('button')}
            </button>
          </div>
          <motion.img
            src={strelka}
            alt="strelka"
            className='hidden md:block mt-[100px] w-[120px] h-[150px]'
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
