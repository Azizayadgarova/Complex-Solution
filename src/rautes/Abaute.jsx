import React from 'react';
import { useTranslation } from 'react-i18next';

import OurStore from '../Componets/OurStore';
import Advantages from '../Componets/Advantages';
import Projects from '../Componets/Projects';
const Abaute = () => {
    const { t } = useTranslation();

    return (
        <div className='bg-white'>
            <div className="bg-[#0E1F51] py-16 text-center">
                <h1 className="text-[#FF3E54] text-[40px] font-bold mb-2">{t('about')}</h1>
                <p className="text-white text-[18px]">{t('home')} / {t('about')}</p>
            </div>
            <OurStore/>
            <Advantages/>
            <Projects/>
        </div>
    );
}

export default Abaute;
