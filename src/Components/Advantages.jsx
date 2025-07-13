import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  { id: '1', title: 'advantages_1_title', content: 'advantages_1_content', icon: FaUserTie },
  { id: '2', title: 'advantages_2_title', content: 'advantages_2_content', icon: FaCogs },
  { id: '3', title: 'advantages_3_title', content: 'advantages_3_content', icon: FaLightbulb },
  { id: '4', title: 'advantages_4_title', content: 'advantages_4_content', icon: FaStar },
  { id: '5', title: 'advantages_5_title', content: 'advantages_5_content', icon: FaSyncAlt }
];

const SortableItem = ({ id, title, content, isOpen, toggleOpen, icon: Icon }) => {
  const { t } = useTranslation();
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = { transform: CSS.Transform.toString(transform), transition };

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
          <h3 className='text-[22px] font-semibold text-[#0E1F51] select-none'>{t(title)}</h3>
        </div>

        <button
          className='text-2xl font-bold text-[#FF3E54] focus:outline-none hover:text-[#e6334a] transition duration-200 px-2  select-none'
          onClick={handleButtonClick}
          type="button"
          aria-expanded={isOpen}
          aria-label={isOpen ? t('collapse') : t('expand')}
        >
          {isOpen ? '−' : '+'}
        </button>
      </div>

      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className='border-t border-gray-200 pt-4'>
          <p className='text-gray-700 leading-relaxed text-[18px]'>{t(content)}</p>
        </div>
      </div>
    </div>
  );
};

const Advantages = () => {
  const { t } = useTranslation();
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
        <p className='text-[#FF3E54] text-[20px] md:text-[24px] font-medium'>{t('advantages_subtitle')}</p>
        <h3 className='text-[#0E1F51] text-[30px] md:text-[46px] font-bold'>
          {t('advantages_title')}
        </h3>
      </div>

      <div className='max-w-7xl mx-auto px-[4%]'>
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
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
