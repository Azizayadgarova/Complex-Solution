import React from 'react';
import { Outlet } from 'react-router-dom';
import portfolioimg1 from '../assets/Frame1.svg';

const PortfolioEducation = () => {
  return (
    <div>
      {/* Asosiy konteyner: padding, margin va flex yo'nalishi responsiv qilindi */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-[20px] 
                      py-8 sm:py-10 md:py-12 lg:py-5 
                      mt-8 sm:mt-12 md:mt-[50px] 
                      rounded-3xl bg-gray-50 shadow-2xl 
                      flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-[10%] items-center'>
        
        {/* Rasm qismi: kenglik va margin responsiv qilindi */}
        <div className='w-full md:w-[40%] flex justify-center mb-6 md:mb-0'> {/* Mobil markazlash uchun flex qo'shildi */}
          <img className='max-w-full h-auto object-contain' src={portfolioimg1} alt="Loyiha rasmi" />
        </div>

        {/* Matn kontenti qismi: kenglik, padding va matn tekislash responsiv qilindi */}
        <div className='w-full md:w-[40%] md:pl-8 text-center md:text-left'>
          <h3 className='text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-[38px] mt-3 font-medium mb-3'> {/* Matn o'lchamlari responsiv qilindi */}
            Платформа онлайн обучения для компании в г.Ташкент, Узбекистан
          </h3>
          <p className='text-gray-500 py-4 sm:py-5 text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed'> {/* Matn o'lchamlari responsiv qilindi */}
            Разработана платформа онлайн-обучения и повышения квалификации специалистов по охране труда для компании ООО “CENTR BEZOPASNOSTI TRUDA” с встроенным конструктором курсов и с возможностью онлайн-оплаты через Click и Payme, генерации сертификатов после прохождения курсов.
            Преимущества: Удалённое обучение, удобная оплата, автоматическая генерация сертификатов, мониторинг покупок онлайн курсов, защищенность контента от скачиваний.
            Новые возможности:
          </p>
          
          {/* Teglar qismi: padding, gap va matn o'lchamlari responsiv qilindi */}
          <div className='mt-4 py-4 flex flex-wrap text-xs sm:text-sm md:text-base lg:text-[16px] text-gray-600 gap-2 sm:gap-3 md:gap-[10px] justify-center md:justify-start'> {/* Mobil markazlash uchun justify-center qo'shildi */}
            <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ Защищённость контента от скачивания</p>
            <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ Click и Payme</p>
            <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ Конструктор курсов</p>
            <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ Аналитика прогресса участников</p>
            <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ Онлайн чат</p>
            <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ Удобный интерфейс управления</p>
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  );
}

export default PortfolioEducation;
