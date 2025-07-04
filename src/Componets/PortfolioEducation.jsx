import React from 'react'
import { Outlet } from 'react-router-dom'
import portfolioimg1 from '../assets/Frame1.svg'
const PortfolioEducation = () => {
  return (
    <div>
          <div className=' mx-[4%] py-5 mt-[50px] px-[20px] items-center rounded-3xl  bg-gray-50  flex gap-[10%]  shadow-2xl '>
        <div className='w-[40%] '>
          <img className='' src={portfolioimg1} alt="" />
        </div>
        <div className='w-[40%] '>
          <h3 className='text-gray-900 text-[38px] mt-3 font-medium'>Платформа онлайн обучения для компании в г.Ташкент, Узбекистан</h3>
          <p className='text-gray-500 py-6 text-[18px]'>Разработана платформа онлайн-обучения и повышения квалификации специалистов по охране труда для компании ООО “CENTR BEZOPASNOSTI TRUDA” с встроенным конструктором курсов и с возможностью онлайн-оплаты через Click и Payme, генерации сертификатов после прохождения курсов.
            Преимущества: Удалённое обучение, удобная оплата, автоматическая генерация сертификатов, мониторинг покупок онлайн курсов, защищенность контента от скачиваний.
            Новые возможности:</p>
          <div className='m-[4px] py-[20px]  flex flex-wrap text-[16px] text-gray-600 gap-[10px]'>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100 font-medium mt-[10px] text-center '>✓ Защищённость контента от скачивания</p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  font-medium mt-[10px] text-center '>✓ Click и Payme</p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  ont-medium mt-[10px] text-center '>✓ Конструктор курсов</p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  ont-medium mt-[10px] text-center '>✓ Аналитика прогресса участников</p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  ont-medium mt-[10px] text-center '>✓ Онлайн чат</p>
            <p className='rounded-[15px] px-[10px] py-[5px]   bg-gray-100 ont-medium mt-[10px] text-center '>✓ Удобный интерфейс управления</p>
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default PortfolioEducation