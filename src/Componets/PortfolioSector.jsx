import React from 'react'
import portfolioimg3 from '../assets/Frame3.svg'
import { Outlet } from 'react-router-dom'
const PortfolioSector = () => (
  <div>
    <div>
      <div className=' mx-[4%] py-5 mt-[50px] px-[20px] items-center rounded-3xl  bg-gray-50  flex gap-[10%]  shadow-2xl '>
        <div className='w-[40%] '>
          <img className='' src={portfolioimg3} alt="" />
        </div>
        <div className='w-[40%] '>
          <h3 className='text-gray-900 text-[38px] mt-3 font-medium'>Веб сайт для компании в
            г. Нью Йорк, США</h3>
          <p className='text-gray-500  text-[16px]'>Разработан современный веб-сайт для парикмахерских услуг с удобным интерфейсом и возможностью онлайн-бронирования мастеров, выбора услуг и просмотра прайсов, а также необходимой информации об организации. Преимущества: Удобство для клиентов, автоматизация записи и управления расписанием, современный дизайн, привлечение новых клиентов через интернет.
            Новые возможности:</p>
          <div className='m-[4px]   flex flex-wrap text-[14px] text-gray-600 gap-[15px]'>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100 font-medium mt-[10px] text-center '>✓ Геолокация</p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  font-medium mt-[10px] text-center '>✓ Прайсы услуг</p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  ont-medium mt-[10px] text-center '>✓ Портфолио</p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  ont-medium mt-[10px] text-center '> ✓ Онлайн бронирование </p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  ont-medium mt-[10px] text-center '> ✓ Информация о мастерах </p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  ont-medium mt-[10px] text-center '> ✓ Совремменный дизайн </p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  ont-medium mt-[10px] text-center '> ✓ Обратная связь </p>

          </div>
        </div>
      </div>
      <Outlet />
    </div></div>
)

export default PortfolioSector