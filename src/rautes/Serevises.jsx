import React from 'react';
import OurProcess from '../Componets/OurProcess';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  FaTools,
  FaFileAlt,
  FaLaptopCode,
  FaChartLine,
  FaProjectDiagram,
} from 'react-icons/fa';
import Statistics from '../Componets/Statistics';

const Serevises = () => {
  const navigate = useNavigate();

  const serviceTabs = [
    { path: '', label: 'Texnik yordam', icon: <FaTools /> },
    { path: 'one', label: 'Hujjatlar', icon: <FaFileAlt /> },
    { path: 'two', label: 'Dasturiy yechimlar', icon: <FaLaptopCode /> },
    { path: 'three', label: 'Konsalting', icon: <FaChartLine /> },
    { path: 'four', label: 'IT-loyihalar', icon: <FaProjectDiagram /> },
  ];

  return (
    <div className='bg-white min-h-screen'>

      {/* Header */}
      <div className="bg-[#0E1F51] py-16 text-center">
        <h1 className="text-[#FF3E54] text-[48px] font-bold mb-2">Bizning xizmatlar</h1>
        <p className="text-white text-[18px]">Bosh sahifa / Xizmatlar</p>
      </div>

      {/* Xizmat Tab Buttonlar */}
      <div className="flex justify-center my-8 px-[4%] flex-wrap gap-3">
        {serviceTabs.map(({ path, label, icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === ''}
            className={({ isActive }) =>
              `flex items-center gap-2 px-5 py-3 text-[16px] font-semibold rounded-full border 
              transition duration-300 ease-in-out
              ${isActive
                ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md'
                : 'bg-[#F7F7F7] text-[#0E1F51] hover:border-[#FF3E54] hover:text-[#FF3E54]'}`
            }
          >
            <span className="text-[18px]">{icon}</span>
            <span>{label}</span>
          </NavLink>
        ))}
      </div>

      {/* Chiqariladigan outletlar */}
      <Outlet />
      <OurProcess />
      {/* Orqaga tugmasi */}
      <div className="flex justify-center my-10">
        <button
          onClick={() => navigate('/')}
          className='bg-[#FF3E54] text-white px-8 py-3 rounded-full text-[16px] font-semibold shadow-md hover:bg-[#e62b42] transition-transform hover:scale-105'
        >
          ← Bosh sahifaga qaytish
        </button>
      </div>
    </div>
  );
};

export default Serevises;
