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

const Advantage1 = () => {
  const { t } = useTranslation();

  const items = [
    {
      number: '01',
      title: t('Yordam va Yangilanishlar') || "Doimiy texnik yangilanishlar",
      description:
        "Ishlab chiqilgan dasturiy ta'minotni doimiy ravishda yangilab boramiz. Xavfsizlik, platforma mosligi va foydalanuvchi tajribasini oshirish uchun yangi funksiyalar qo‘shamiz."
    },
    {
      number: '02',
      title: t('Modernizatsiya') || "Tizimni modernizatsiya qilish",
      description:
        "Mijoz ehtiyojlariga mos tarzda interfeys dizaynini yaxshilash, ishlash tezligini oshirish va zamonaviy texnologiyalar bilan integratsiya qilish xizmatlarini taqdim etamiz."
    },
    {
      number: '03',
      title: t('Tezkor texnik yordam') || "Xatolik va muammolarga yechim",
      description:
        "Har qanday nosozlik yoki texnik xatolikda tezkor yordam ko‘rsatamiz. Muammoni masofaviy yoki joyida hal qilamiz, foydalanuvchilarga tushuntirish va maslahatlar beramiz."
    }
  ];

  return (
    <section className="bg-white  px-[4%]">
      <div className='flex flex-col  py-6 items-center mb-12'>
        <h4 className='text-[35px] w-[50%] text-[#0E1F51] font-bold text-center'>Texnik yordam va qo‘llab-quvvatlash:</h4>
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

export default Advantage1;
