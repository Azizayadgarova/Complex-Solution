import React, { useRef, useEffect } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // i18n qo‘shildi

// Icons
import img1 from '../assets/img1.svg';
import img2 from '../assets/img2.svg';
import img3 from '../assets/img3.svg';
import img4 from '../assets/img4.svg';

const CardComponent = ({ title, description, icon, number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const springValue = useSpring(0, { stiffness: 100, damping: 20 });

  const displayValue = useTransform(springValue, (latest) => {
    const num = Math.round(latest);
    return num < 10 ? `0${num}` : num.toString();
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(parseInt(number, 10));
    }
  }, [isInView, springValue, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.39, ease: 'easeOut', delay: parseInt(number) * 0.1 }}
      className='relative bg-[#F7F7F7] rounded-[20px] shadow-lg p-6 
                 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[250px] 
                 h-[300px] sm:h-[350px] lg:h-[300px] 
                 flex flex-col justify-start items-start text-left overflow-hidden'
    >
      <motion.div className='absolute top-6 right-6 text-gray-200 font-bold text-5xl opacity-80 z-0'>
        {displayValue}
      </motion.div>

      <div className='bg-red-100 p-4 rounded-[12px] shadow-sm mb-6 relative z-10'>
        <img className='w-[40px] h-[40px] object-contain' src={icon} alt={`${title} icon`} />
      </div>

      <h3 className='text-[#0E1F51] font-bold text-xl sm:text-2xl lg:text-2xl mb-2 relative z-10'>
        {title}
        <span className='block h-0.5 w-12 bg-[#FF3E54] mt-2'></span>
      </h3>

      <p className='text-black text-sm sm:text-base lg:text-base leading-relaxed mt-auto relative z-10'>
        {description}
      </p>
    </motion.div>
  );
};

const OurProcess = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-[100px] px-4 sm:px-6 md:px-8 lg:px-[4%]">
      <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-10 md:mb-12">
        <p className='text-base sm:text-lg md:text-xl lg:text-[20px] text-[#FF3E54] font-bold'>
          {t('ourprocess.tagline')}
        </p>
        <h2 className='text-3xl sm:text-4xl md:text-[36px] lg:text-[40px] text-[#0E1F51] font-medium'>
          {t('ourprocess.title')}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
        <CardComponent 
          title={t('ourprocess.research.title')} 
          description={t('ourprocess.research.description')} 
          icon={img1} 
          number="01" 
        />
        <CardComponent 
          title={t('ourprocess.planning.title')} 
          description={t('ourprocess.planning.description')} 
          icon={img2} 
          number="02" 
        />
        <CardComponent 
          title={t('ourprocess.execution.title')} 
          description={t('ourprocess.execution.description')} 
          icon={img3} 
          number="03" 
        />
        <CardComponent 
          title={t('ourprocess.testing.title')} 
          description={t('ourprocess.testing.description')} 
          icon={img4} 
          number="04" 
        />
      </div>
    </section>
  );
};

export default OurProcess;
