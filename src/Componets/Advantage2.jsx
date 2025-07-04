import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CardItem = ({ number, title, description }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: parseInt(number) * 0.1 }}
      className='relative bg-[#F7F7F7] rounded-[20px] shadow-lg p-6 w-full h-full flex flex-col justify-start items-start text-left overflow-hidden'
    >
      <div className='absolute top-4 right-6 text-gray-200 font-bold text-5xl opacity-80 z-0'>
        {number}
      </div>
      <h3 className='text-[#0E1F51] font-bold text-[22px] mb-2 relative z-10'>
        {title}
        <span className='block h-0.5 w-12 bg-[#FF3E54] mt-2'></span>
      </h3>
      <p className='text-[#0E1F51] text-[16px] leading-relaxed mt-auto relative z-10'>
        {description}
      </p>
    </motion.div>
  );
};

const Advantage2 = () => {
  const { t } = useTranslation();

  const items = [
    {
      number: '01',
      title: t('Dasturiy mahsulot pasportini tayyorlash') || "Doimiy texnik yangilanishlar",
      description:
        "— Mahsulotning texnik tavsifi, funksional imkoniyatlari va qo‘llanilishi haqida to‘liq ma’lumotlarni o‘z ichiga olgan rasmiy hujjat."
    },
    {
      number: '02',
      title: t('Loyihaning konsepsiyasini ishlab chiqish') || "Tizimni modernizatsiya qilish",
      description:
        " Loyihaning maqsadi, asosiy vazifalari, texnologik yechimlari, joriy etish bosqichlari va kutilyotgan natijalar haqida umumiy konseptual hujjat."
    },
    {
      number: '03',
      title: t('Vakolatli davlat organlarida ekspertiza o‘tkazishga tayyorlash va hamroh bo‘lish') || "Xatolik va muammolarga yechim",
      description:
        "Tayyorlangan texnik hujjatlarni tegishli organlarga topshirish;   Ekspertiza talablariga muvofiq hujjatlarni moslashtirish;  Muvofiqlik, litsenziyalash yoki boshqa rasmiy tasdiqlovlar uchun texnik maslahat va huquqiy yordam ko‘rsatish."
    }
  ];

  return (
    <section className="bg-white py-6 px-[4%]">
      <div className='flex flex-col items-center mb-12'>
        <h4 className='text-[35px] w-[50%] text-[#0E1F51] text-center font-bold'>Texnik hujjatlarni ishlab chiqish va ekspertiza jarayonida ko‘maklashish:</h4>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {items.map((item, i) => (
          <CardItem
            key={i}
            number={item.number}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Advantage2;
