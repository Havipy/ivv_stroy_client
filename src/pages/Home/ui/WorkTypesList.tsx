import { Paintbrush, Wrench, Plug, Droplet, Ruler, Hammer } from 'lucide-react';
import { WorkTypesCard } from './WorkTypesCard';
import { FC } from 'react';

const WORK_TYPES = [
    {
        icon: Paintbrush,
        title: 'Отделочные работы',
        description: 'Профессиональная отделка стен, потолков и полов с использованием современных материалов',
    },
    {
        icon: Wrench,
        title: 'Сантехнические работы',
        description: 'Монтаж и замена сантехники, разводка труб, установка оборудования',
    },
    {
        icon: Plug,
        title: 'Электромонтаж',
        description: 'Полный комплекс электромонтажных работ с гарантией безопасности',
    },
    {
        icon: Droplet,
        title: 'Плиточные работы',
        description: 'Профессиональная укладка плитки любой сложности в ванной и других помещениях',
    },
    {
        icon: Ruler,
        title: 'Выравнивание',
        description: 'Выравнивание стен, потолков и полов для идеально ровной поверхности',
    },
    {
        icon: Hammer,
        title: 'Монтажные работы',
        description: 'Установка дверей, окон, монтаж мебели и другого оборудования',
    },
];

export const WorkTypesList: FC = () => {
    return (
        <section className="py-12 md:py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4">Наши услуги</h2>
                <p className="text-gray-600 text-center mb-8 md:mb-12 max-w-2xl mx-auto text-base md:text-lg">
                    Предоставляем полный спектр ремонтно-отделочных работ для вашего дома или офиса
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {WORK_TYPES.map((type, index) => (
                        <WorkTypesCard key={index} icon={type.icon} title={type.title} description={type.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};
