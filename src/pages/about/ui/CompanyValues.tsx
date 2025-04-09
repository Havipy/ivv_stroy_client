import { Shield, Clock, Users, Target } from 'lucide-react';

/**
 * Массив ценностей компании
 * Каждый элемент содержит:
 * - icon: компонент иконки
 * - title: заголовок ценности
 * - description: подробное описание ценности
 */
const values = [
    {
        icon: Shield,
        title: 'Качество и надежность',
        description: 'Гарантия 2 года на все виды работ. Используем только качественные материалы от проверенных поставщиков.',
    },
    {
        icon: Clock,
        title: 'Точность в сроках',
        description: 'Соблюдаем установленные сроки. Работаем по четкому графику, согласованному с заказчиком.',
    },
    {
        icon: Users,
        title: 'Профессионализм',
        description: 'Команда опытных мастеров с профильным образованием и многолетним опытом работы.',
    },
    {
        icon: Target,
        title: 'Индивидуальный подход',
        description: 'Учитываем все пожелания клиента. Предлагаем оптимальные решения для каждого проекта.',
    },
];

/**
 * Компонент для отображения ценностей компании
 * Отображает сетку из 4 карточек с ключевыми ценностями
 */
export const CompanyValues = () => {
    return (
        // Адаптивная сетка: 1 колонка на мобильных, 2 на планшетах и десктопах
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Маппинг массива ценностей в карточки */}
            {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    {/* Контейнер с flexbox для иконки и текста */}
                    <div className="flex items-start">
                        {/* Контейнер для иконки с фоном */}
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                            <value.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        {/* Контейнер для текстового содержимого */}
                        <div>
                            {/* Заголовок ценности */}
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                            {/* Описание ценности */}
                            <p className="text-gray-600">{value.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
