import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Outlet } from 'react-router-dom';
import {
  FaList, FaNetworkWired, FaHospital,
  FaSeedling, FaServer, FaBook, FaBriefcase
} from 'react-icons/fa';

const Portfolio = () => {
  const { t } = useTranslation();

  const tabs = useMemo(() => [
    { path: '', labelKey: 'all', icon: <FaList /> },
    { path: 'portfoliolife', labelKey: 'life', icon: <FaNetworkWired /> },
    { path: 'portfoliomoments', labelKey: 'moments', icon: <FaHospital /> },
    { path: 'portfolionature', labelKey: 'nature', icon: <FaSeedling /> },
    { path: 'portfoliotravel', labelKey: 'travel', icon: <FaServer /> },
    { path: 'portfolioeducation', labelKey: 'education', icon: <FaBook /> },
    { path: 'portfoliosector', labelKey: 'sector', icon: <FaBriefcase /> },
  ], []);

  return (
    <div className="bg-white mb-[100px]">
      {/* Header */}
      <div className="bg-[#0E1F51] py-16 text-center">
        <h1 className="text-[#FF3E54] text-4xl md:text-5xl font-bold mb-2">
          {t('portfolio')}
        </h1>
        <p className="text-white text-base md:text-lg">
          {t('home')} / {t('portfolio')}
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 px-4 md:px-16">
        {Array.isArray(tabs) && tabs.map(({ path, labelKey, icon }, idx) => (
          <NavLink
            key={path}
            to={path}
            end={path === ''}
            className={({ isActive }) => /* styling */}
          >
            {icon}
            <span>{t(labelKey)}</span>
          </NavLink>
        ))}
      </div>

      <Outlet />
    </div>
  );
};

export default Portfolio;
