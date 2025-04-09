import { FC } from 'react';
import { CheckCircle, Clock, Percent } from 'lucide-react';

/**
 * Интерфейс пропсов для компонента CompanyInfo
 * @property {string} [className] - Опциональный класс для стилизации компонента
 */
interface CompanyInfoProps {
    className?: string;
}

/**
 * Компонент для отображения информации о компании
 * Включает описание компании, преимущества и специальное предложение
 */
export const CompanyInfo: FC<CompanyInfoProps> = () => {
    return (
        // Секция с информацией о компании
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Заголовок с названием компании */}
                    <h2 className="text-4xl font-bold text-center mb-8">ООО "ИВВ Строй"</h2>

                    {/* Блок с описанием компании */}
                    <div className="mb-8">
                        <p className="text-lg text-gray-700 mb-6">
                            Предлагаем профессиональные услуги по ремонту жилых и нежилых помещений (квартиры, дома, санузлы). Мы работаем
                            на рынке с 2012 года. Наша команда из более чем 40 опытных специалистов готова выполнить ремонт ЛЮБОЙ сложности,
                            обеспечивая высокое качество и индивидуальный подход к каждому клиенту.
                        </p>
                    </div>

                    {/* Сетка с преимуществами компании */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {/* Блок с гарантией */}
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <div className="flex items-start mb-3">
                                <Clock className="w-6 h-6 text-blue-600 mr-2" />
                                <h3 className="font-bold">Гарантия 2 года</h3>
                            </div>
                            <p className="text-gray-600">На все выполненные работы предоставляется гарантия</p>
                        </div>

                        {/* Блок с поставщиками */}
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <div className="flex items-start mb-3">
                                <CheckCircle className="w-6 h-6 text-blue-600 mr-2" />
                                <h3 className="font-bold">Надежные поставщики</h3>
                            </div>
                            <p className="text-gray-600">Работаем только с проверенными поставщиками материалов</p>
                        </div>

                        {/* Блок с оплатой */}
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <div className="flex items-start mb-3">
                                <Percent className="w-6 h-6 text-blue-600 mr-2" />
                                <h3 className="font-bold">Поэтапная оплата</h3>
                            </div>
                            <p className="text-gray-600">Удобная система оплаты по этапам работ</p>
                        </div>
                    </div>

                    {/* Блок со специальным предложением */}
                    <div className="bg-green-50 p-6 rounded-lg text-center">
                        <p className="text-lg font-semibold text-green-800 mb-2">❗ Мы НЕ БЕРЕМ деньги за дополнительные услуги</p>
                        <p className="text-green-700">При заказе ремонта до конца месяца действует скидка 5% за оставленный отзыв</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
