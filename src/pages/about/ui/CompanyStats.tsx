import { Users, Calendar, CheckSquare, Trophy } from 'lucide-react';

/**
 * Массив статистических данных компании
 * Каждый элемент содержит:
 * - icon: компонент иконки
 * - value: числовое значение
 * - label: краткое описание
 * - description: подробное описание
 */
const stats = [
    {
        icon: Calendar,
        value: '11+',
        label: 'лет на рынке',
        description: 'С 2012 года в сфере ремонта',
    },
    {
        icon: Users,
        value: '40+',
        label: 'специалистов',
        description: 'Опытные мастера своего дела',
    },
    {
        icon: CheckSquare,
        value: '500+',
        label: 'проектов',
        description: 'Успешно завершенных работ',
    },
    {
        icon: Trophy,
        value: '98%',
        label: 'довольных клиентов',
        description: 'Рекомендуют нас друзьям',
    },
];

/**
 * Компонент для отображения статистики компании
 * Отображает сетку из 4 карточек с ключевыми показателями
 */
export const CompanyStats = () => {
    return (
        // Адаптивная сетка: 1 колонка на мобильных, 2 на планшетах, 4 на десктопах
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Маппинг массива статистики в карточки */}
            {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                    {/* Контейнер для иконки с круглым фоном */}
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <stat.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    {/* Числовое значение */}
                    <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                    {/* Краткое описание */}
                    <div className="font-semibold text-gray-900 mb-2">{stat.label}</div>
                    {/* Подробное описание */}
                    <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>
            ))}
        </div>
    );
};
