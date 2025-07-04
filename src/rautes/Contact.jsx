import React from 'react';
import { useTranslation } from 'react-i18next';
import GetInTuch from '../Componets/GetInTuch';

const Contact = () => {
  const { t } = useTranslation(); // i18n dan tarjimalarni olish

  return (
    <div className="bg-white">
      <div className="bg-[#0E1F51] py-16 text-center">
        <h1 className="text-[#FF3E54] text-[48px] font-bold mb-2">
          {t('contact')}
        </h1>
        <p className="text-white text-[18px]">
          {t('home')} / {t('contact')}
        </p>
      </div>
      <GetInTuch/>
    </div>
  );
};

export default Contact;
