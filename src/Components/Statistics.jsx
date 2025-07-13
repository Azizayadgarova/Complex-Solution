import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next'; // i18n qo‘shildi
import person from '../assets/person.png';

const Statistics = () => {
  const { t } = useTranslation(); // i18next hook
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const stats = [
    { number: 250, label: t('stats.projects') },
    { number: 20, label: t('stats.services') },
    { number: 150, label: t('stats.reviews') },
    { number: 15, label: t('stats.partners') }
  ];

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden min-h-[300px] sm:min-h-[360px]"
      ref={ref}
    >
      <img
        src={person}
        alt="Person illustration"
        className="
          absolute left-1/2 transform -translate-x-1/2
          w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px]
          bottom-[-80px] sm:bottom-[-100px] md:bottom-[-120px] lg:-bottom-28
          z-0 pointer-events-none select-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md border p-4 sm:p-6 flex flex-col justify-center items-center text-center hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-[#0E1F51]">
              {inView && <CountUp end={stat.number} duration={2} />}+
            </h3>
            <p className="mt-2 text-base sm:text-lg text-[#0E1F51] font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
