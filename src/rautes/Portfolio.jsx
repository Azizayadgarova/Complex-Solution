import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Outlet } from 'react-router-dom';
import {
    FaList,
    FaNetworkWired,
    FaHospital,
    FaSeedling,
    FaUniversity,
    FaServer,
    FaBook,
    FaBriefcase,
} from 'react-icons/fa';

const Portfolio = () => {
    const { t } = useTranslation();
    const tabs = [
        { path: '', labelKey: 'all', icon: <FaList /> },
        { path: 'portfoliolife', labelKey: 'life', icon: <FaNetworkWired /> },
        { path: 'portfoliomoments', labelKey: 'moments', icon: <FaHospital /> },
        { path: 'portfolionature', labelKey: 'nature', icon: <FaSeedling /> },
        { path: 'portfoliotravel', labelKey: 'travel', icon: <FaServer /> },
        { path: 'portfolioeducation', labelKey: 'education', icon: <FaBook /> },
        { path: 'portfoliosector', labelKey: 'sector', icon: <FaBriefcase /> },
    ];

    return (
        <div className='bg-white mb-[100px]'>
            {/* Header */}
            <div className="bg-[#0E1F51] py-16 text-center">
                <h1 className="text-[#FF3E54] text-[48px] font-bold mb-2">{t('portfolio')}</h1>
                <p className="text-white text-[18px]">{t('home')} / {t('portfolio')}</p>
            </div>

            <div className='flex flex-col items-center mb-12 mt-[100px]'>
                <h2 className='text-[#0E1F51] text-[40px] font-medium'>{t('experience')}</h2>
            </div>
            <div className="flex justify-center my-8 px-[4%] flex-wrap">
                {tabs.map(({ path, labelKey, icon }, index) => (
                    <NavLink
                        key={path}
                        to={path}
                        end={path === ''}
                        className={({ isActive }) =>
                            `group relative inline-flex items-center gap-2 px-6 py-3 font-medium text-[14px] border 
        border-transparent transition-all duration-300
        ${isActive ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:text-[#FF3E54] hover:border-[#FF3E54]'}

        ${index === 0 ? 'rounded-l-3xl' : ''}
        ${index === tabs.length - 1 ? 'rounded-r-3xl' : ''}
        ${index > 0 ? '-ml-px' : ''}
        `
                        }
                    >
                        <span className="transition-transform group-hover:-translate-y-1 group-hover:scale-105">
                            {icon}
                        </span>
                        <span className="relative z-10">{t(labelKey)}</span>

                        {/* Shine effect */}
                        <span className="absolute top-0 left-0 w-full h-full rounded-3xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 group-hover:animate-shine"></span>
                    </NavLink>
                ))}
            </div>

            <Outlet />
        </div>
    );
};

export default Portfolio;
