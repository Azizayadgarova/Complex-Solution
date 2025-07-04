import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import img1 from '../assets/icon1.svg';
import img2 from '../assets/icon2.svg';
import img3 from '../assets/icon5.svg';
import img4 from '../assets/icon6.svg';
import img5 from '../assets/icon7.svg';
import img6 from '../assets/icon9.svg';
import img from '../assets/icon.svg';

const GetInTuch = () => {
  const { t } = useTranslation();

  // State boshqaruvi
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // State for modal visibility
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendToTelegram = async () => {
    const token = '8037632171:AAHtWPI_A5aL2mHCf6zL9stFSbvhmT6Y7Dk';
    const chatId = '6304612170'; // o'zingizniki bilan almashtiring
    const text = `
📥 Yangi murojaat!
👤 Ism: ${formData.name}
📧 Email: ${formData.email}
📞 Telefon: ${formData.phone}
💬 Xabar: ${formData.message}
    `;

    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'Markdown',
        }),
      });

      if (res.ok) {
        return true; // Successfully sent
      } else {
        console.error('Telegram API error:', await res.text());
        return false; // Failed to send
      }
    } catch (err) {
      console.error('Network or other error:', err);
      return false; // Error occurred
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isSent = await sendToTelegram();
    if (isSent) {
      setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form
      setShowThankYouModal(true); // Show the modal
    } else {
      alert('Xabar yuborilmadi. Iltimos, qayta urinib koʻring.'); // More informative error
    }
  };

  const handleModalClose = () => {
    setShowThankYouModal(false);
  };

  return (
    <div className='bg-red-50 py-[100px] px-[4%]'>
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className='text-[#FF3E54] text-lg font-bold tracking-widest mb-3 uppercase'>
          \ {t('get_in_touch')} \
        </p>
        <h2 className="text-[#0E1F51] text-[40px] sm:text-5xl font-bold leading-tight">
          {t('lets_talk')}
        </h2>
      </div>

      <div className="flex md:flex-row gap-12 rounded-lg p-8">
        <div className="md:w-2/3 p-4 bg-white">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="sr-only">{t('name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t('name')}
                className="w-full bg-[#F7F7F7] px-4 py-3 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF3E54] text-[#252525] placeholder-[#252525]"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">{t('email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t('email')}
                className="w-full bg-[#F7F7F7] px-4 py-3 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF3E54] text-[#252525] placeholder-[#252525]"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">{t('phone')}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder={t('phone')}
                className="w-full bg-[#F7F7F7] px-4 py-3 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF3E54] text-[#252525] placeholder-[#252525]"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">{t('message')}</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder={t('message')}
                className="w-full bg-[#F7F7F7] px-4 py-3 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF3E54] text-[#252525] placeholder-[#252525]"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-auto px-8 py-3 bg-[#FF3E54] text-white font-medium rounded-md hover:bg-[#E0344A] transition duration-200 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FF3E54] focus:ring-opacity-50"
            >
              {t('send_now')}
            </button>
          </form>
        </div>

        <div className="md:w-1/3 p-4 bg-white rounded-lg flex flex-col justify-between">
          <div className="space-y-6 mt-[35px] flex flex-col justify-center ml-[30px]">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#F7F7F7] rounded-[10px] shadow-sm">
                <img src={img1} alt="" />
              </div>
              <div>
                <h3 className="font-semibold text-[#FF3E54] text-[20px]">{t('call_anytime')}</h3>
                <p className="text-[#0E1F51]">+998 (91) 166-90-99</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#F7F7F7] rounded-[10px] shadow-sm">
                <img src={img2} alt="" />
              </div>
              <div>
                <h3 className="font-semibold text-[#FF3E54] text-[20px]">{t('send_email')}</h3>
                <p className="text-[#0E1F51]">uzcomplex-solutions@mail.ru</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#F7F7F7] rounded-[10px] shadow-sm">
                <img src={img} alt="" />
              </div>
              <div>
                <h3 className="font-semibold text-[#FF3E54] text-[20px]">{t('visit_us')}</h3>
                <p className="text-[#0E1F51] w-[250px]">Ташкентский район, ул. ТКАД, д. 30</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h3 className="font-semibold text-[24px] text-[#0E1F51] mb-4">{t('follow_us')}</h3>
            <div className="flex justify-center gap-6">
              <a href="#" className="p-3 bg-[#FF3E54] rounded-lg text-white hover:bg-[#E0344A] transition-colors duration-200">
                <img src={img4} alt="" />
              </a>
              <a href="#" className="p-3 bg-[#FF3E54] rounded-lg text-white hover:bg-[#E0344A] transition-colors duration-200">
                <img src={img3} alt="" />
              </a>
              <a href="#" className="w-[45px] flex items-center justify-center bg-[#FF3E54] rounded-lg text-white hover:bg-[#E0344A] transition-colors duration-200">
                <img src={img5} alt="" />
              </a>
              <a href="#" className="p-3 bg-[#FF3E54] rounded-lg text-white hover:bg-[#E0344A] transition-colors duration-200">
                <img src={img6} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Modal */}
      {showThankYouModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
   <div className="bg-white rounded-lg p-8 shadow-lg text-center max-w-sm mx-auto">
    <div className="mb-6 flex justify-center">
     <div className="w-24 h-24 rounded-full bg-[#FFE6EB] flex items-center justify-center">
      <svg className="w-16 h-16 text-[#FF3E54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
      </svg>
     </div>
    </div>
    <h2 className="text-3xl font-bold text-[#0E1F51] mb-4">Thank you!</h2>
    <p className="text-gray-700 mb-6">We will get back to you as soon as possible!</p>
    <button
     onClick={handleModalClose}
     className="px-8 py-3 bg-[#FF3E54] text-white font-medium rounded-md hover:bg-[#E0344A] transition duration-200 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-[#FF3E54] focus:ring-opacity-50"
    >
     OK
    </button>
   </div>
  </div>
 )}
    </div>
  );
};

export default GetInTuch;