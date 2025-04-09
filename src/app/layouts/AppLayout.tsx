import { FC } from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Mail, MapPin, Menu, Phone, X } from 'lucide-react';

/**
 * Основной макет приложения
 * Включает в себя шапку с навигацией, основной контент и подвал
 */
export const AppLayout: FC = () => {
    // Состояние для управления мобильным меню
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            {/* Шапка сайта с навигацией */}
            <header className="bg-white shadow-md relative">
                <nav className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        {/* Логотип компании */}
                        <Link to="/" className="text-xl md:text-2xl font-bold text-gray-800">
                            ИВВ СТРОЙ
                        </Link>

                        {/* Кнопка мобильного меню */}
                        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                            {isMenuOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
                        </button>

                        {/* Десктопное меню навигации */}
                        <div className="hidden md:flex space-x-8">
                            <Link to="/" className="text-gray-600 hover:text-gray-900">
                                Главная
                            </Link>
                            <Link to="/about" className="text-gray-600 hover:text-gray-900">
                                О нас
                            </Link>
                            <Link to="/contacts" className="text-gray-600 hover:text-gray-900">
                                Контакты
                            </Link>
                            <Link to="/payment" className="text-gray-600 hover:text-gray-900">
                                Оплата
                            </Link>
                        </div>
                    </div>

                    {/* Мобильное меню навигации */}
                    {isMenuOpen && (
                        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
                            <div className="flex flex-col space-y-4 p-4">
                                <Link to="/" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMenuOpen(false)}>
                                    Главная
                                </Link>
                                <Link to="/about" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMenuOpen(false)}>
                                    О нас
                                </Link>
                                <Link
                                    to="/contacts"
                                    className="text-gray-600 hover:text-gray-900 py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Контакты
                                </Link>
                                <Link to="/payment" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMenuOpen(false)}>
                                    Оплата
                                </Link>
                            </div>
                        </div>
                    )}
                </nav>
            </header>

            {/* Основной контент страницы */}
            <Outlet />

            {/* Подвал сайта */}
            <footer className="bg-gray-900 text-white">
                <div className="container mx-auto px-6 py-12">
                    {/* Блок с контактной информацией */}
                    <div className="max-w-lg mx-auto">
                        <h4 className="text-xl font-bold mb-6 text-center">Контакты</h4>
                        <div className="space-y-4">
                            {/* Адрес */}
                            <div className="flex items-center space-x-3">
                                <MapPin className="w-5 h-5 text-blue-400" />
                                <span>ул. Строителей, 1, Москва</span>
                            </div>
                            {/* Телефон */}
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-blue-400" />
                                <span>+7 (999) 123-45-67</span>
                            </div>
                            {/* Email */}
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-blue-400" />
                                <span>info@stroykompaniya.ru</span>
                            </div>
                        </div>
                    </div>

                    {/* Копирайт */}
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                        <p>&copy; {new Date().getFullYear()} СтройКомпания. Все права защищены.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
