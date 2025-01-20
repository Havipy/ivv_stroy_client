import { FC } from 'react';
import { Project } from '../model/types';

const PROJECT_GALLERY: Project[] = [
    {
        id: 1,
        title: 'Ремонт квартиры',
        imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80',
        description: 'Полный ремонт квартиры под ключ',
    },
    {
        id: 2,
        title: 'Отделка офиса',
        imageUrl: 'https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?auto=format&fit=crop&w=600&q=80',
        description: 'Современный дизайн офисного помещения',
    },
    {
        id: 3,
        title: 'Ремонт ванной',
        imageUrl: 'https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?auto=format&fit=crop&w=600&q=80',
        description: 'Качественный ремонт ванной комнаты',
    },
    {
        id: 4,
        title: 'Укладка плитки',
        imageUrl: 'https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?auto=format&fit=crop&w=600&q=80',
        description: 'Профессиональная укладка плитки',
    },
];
export const GalleryGrid: FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {PROJECT_GALLERY.map((project) => (
                <div className="relative overflow-hidden rounded-lg group cursor-pointer">
                    <img
                        src={project.imageUrl}
                        alt={project.description}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                        <h3 className="text-white font-semibold">{project.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};
