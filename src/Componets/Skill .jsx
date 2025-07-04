import React from 'react';
import fone from '../assets/fone.jpg'; // Make sure this path is correct for your background image

const Skill = () => {
  return (
    // Main container with background image and dark overlay
    <div
      className="relative w-full py-20 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden rounded-xl mx-auto max-w-7xl" // Added max-w-7xl and mx-auto for centering
      style={{
        backgroundImage: `url(${fone})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // Optional: you can add a fixed height if needed, e.g., minHeight: '400px'
      }}
    >
     
      <div className="relative z-10 text-center text-white flex flex-col items-center justify-center h-full">
        {/* Main Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 max-w-4xl">
        Har bir soha uchun innovatsion yondashuv 
        </h2>

        {/* Subtitle with highlighted word */}
        

        {/* Button */}
        <button className="bg-[#FF3E54] mt-20 hover:bg-red-700 text-white font-semibold py-4 px-12 rounded-lg text-xl transition-colors duration-300 shadow-lg">
          Получить оценку
        </button>
      </div>
    </div>
  );
};

export default Skill;