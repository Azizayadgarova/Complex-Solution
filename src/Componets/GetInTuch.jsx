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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendToTelegram = async () => {
    const token = '8040160776:AAHodRvx_Tpb7VJuQT8ES-IEjQkLY0NnSBA';
    const chatId = ' "6304612170';
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text }),
      });
      return res.ok;
    } catch (err) {
      console.error('Telegram error:', err);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isSent = await sendToTelegram();
    if (isSent) {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setShowThankYouModal(true);
    } else {
      alert('Xabar yuborilmadi. Iltimos, qayta urinib koʻring.');
    }
  };

  const handleModalClose = () => {
    setShowThankYouModal(false);
  };

  return (
    <div className="bg-red-50 mt-10 py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-[#FF3E54] text-sm sm:text-base md:text-lg font-semibold uppercase tracking-widest mb-2">
          \ {t('get_in_touch')} \
        </p>
        <h2 className="text-[#0E1F51] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          {t('lets_talk')}
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto">
        {/* Form Section */}
        <div className="md:w-2/3 bg-white p-6 sm:p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-5">
            {['name', 'email', 'phone'].map((field) => (
              <div key={field}>
                <input
                  type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                  name={field}
                  placeholder={t(field)}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full text-sm sm:text-base bg-[#F7F7F7] px-4 py-3 rounded-md text-[#252525] placeholder-[#252525] border-none focus:outline-none focus:ring-2 focus:ring-[#FF3E54]"
                  required
                />
              </div>
            ))}
            <div>
              <textarea
                name="message"
                rows="5"
                placeholder={t('message')}
                value={formData.message}
                onChange={handleChange}
                className="w-full text-sm sm:text-base bg-[#F7F7F7] px-4 py-3 rounded-md text-[#252525] placeholder-[#252525] border-none focus:outline-none focus:ring-2 focus:ring-[#FF3E54]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#FF3E54] text-white text-sm sm:text-base px-6 py-3 rounded-md hover:bg-[#E0344A] transition duration-200 shadow-md hover:shadow-lg focus:ring-2 focus:ring-[#FF3E54]"
            >
              {t('send_now')}
            </button>
          </form>
        </div>

        {/* Contact Info & Socials */}
        <div className="md:w-1/3 bg-white p-6 sm:p-8 rounded-lg shadow-md flex flex-col justify-between">
          <div className="space-y-6">
            {[
              { img: img1, title: t('call_anytime'), desc: '+998 (91) 166-90-99' },
              { img: img2, title: t('send_email'), desc: 'uzcomplex-solutions@mail.ru' },
              { img, title: t('visit_us'), desc: 'Ташкентский район, ул. ТКАД, д. 30', isLong: true },
            ].map(({ img, title, desc }, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="p-3 bg-[#F7F7F7] rounded-[10px] shadow-sm">
                  <img src={img} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#FF3E54] text-base sm:text-lg">{title}</h3>
                  <p className="text-[#0E1F51] text-sm sm:text-base">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <h3 className="font-semibold text-xl sm:text-2xl text-[#0E1F51] mb-4">
              {t('follow_us')}
            </h3>
            <div className="flex justify-center gap-5 flex-wrap">
              {[img4, img3, img5, img6].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 bg-[#FF3E54] rounded-lg hover:bg-[#E0344A] transition inline-flex items-center justify-center"
                >
                  <img src={icon} alt="icon" className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Modal */}
      {showThankYouModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-8 shadow-lg text-center max-w-sm w-full">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#FFE6EB] flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-[#FF3E54]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0E1F51] mb-4">Thank you!</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-6">We will get back to you as soon as possible!</p>
            <button
              onClick={handleModalClose}
              className="px-6 py-3 bg-[#FF3E54] text-white text-sm sm:text-base rounded-md hover:bg-[#E0344A] shadow-md transition focus:ring-2 focus:ring-[#FF3E54]"
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
