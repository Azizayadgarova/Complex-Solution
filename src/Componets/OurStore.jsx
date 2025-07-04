import React from 'react'
import abouteimage from '../assets/abouteimage.svg'
import { useTranslation } from 'react-i18next';
import itpark from '../assets/itpark.png'
const OurStore = () => {
    const { t } = useTranslation();
    return (
        <div className='bg-[#F7F7F7] flex px-[4%] py-[100px] justify-between items-center'>
            <div className='w-1/2'>
                <img className='max-w-[450px] w-full rounded-lg' src={abouteimage} alt="About us image" />
            </div>
            <div className='w-1/2 '>
                <p className='text-[#FF3E54] text-[24px] font-medium'>\ {t('label')} \</p>
                <h2 className='text-[#0E1F51] text-[40px] w-[85%] font-medium'>COMPLEX SOLUTIONS LLC</h2>
                <p className='w-[80%] my-2 font-normal'>{t('text')}</p>
                <div className='flex items-center bg-white  w-[350px]  rounded-xl mt-2 shadow-sm'>
                    <img className='h-[90px]' src={itpark} alt="" />
                    <span className='w-[300px] font-medium'>{t('resident')}</span>
                </div>
            </div>
        </div>
    )
}

export default OurStore