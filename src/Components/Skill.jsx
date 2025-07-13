import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // ➕ i18n
import fone from '../assets/fone.jpg';

const Skill = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // ➕ t

  const handleClick = () => {
    navigate('/portfolio');
  };

  return (
    <div className="w-full px-[4%]">
      <div
        className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] rounded-xl overflow-hidden"
        style={{
          backgroundImage: `url(${fone})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0 rounded-xl"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight max-w-4xl mb-6">
            {t('skill_title_part1')}{' '}
            <span className="text-[#FF3E54]">{t('skill_title_highlight')}</span>{' '}
            {t('skill_title_part2')}
          </h2>

          <button
            onClick={handleClick}
            className="bg-[#FF3E54] mt-8 sm:mt-12 hover:bg-red-700 text-white font-semibold py-4 px-10 sm:px-16 rounded-lg text-lg sm:text-xl transition-colors duration-300 shadow-lg"
          >
            {t('skill_button')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skill;
