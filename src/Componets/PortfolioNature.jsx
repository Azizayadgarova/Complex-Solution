import React from 'react'
import portfolioimg6 from '../assets/Frame6.svg'
import { Outlet } from 'react-router-dom'
const PortfolioNature = () => (
  <div>
    <div>
      <div className=' mx-[4%] py-5 mt-[50px] px-[20px] items-center rounded-3xl bg-gray-50  flex gap-[10%]  shadow-2xl '>
        <div className='w-[40%] '>
          <img className='' src={portfolioimg6} alt="" />
        </div>
        <div className='w-[40%]  '>
          <h3 className='text-gray-900 text-[38px]  mt-3 font-medium'>Единая система арендования сельхоз земель Республики Узбекистан</h3>
          <p className='text-gray-500   text-[16px]'>Разработана и внедрена система, обеспечивающая формирование проектов земельных участков, электронное согласование с уполномоченными организациями, вывод участков на аукцион, заключение электронного договора аренды и формирование кадастровых документов
Преимущества: Прозрачность и ускорение процесса выделения сельхоз земель, интеграция с государственными информационными системами и платформами, автоматизация документооборота.
Новые возможности:</p>
          <div className='m-[4px]  flex flex-wrap text-[14px] text-gray-600 gap-[15px]'>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100 font-medium mt-[10px] text-center '>✓ E-AUKSION</p>
            <p className='rounded-[15px]  px-[10px] py-[5px]  bg-gray-100  font-medium mt-[10px] text-center '>✓ UzCAD</p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  ont-medium mt-[10px] text-center '>✓ OneID, E-IMZO</p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  ont-medium mt-[10px] text-center '>✓ Отслеживание статуса </p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  ont-medium mt-[10px] text-center '>✓ Удобный интерфейс управления </p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  ont-medium mt-[10px] text-center '>✓ Карта арендованных сельхоз земель</p>

          </div>
        </div>
      </div>
      <Outlet />
    </div></div>
)

export default PortfolioNature