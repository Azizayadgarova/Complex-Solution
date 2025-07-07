import React, { useState } from 'react';
import { FaUserTie, FaCogs, FaLightbulb, FaStar, FaSyncAlt } from 'react-icons/fa';

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const data = [
  {
    id: '1',
    title: 'Tajriba va professionallik',
    content: `Bizning jamoamiz tarkibida katta tajribaga ega bo‘lgan malakali ishlab chiquvchilar, chuqur tahlil qiluvchi analitiklar hamda yirik xalqaro loyihalarni samarali boshqargan loyiha menejerlari faoliyat yuritadi.`,
    icon: FaUserTie
  },
  {
    id: '2',
    title: 'Individual yondashuv',
    content: `Ko‘rib chiqamiz har bir mijozning ehtiyojlari va talablari, shuningdek, ularning biznes jarayonlarini chuqur tahlil qilamiz. Biz eng yaxshi, samarali va moslashtirilgan echimlarni taklif qilamiz`,
    icon: FaCogs
  },
  {
    id: '3',
    title: 'Zamonaviy texnologiyalar',
    content: `Biz foydalanamiz ilg'or texnologiyalar, shu jumladan sun'iy intellekt va mashina trening.`,
    icon: FaLightbulb
  },
  {
    id: '4',
    title: 'Sifat kafolati',
    content: `Yuqori sifat standartlari, jarayonlarning shaffofligi va mijozlar oldidagi majburiyatlar.`,
    icon: FaStar
  },
  {
    id: '5',
    title: 'Adaptivlik',
    content: `Loyihalarni keng ko‘lamda kengaytirish imkoniyati hamda talablar o‘zgarishlariga tez va samarali moslashish qobiliyati`,
    icon: FaSyncAlt
  }
];

const SortableItem = ({ id, title, content, isOpen, toggleOpen, icon: Icon }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    toggleOpen(id);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className={`border border-gray-300 rounded-xl p-5 bg-white/70 backdrop-blur-md mb-4 shadow-md transition-all duration-300 hover:shadow-lg`}
    >
      <div className='flex justify-between items-center'>
        <div
          {...listeners}
          className='flex-1 cursor-move pr-4 flex items-center gap-4'
          onClick={() => toggleOpen(id)}
        >
          <div className="bg-[#ffe5e8] p-2 rounded-full">
            <Icon className='text-[#FF3E54] text-xl' />
          </div>
          <h3 className='text-[22px] font-semibold text-[#0E1F51] select-none'>{title}</h3>
        </div>

        <button
          className='text-2xl font-bold text-[#FF3E54] focus:outline-none hover:text-[#e6334a] transition duration-200 px-2  select-none'
          onClick={handleButtonClick}
          type="button"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Yopish' : 'Ochish'}
        >
          {isOpen ? '−' : '+'}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] mt-4 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className='border-t border-gray-200 pt-4'>
          <p className='text-gray-700 leading-relaxed text-[18px]'>{content}</p>
        </div>
      </div>
    </div>
  );
};

const Advantages = () => {
  const [items, setItems] = useState(data);
  const [openItems, setOpenItems] = useState([]);

  const toggleOpen = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8
      }
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = items.findIndex((i) => i.id === active.id);
      const newIndex = items.findIndex((i) => i.id === over?.id);
      setItems((items) => arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <div className='py-[100px] bg-gray-50 min-h-screen'>
      <div className='text-center mb-10 px-4'>
        <p className='text-[#FF3E54] text-[20px] md:text-[24px] font-medium'>/ Наши преимущества /</p>
        <h3 className='text-[#0E1F51] text-[30px] md:text-[46px] font-bold'>
          Nega bizni tanlashadi?
        </h3>
      </div>

      <div className='max-w-7xl mx-auto px-[4%]'>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={items.map((i) => i.id)} strategy={verticalListSortingStrategy}>
            {items.map((item) => (
              <SortableItem
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
                isOpen={openItems.includes(item.id)}
                toggleOpen={toggleOpen}
                icon={item.icon}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default Advantages;
