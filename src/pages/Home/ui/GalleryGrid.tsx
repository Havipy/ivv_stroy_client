import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../model/types';
const projects: Project[] = [
    {
        id: 1,
        title: 'Ремонт квартиры',
        imageUrl: '/gallery/1.jpg',
        description: 'Полный ремонт квартиры под ключ',
    },
    {
        id: 2,
        title: 'Ремонт спальни',
        imageUrl: '/gallery/3.jpg',
        description: 'Современный дизайн спальни',
    },
    {
        id: 3,
        title: 'Ремонт ванной',
        imageUrl: '/gallery/2.jpg',
        description: 'Качественный ремонт ванной комнаты',
    },
];

const ProjectGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Наши работы</h2>

                <div className="relative max-w-4xl mx-auto">
                    {/* Main Slider */}
                    <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`absolute w-full h-full transition-all duration-500 ease-in-out ${
                                    index === currentIndex
                                        ? 'opacity-100 translate-x-0'
                                        : index < currentIndex
                                        ? 'opacity-0 -translate-x-full'
                                        : 'opacity-0 translate-x-full'
                                }`}
                            >
                                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                    <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-white/90">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Dots Navigation */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (!isTransitioning) {
                                        setIsTransitioning(true);
                                        setCurrentIndex(index);
                                        setTimeout(() => setIsTransitioning(false), 500);
                                    }
                                }}
                                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                    index === currentIndex ? 'bg-blue-600 scale-110' : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectGallery;
