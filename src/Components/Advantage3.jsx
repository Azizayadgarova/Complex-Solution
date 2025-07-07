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

const Advantage3 = () => {
  const { t } = useTranslation();

  const items = [
    {
      number: '01',
      title: t('Turn-key” yechimlar') || "“Turn-key” yechimlar",
      description:
        "To‘liq funksional va tayyor ishlaydigan tizimlarni ishlab chiqamiz: dizayn, backend, frontend va testlar bilan birga."
    },
    {
      number: '02',
      title: t('Veb-ilovalar') || "Veb-ilovalar",
      description:
        "Biznes ehtiyojlaringizga moslab, zamonaviy texnologiyalar asosida samarali veb-platformalarni ishlab chiqamiz."
    },
    {
      number: '03',
      title: t('Mobil ilovalar') || "Mobil ilovalar",
      description:
        "iOS va Android qurilmalari uchun tez, qulay va ishonchli mobil ilovalarni yaratamiz va App Store/Google Play’da joylashtiramiz."
    },
    {
      number: '04',
      title: t('Korporativ tizimlar') || "Korporativ tizimlar",
      description:
        "Ichki biznes jarayonlaringizni avtomatlashtirish uchun ERP, CRM, HRM kabi korporativ yechimlarni yaratamiz."
    },
    {
      number: '05',
      title: t('Texnik maslahat va loyiha boshqaruvi') || "Texnik maslahat va loyiha boshqaruvi",
      description:
        "Loyihani muvaffaqiyatli amalga oshirish uchun IT maslahat, risk tahlili va texnik nazoratni taklif qilamiz."
    }
  ];

  return (
    <section className="bg-white px-4 md:px-8 lg:px-20 py-16">
      <div className='flex flex-col items-center text-center mb-12'>
        <h4 className='text-[28px] sm:text-[32px] md:text-[36px] text-[#0E1F51] font-bold max-w-4xl leading-snug'>
          {t("Dasturiy ta'minot ishlab chiqish") || "Dasturiy ta'minot ishlab chiqish"}
        </h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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

export default Advantage3;
