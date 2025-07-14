import React, { useMemo } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaTools, FaFileAlt, FaLaptopCode, FaChartLine, FaProjectDiagram
} from 'react-icons/fa';
import OurProcess from '../Components/OurProcess';

const Serevises = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const serviceTabs = useMemo(() => [
    { path: '', label: t('tech_support'), icon: <FaTools /> },
    { path: 'one', label: t('documentation'), icon: <FaFileAlt /> },
    { path: 'two', label: t('software_solutions'), icon: <FaLaptopCode /> },
    { path: 'three', label: t('consulting'), icon: <FaChartLine /> },
    { path: 'four', label: t('it_projects'), icon: <FaProjectDiagram /> },
  ], [t]);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      {/* ... */}
      <div className="flex justify-center my-8 px-[4%] flex-wrap gap-3">
        {Array.isArray(serviceTabs) && serviceTabs.map(({ path, label, icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === ''}
            className={({ isActive }) => /* styling */}
          >
            {icon}
            <span>{label}</span>
          </NavLink>
        ))}
      </div>

      <Outlet />
      <OurProcess />
      {/* Back Button */}
    </div>
  );
};

export default Serevises;
