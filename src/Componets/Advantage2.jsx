import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Kartochka komponenti
const CardItem = ({ number, title, description }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: parseInt(number) * 0.1 }}
      className='relative bg-[#F7F7F7] rounded-2xl shadow-lg p-6 w-full h-full flex flex-col justify-between items-start text-left overflow-hidden hover:shadow-xl transition duration-300'
    >
      <div className='absolute top-4 right-6 text-gray-200 font-bold text-5xl opacity-80 z-0'>
        {number}
      </div>
      <h3 className='text-[#0E1F51] font-bold text-xl md:text-2xl mb-3 relative z-10'>
        {title}
        <span className='block h-0.5 w-12 bg-[#FF3E54] mt-2'></span>
      </h3>
      <p className='text-[#0E1F51] text-base md:text-lg leading-relaxed relative z-10'>
        {description}
      </p>
    </motion.div>
  );
};

// Bo‘lim komponenti
const Advantage2 = () => {
  const { t } = useTranslation();

  const items = [
    {
      number: '01',
      title: t('Dasturiy mahsulot pasportini tayyorlash') || "Dasturiy mahsulot pasportini tayyorlash",
      description:
        "— Mahsulotning texnik tavsifi, funksional imkoniyatlari va qo‘llanilishi haqida to‘liq ma’lumotlarni o‘z ichiga olgan rasmiy hujjat."
    },
    {
      number: '02',
      title: t('Loyihaning konsepsiyasini ishlab chiqish') || "Loyihaning konsepsiyasini ishlab chiqish",
      description:
        "Loyihaning maqsadi, asosiy vazifalari, texnologik yechimlari, joriy etish bosqichlari va kutilyotgan natijalar haqida umumiy konseptual hujjat."
    },
    {
      number: '03',
      title: t('Vakolatli davlat organlarida ekspertiza o‘tkazishga tayyorlash va hamroh bo‘lish') || "Ekspertizaga tayyorlash",
      description:
        "Tayyorlangan texnik hujjatlarni tegishli organlarga topshirish; ekspertiza talablariga muvofiq hujjatlarni moslashtirish; muvofiqlik, litsenziyalash yoki boshqa rasmiy tasdiqlovlar uchun texnik maslahat va huquqiy yordam ko‘rsatish."
    }
  ];

  return (
    <section className="bg-white px-4 md:px-8 lg:px-20 py-16">
      <div className='flex flex-col items-center text-center mb-12'>
        <h4 className='text-[28px] sm:text-[32px] md:text-[36px] text-[#0E1F51] font-bold max-w-4xl leading-snug'>
          {t('Texnik hujjatlarni ishlab chiqish va ekspertiza jarayonida ko‘maklashish') ||
            "Texnik hujjatlarni ishlab chiqish va ekspertiza jarayonida ko‘maklashish:"}
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
