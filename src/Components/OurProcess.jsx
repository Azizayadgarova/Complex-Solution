import React, { useRef, useEffect } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';

// Assetslar uchun joy ushbu faylda bo'lishi kerak.
import img1 from '../assets/img1.svg'; // Research icon
import img2 from '../assets/img2.svg'; // Planning icon
import img3 from '../assets/img3.svg'; // Execution icon
import img4 from '../assets/img4.svg'; // Test icon

// CardComponent ni bu yerga ko'chirdim va responsiv stillarni qo'shdim
const CardComponent = ({ title, description, icon, number }) => {
    // Raqam animatsiyasi uchun Framer Motion hook'lari
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 }); // Ko'ringanda animatsiya boshlanadi
    const springValue = useSpring(0, { stiffness: 100, damping: 20 }); // Animatsiya tezligi va silliqligi

    // Raqamni int'ga aylantiramiz va animatsiyani unga bog'laymiz
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
            // Kartochka o'lchamlari responsiv qilindi
            className='relative bg-[#F7F7F7] rounded-[20px] shadow-lg p-6 
                       w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[250px] 
                       h-[300px] sm:h-[350px] lg:h-[300px] 
                       flex flex-col justify-start items-start text-left overflow-hidden'
        >
            {/* Yuqori o'ng burchakdagi animatsiyali raqam */}
            <motion.div className='absolute top-6 right-6 text-gray-200 font-bold text-5xl opacity-80 z-0'>
                {displayValue}
            </motion.div>

            {/* Ikonka konteyneri */}
            <div className='bg-red-100 p-4 rounded-[12px] shadow-sm mb-6 relative z-10'>
                <img className='w-[40px] h-[40px] object-contain' src={icon} alt={`${title} icon`} />
            </div>

            {/* Sarlavha */}
            <h3 className='text-[#0E1F51] font-bold text-xl sm:text-2xl lg:text-2xl mb-2 relative z-10'> {/* Matn o'lchami responsiv qilindi */}
                {title}
                {/* Sarlavha ostidagi qizil chiziq */}
                <span className='block h-0.5 w-12 bg-[#FF3E54] mt-2'></span>
            </h3>

            {/* Tavsif matni */}
            <p className='text-black text-sm sm:text-base lg:text-base leading-relaxed mt-auto relative z-10'> {/* Matn o'lchami responsiv qilindi */}
                {description}
            </p>
        </motion.div>
    );
};


const OurProcess = () => {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-[100px] px-4 sm:px-6 md:px-8 lg:px-[4%]"> {/* Padding responsiv qilindi */}
      <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-10 md:mb-12"> {/* Margin responsiv qilindi */}
        <p className='text-base sm:text-lg md:text-xl lg:text-[20px] text-[#FF3E54] font-bold'>\ Planning \</p> {/* Matn o'lchami responsiv qilindi */}
        <h2 className='text-3xl sm:text-4xl md:text-[36px] lg:text-[40px] text-[#0E1F51] font-medium'> Our Prosses </h2> {/* Matn o'lchami responsiv qilindi */}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center"> {/* Gap responsiv qilindi */}
        <CardComponent 
          title="Tadqiqot" 
          description="Ehtiyojlaringiz va loyiha maqsadlaringizni chuqur tahlil qilishdan boshlaymiz, kompleks yondashuvni ta'minlaymiz." 
          icon={img1} 
          number="01" 
        />
        <CardComponent 
          title="Rejalashtirish" 
          description="Samarali amalga oshirish uchun asosiy bosqichlar va resurslarni aniqlab, batafsil reja va strategiya ishlab chiqamiz." 
          icon={img2} 
          number="02" 
        />
        <CardComponent 
          title="Ijro" 
          description="Loyiha ijrosiga kirishamiz, rejaga qat'iy rioya qilgan holda barcha vazifalarni yuqori sifatda bajarishni kafolatlaymiz." 
          icon={img3} 
          number="03" 
        />
        <CardComponent 
          title="Sinov" 
          description="Sinchkov sinovlar va takomillashtirish orqali loyihaning ishonchliligi va zamonaviy talablarga muvofiqligini ta'minlaymiz." 
          icon={img4} 
          number="04" 
        />
      </div>
    </section>
  );
};

export default OurProcess;
