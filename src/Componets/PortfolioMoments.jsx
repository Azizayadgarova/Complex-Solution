import React from 'react'
import portfolioimg5 from '../assets/Frame5.svg'
import portfolioimg4 from '../assets/Frame4.svg'

import { Outlet } from 'react-router-dom'
const PortfolioMoments = () => (
  <div>
    <div>
      <div className=' mx-[4%] py-5 mt-[50px] px-[20px] items-center rounded-3xl  bg-gray-50  flex gap-[10%]  shadow-2xl '>
        <div className='w-[40%] '>
          <img className='' src={portfolioimg5} alt="" />
        </div>
        <div className='w-[40%]  '>
          <h3 className='text-gray-900 text-[38px]  mt-3 font-medium'>Система финансирования лечения лиц входящих в льготную категорию</h3>
          <p className='text-gray-500   text-[16px]'>Разработана платформа, которая обеспечивает автоматизацию процесса начиная от формирования отчета до финансирования лечения лиц, входящих в льготную категорию. Реализована автоматическая проверка при формировании отчетов на соответствие нормативам, установленным Министерствор здравохранения и Министерством финансирования.
            Преимущества: Прозрачное распределение средств, автоматизация учёта и контроля отчетов, соответствие внесенных данных требованиям аудиторов, снижение бюрократической нагрузки.
            Новые возможности:</p>
          <div className='m-[4px]  flex flex-wrap text-[14px] text-gray-600 gap-[15px]'>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100 font-medium mt-[10px] text-center '>✓ Онлайн формирование отчетов и отправка на запроса на финансирование</p>
            <p className='rounded-[15px]  px-[10px] py-[5px]  bg-gray-100  font-medium mt-[10px] text-center '>✓ MIS, MIS2, DMED</p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  ont-medium mt-[10px] text-center '>✓ ГЦП, Минюст, ГНК, ВТЭК</p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  ont-medium mt-[10px] text-center '>✓ MyGOV </p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  ont-medium mt-[10px] text-center '>✓ OneID, E-IMZO </p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  ont-medium mt-[10px] text-center '>✓ Отслеживание статуса финансирования </p>

          </div>
        </div>
      </div>
      <div className=' mx-[4%] py-5 mt-[50px] px-[20px] items-center  bg-gray-50  rounded-3xl flex gap-[10%]  shadow-2xl '>
        <div className='w-[40%] '>
          <img className='' src={portfolioimg4} alt="" />
        </div>
        <div className='w-[40%]  '>
          <h3 className='text-gray-900 text-[38px]  mt-3 font-medium'>Информационная система для сети аптек в г.Навои, Узбекистан</h3>
          <p className='text-gray-500   text-[16px]'>Разработана система для ООО “NAVBAXOR PHARM”, которая позволила управлять и мониторить всеми аптеками и складами в режиме онлайн, оптимизировать процессы закупок, учёта и логистики, а также увеличить скорость работы персонала в несколько раз. 
Преимущества: Централизованное управление, быстрый доступ к данным, сокращение ошибок и снижение затрат. 
            Новые возможности:</p>
          <div className='m-[4px]  flex flex-wrap text-[14px] text-gray-600 gap-[15px]'>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100 font-medium mt-[10px] text-center '>✓ OFD&XPrinter</p>
            <p className='rounded-[15px]  px-[10px] py-[5px]  bg-gray-100  font-medium mt-[10px] text-center '>✓ Orbit сканер</p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  ont-medium mt-[10px] text-center '>✓ Aвтоматизация заказов</p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  ont-medium mt-[10px] text-center '>✓ Онлайн-мониторинг запасов </p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  ont-medium mt-[10px] text-center '>✓ Ревизия аптек </p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  ont-medium mt-[10px] text-center '>✓ Накладные </p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  ont-medium mt-[10px] text-center '>✓ Быстрая продажа </p>

          </div>
        </div>
      </div>

      <Outlet />
    </div>
  </div>
)

export default PortfolioMoments