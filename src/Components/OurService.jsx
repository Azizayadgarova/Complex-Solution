import React from 'react';
import { useTranslation } from 'react-i18next';
import servises from '../assets/servis.svg';
import { NavLink } from 'react-router-dom';

const OurService = () => {
    const { t } = useTranslation();

    const renderBoldBeforeColon = (text) => {
        const [boldPart, ...rest] = text.split(':');
        return (
            <>
                <strong>{boldPart}:</strong>{rest.join(':')}
            </>
        );
    };

    // Xizmatlar va ularning path-lari
    const serviceKeys = [
        { key: 'serviceone', path: '/services' },        // index route
        { key: 'servicetwo', path: '/services/one' },
        { key: 'servicethree', path: '/services/two' },
        { key: 'servicefour', path: '/services/three' },
        { key: 'servicefive', path: '/services/four' },
    ];

    return (
        // Asosiy konteyner: Mobil va desktopda flex yo'nalishini o'zgartirish
        <div className='px-[4%] sm:px-6 lg:px-[4%] flex flex-col md:flex-row items-center justify-between my-12 sm:my-16 md:my-[100px]'>
            {/* Rasm qismi */}
            <div className='w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0'> {/* Mobil va desktopda joylashuv va margin */}
                <img src={servises} alt="Our services illustration" className='w-full max-w-[400px] md:max-w-[500px] h-auto object-contain' /> {/* Rasm o'lchamlari responsiv */}
            </div>
            
            {/* Matn kontenti qismi */}
            <div className='w-full md:w-1/2 md:pl-8 text-center md:text-left'> {/* Mobil va desktopda padding va matn tekislash */}
                <h2 className='text-[#FF3E54] text-2xl sm:text-3xl md:text-[30px] font-medium mb-4'>/ {t('services')} /</h2> {/* Matn o'lchamlari responsiv */}
                <ul className='space-y-3 text-[#0E1F51] text-base sm:text-lg'> {/* Matn o'lchamlari responsiv */}
                    {serviceKeys.map(({ key, path }) => (
                        <li
                            key={key}
                            className='flex justify-between items-start bg-[#F7F7F7] p-3 rounded-lg hover:shadow-md transition-all duration-200'
                        >
                            <span className="max-w-[85%]">{renderBoldBeforeColon(t(key))}</span>
                            <NavLink
                                to={path}
                                className="text-[24px] sm:text-[30px] text-[#FF3E54] hover:text-[#e62b42] transition-transform duration-200 transform hover:translate-x-1"
                            > → </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OurService;
