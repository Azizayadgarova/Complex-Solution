import React from 'react';
import { motion } from 'framer-motion'; // Framer Motion import qilindi

import img1 from '../assets/img1.svg';
import img2 from '../assets/img2.svg';
import img3 from '../assets/img3.svg';
import img4 from '../assets/img4.svg';

const CardComponent = ({ title, description, icon, number }) => {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.39, ease: 'easeOut', delay: parseInt(number) * 0.1 }}
            className='relative bg-[#F7F7F7] rounded-[20px] shadow-lg p-6 w-[250px] h-[300px] flex flex-col justify-start items-start text-left overflow-hidden'
        >
            <div className='absolute top-6 right-6 text-gray-200 font-bold text-5xl opacity-80 z-0'>
                {number}
            </div>
            <div className='bg-red-100 p-4 rounded-[12px] shadow-sm mb-6 relative z-10'>
                <img className='w-[40px] h-[40px] object-contain' src={icon} alt={`${title} icon`} />
            </div>
            <h3 className='text-[#0E1F51] font-bold text-2xl mb-2 relative z-10'>
                {title}
                <span className='block h-0.5 w-12 bg-[#FF3E54] mt-2'></span>
            </h3>
            <p className='text-black text-base leading-relaxed mt-auto relative z-10'>
                {description}
            </p>
        </motion.div>
    );
};

const OurProcess = () => {
    return (
        <section className="bg-white py-[100px] px-[4%]">
            <div className='flex flex-col items-center mb-12'>
                <h4 className='text-[20px] text-[#FF3E54] font-bold'>\ Planning \</h4>
                <h2 className='text-[#0E1F51] text-[40px] font-medium'>Our Process</h2>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                <CardComponent
                    title="Research"
                    description="It is a long established fact that a reader will be distracted by the readable content of a page."
                    icon={img1}
                    number="01"
                />
                <CardComponent
                    title="Planning"
                    description="It is a long established fact that a reader will be distracted by the readable content of a page."
                    icon={img2}
                    number="02"
                />
                <CardComponent
                    title="Execution"
                    description="It is a long established fact that a reader will be distracted by the readable content of a page."
                    icon={img3}
                    number="03"
                />
                <CardComponent
                    title="Test"
                    description="It is a long established fact that a reader will be distracted by the readable content of a page."
                    icon={img4}
                    number="04"
                />
            </div>
        </section>
    );
};

export default OurProcess;
