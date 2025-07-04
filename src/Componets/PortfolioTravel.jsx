import React from 'react'
import portfolioimg7 from '../assets/Frame7.svg'
import { Outlet } from 'react-router-dom'
const PortfolioTravel = () => (
  <div>
    <div>
      <div className=' mx-[4%] py-5 mt-[50px] px-[20px] items-center rounded-3xl bg-gray-50  flex gap-[10%]  shadow-2xl '>
        <div className='w-[40%] '>
          <img className='' src={portfolioimg7} alt="" />
        </div>
        <div className='w-[40%]  '>
          <h3 className='text-gray-900 text-[38px]  mt-3 font-medium'>Панель управления Cloud услугами Дата центра для клиентов</h3>
          <p className='text-gray-500   text-[16px]'>Разработывается платформа для управления облачными услугами дата-центра, включая выделение виртуальных и физических серверов, управление квотами на виртуальные ресурсы, предоставление услуги «Виртуальный дата-центр» и администрирование всех Cloud-сервисов дата-центра.
            Преимущества: Гибкое масштабирование, централизованное управление, высокая производительность и безопасность.
            Новые возможности:</p>
          <div className='m-[4px]  flex flex-wrap text-[14px] text-gray-600 gap-[15px]'>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100 font-medium mt-[10px] text-center '>✓ Автоматизированное выделение ресурсов</p>
            <p className='rounded-[15px]  px-[10px] py-[5px]  bg-gray-100  font-medium mt-[10px] text-center '>✓ Click, Payme, Paynet</p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  ont-medium mt-[10px] text-center '>✓ VIZA, UnionPay</p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  ont-medium mt-[10px] text-center '>✓ Управление виртуальными машинами </p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  ont-medium mt-[10px] text-center '>✓ Мониторинг состояния серверов </p>
          </div>
        </div>
      </div>
      <Outlet />
    </div></div>
)

export default PortfolioTravel