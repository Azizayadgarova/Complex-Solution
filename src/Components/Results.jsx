import React from 'react';
import { useTranslation } from 'react-i18next';
import result1 from '../assets/result1.jpg';
import result2 from '../assets/result2.jpg';

const Results = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-24 px-4 sm:px-6 md:px-[4%] my-24">
      
      {/* 1-blok */}
      <div className="flex flex-col md:flex-row items-center gap-10 group transition-all duration-300 hover:-translate-y-1">
        <div className="w-full md:w-1/2">
          <img
            src={result1}
            alt="result"
            className="rounded-[16px] w-full h-auto shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
        <div className="w-full md:w-1/2 text-[#0E1F51] transition duration-300">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-5 leading-snug">
            {t('result_title_1')}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#444]">
            {t('result_desc_1')}
          </p>
        </div>
      </div>

      {/* 2-blok */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 group transition-all duration-300 hover:-translate-y-1">
        <div className="w-full md:w-1/2">
          <img
            src={result2}
            alt="result"
            className="rounded-[16px] w-full h-auto shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
        <div className="w-full md:w-1/2 text-[#0E1F51] transition duration-300">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-5 leading-snug">
            {t('result_title_2')}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#444]">
            {t('result_desc_2')}
          </p>
        </div>
      </div>

    </div>
  );
};

export default Results;
