// Импорт компонентов для отображения статистики и ценностей компании
import { CompanyStats } from './CompanyStats';
import { CompanyValues } from './CompanyValues';

/**
 * Компонент страницы "О компании"
 * Отображает информацию о компании, включая описание, статистику и ценности
 */
export const AboutPage = () => {
    return (
        // Основной контейнер страницы с отступами и фоном
        <main className="py-12 bg-gray-50">
            <div className="container mx-auto px-6">
                {/* Секция с основной информацией о компании */}
                <div className="max-w-4xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-center mb-8">О компании</h1>

                    {/* Блок с описанием компании */}
                    <div className="bg-white p-8 rounded-xl shadow-sm mb-12">
                        <p className="text-lg text-gray-700 mb-6">
                            ООО "ИВВ Строй" - ведущая компания на рынке ремонтно-отделочных работ в Москве. С 2012 года мы предоставляем
                            профессиональные услуги по ремонту жилых и нежилых помещений (квартиры, дома, санузлы).
                        </p>
                        <p className="text-lg text-gray-700">
                            Наша команда из более чем 40 опытных специалистов готова выполнить ремонт ЛЮБОЙ сложности, обеспечивая высокое
                            качество и индивидуальный подход к каждому клиенту. Мы гордимся тем, что более 98% наших клиентов рекомендуют
                            нас своим друзьям и знакомым.
                        </p>
                    </div>

                    {/* Секция с достижениями компании */}
                    <h2 className="text-3xl font-bold text-center mb-8">Наши достижения</h2>
                    <CompanyStats />
                </div>

                {/* Секция с ценностями компании */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Наши ценности</h2>
                    <CompanyValues />
                </div>
            </div>
        </main>
    );
};

export default AboutPage;
