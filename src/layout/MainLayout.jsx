import { Outlet, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
import Footer from "../Componets/Footer";

const HOVER_COLOR = '#FF3E54';

export default function MainLayout() {
    const { t, i18n } = useTranslation();

    return (
        <>
            {/* Fiksatsiyalangan navbar */}
            <div className="bg-[#F7F7F7] fixed top-0 left-0 right-0 w-full z-50 ">
                <div className="flex items-center justify-between py-[18px] px-[4%]">
                    <div>
                        <Link to="/">
                            <img className="h-20 outline-none" src={logo} alt="Texnomart" />
                        </Link>
                    </div>

                    <ul className="flex text-[17px] font-medium gap-[25px] items-center">
                        <li>
                            <Link
                                to="/aboute"
                                className={`relative group pb-1 flex gap-2 items-center text-[#0E1F51] hover:text-[${HOVER_COLOR}] block`}
                            >
                                <span>{t('about')}</span>
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[${HOVER_COLOR}] transition-all duration-150 group-hover:w-full`}></span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/services"
                                className={`relative group pb-1 flex gap-2 items-center text-[#0E1F51] hover:text-[${HOVER_COLOR}] block`}
                            >
                                <span>{t('services')}</span>
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[${HOVER_COLOR}] transition-all duration-150 group-hover:w-full`}></span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/portfolio"
                                className={`relative group pb-1 flex gap-2 items-center text-[#0E1F51] hover:text-[${HOVER_COLOR}] block`}
                            >
                                <span>{t('portfolio')}</span>
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[${HOVER_COLOR}] transition-all duration-150 group-hover:w-full`}></span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/blog"
                                className={`relative group pb-1 text-[#0E1F51] hover:text-[${HOVER_COLOR}] block`}
                            >
                                <span>{t('blog')}</span>
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[${HOVER_COLOR}] transition-all duration-150 group-hover:w-full`}></span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/contact"
                                className={`relative group pb-1 text-[#0E1F51] hover:text-[${HOVER_COLOR}] block`}
                            >
                                <span>{t('contact')}</span>
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[${HOVER_COLOR}] transition-all duration-150 group-hover:w-full`}></span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/contact" 
                                className="w-[130px] h-[40px] bg-[#FF3E54] text-white font-normal rounded-[5px]
                   flex items-center justify-center
                   hover:bg-[#E0344A] transition duration-200 ease-in-out
                   shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FF3E54] focus:ring-opacity-50"
                            >
                                {t('get_in_touch')}
                            </Link>

                        </li>
                        <li>
                            <select
                                onChange={(e) => i18n.changeLanguage(e.target.value)}
                                className="bg-white text-[#0E1F51] rounded-[5px] px-3 py-2 border-white outline-none"
                            >
                                <option value="uz">UZ</option>
                                <option value="ru">RU</option>
                                <option value="en">EN</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Kontent uchun joy ajratish */}
            <div className="pt-[100px]">
                <Outlet />
            </div>
            <Footer/>
        </>
    );
}
