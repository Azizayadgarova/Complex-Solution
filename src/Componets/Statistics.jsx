import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import person from '../assets/person.png';

const stats = [
  { number: 250, label: 'Muvaffaqiyatli loyihalar' },
  { number: 20, label: 'Biznes uchun xizmatlar' },
  { number: 150, label: 'Ijobiy fikrlar' },
  { number: 15, label: 'Xorijdagi hamkorlar' }
];

const Statistics = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      className="relative py-24 bg-white overflow-hidden h-[360px]"
      ref={ref}
    >
      {/* Orqa fon rasmi */}
      <img
        src={person}
        alt="person"
        className="absolute  left-1/2 transform -translate-x-1/2 lg:w-[600px] w-[400px] -bottom-28 mb-10  z-0 pointer-events-none select-none"
      />

      {/* Statistika kartalari */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md border p-6 flex flex-col justify-center items-center text-center hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-4xl font-bold text-[#0E1F51]">
              {inView && <CountUp end={stat.number} duration={2} />}+
            </h3>
            <p className="mt-2 text-lg text-[#0E1F51] font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
