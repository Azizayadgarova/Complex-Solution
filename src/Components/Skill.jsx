import React from 'react';
import fone from '../assets/fone.jpg';

const Skill = () => {
  return (
    <div className="w-full px-[4%] ">
      <div
        className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] rounded-xl overflow-hidden"
        style={{
          backgroundImage: `url(${fone})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for dark effect */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0 rounded-xl"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight max-w-4xl mb-6">
            Har bir soha uchun <span className="text-[#FF3E54]">innovatsion</span> yondashuv
          </h2>

          <button className="bg-[#FF3E54] mt-8 sm:mt-12 hover:bg-red-700 text-white font-semibold py-4 px-10 sm:px-16 rounded-lg text-lg sm:text-xl transition-colors duration-300 shadow-lg">
            Получить оценку
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skill;
