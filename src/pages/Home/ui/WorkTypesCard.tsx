import React from 'react';
import { LucideIcon } from 'lucide-react';

/**
 * Интерфейс пропсов для карточки типа работ
 * @property {LucideIcon} icon - Компонент иконки из библиотеки Lucide
 * @property {string} title - Заголовок карточки
 * @property {string} description - Описание типа работ
 */
interface WorkTypesCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

/**
 * Компонент карточки для отображения типа ремонтных работ
 * Отображает иконку, заголовок и описание в стилизованном контейнере
 * с эффектом наведения и адаптивным дизайном
 */
export const WorkTypesCard: React.FC<WorkTypesCardProps> = ({ icon: Icon, title, description }) => {
    return (
        // Контейнер карточки с эффектом наведения
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            {/* Контейнер для иконки */}
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
            </div>
            {/* Заголовок карточки */}
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{title}</h3>
            {/* Описание типа работ */}
            <p className="text-sm md:text-base text-gray-600">{description}</p>
        </div>
    );
};
