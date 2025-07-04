import React from 'react'
import portfolioimg2 from '../assets/Frame 2.svg'
import { Outlet } from 'react-router-dom'
const PortfolioLife = () => (
  <div>
    <div>
      <div className=' mx-[4%] py-5 mt-[50px] px-[20px] items-center rounded-3xl  bg-gray-50  flex gap-[10%]  shadow-2xl '>
        <div className='w-[40%] '>
          <img className='' src={portfolioimg2} alt="" />
        </div>
        <div className='w-[40%]  '>
          <h3 className='text-gray-900 text-[38px]  mt-3 font-medium'>Платформа для оформления
            договоров аренды для операторов</h3>
          <p className='text-gray-500   text-[16px]'>Разработана специализированная информационная система   для автоматизации процесса отвода резервных земельных  участков и оформления договоров аренды для операторов  телекоммуникационной связи. Система обеспечивает полное  цифровое сопровождение процесса – от подачи заявки до  заключения договора, исключая бумажный документооборот  и ускоряя взаимодействие между всеми участниками.  Дистанционное подача заявок и  предварительное согласование с уполномоченными  органами, автоматизированное формирование и оформление  договора, мониторинг всех этапов согласования заявок,  обеспечивающий прозрачность и контроль процесса   Преимущества: Новые возможности:</p>
          <div className='m-[4px]  flex flex-wrap text-[14px] text-gray-600 gap-[15px]'>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100 font-medium mt-[10px] text-center '>✓ Высокий уровень защиты данных и ограниченный доступ к информации</p>
            <p className='rounded-[15px]  px-[10px] py-[5px]  bg-gray-100  font-medium mt-[10px] text-center '>✓ Автоматизированное формирование договора аренды</p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  ont-medium mt-[10px] text-center '>✓ Мониторинг прогресса согласования</p>
            <p className='rounded-[15px] px-[10px] py-[5px]  bg-gray-100  ont-medium mt-[10px] text-center '>✓ Удобный интерфейс </p>
          </div>
        </div>
      </div>
      <Outlet />
    </div></div>
)

export default PortfolioLife