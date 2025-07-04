import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import OurStore from './OurStore';

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

const Advantage5 = () => {
    const { t } = useTranslation();

    const items = [
        {
            number: '01',
            title: t('Dasturiy taminotni doimiy yangilab borish'),
            description:
                "Xavfsizlik yamoqlari, tizim barqarorligini oshirish va yangi funksiyalarni joriy etish orqali dasturiy mahsulotlarni doimiy ravishda aktual holatda ushlab turamiz."
        },
        {
            number: '02',
            title: t('Tizimni modernizatsiya qilish'),
            description:
                "Mavjud platformani zamonaviy talablarga moslab optimallashtiramiz — dizaynni yangilash, ishlash samaradorligini oshirish, yangi texnologiyalar bilan moslashtirish orqali mijoz uchun qulaylik va tezlikni ta'minlaymiz."
        },
        {
            number: '03',
            title: t('Tezkor texnik yordam'),
            description:
                "Dasturiy ta'minotda yuzaga keladigan har qanday nosozlik yoki texnik muammoga tezda javob beramiz. Uzoqdan turib yoki joyiga chiqib muammoni hal qilamiz, foydalanuvchilarni zarur ko‘nikmalar va maslahatlar bilan ta'minlaymiz."
        },
        {
            number: '04',
            title: t('Monitoring va tahlil'),
            description:
                "Tizimning ishlash holatini doimiy kuzatish orqali muammolarni oldindan aniqlaymiz va ularni bartaraf etamiz. Bu jarayon mahsulot barqarorligini saqlash va xizmat uzluksizligini ta'minlashga yordam beradi."
        },
        {
            number: '05',
            title: t('Foydalanuvchilarni o‘qitish va konsultatsiya'),
            description:
                "Yakuniy foydalanuvchilar uchun dasturdan to‘g‘ri foydalanish, sozlash va muammolarni mustaqil bartaraf etish bo‘yicha tushunarli yo‘riqnomalar va amaliy yordamlar beriladi."
        }
    ];

    return (
        <section className="bg-white py-6 px-[4%]">
            <div className='flex flex-col items-center mb-12'>
                <h4 className='text-[35px] w-[50%] text-center text-[#0E1F51] font-bold'>
                    IT-loyihalarni to‘liq siklda ishlab chiqish va joriy etish
                </h4>
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

export default Advantage5;
