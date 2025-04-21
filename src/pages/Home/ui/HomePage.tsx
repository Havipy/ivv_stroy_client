// Импорт компонентов для главной страницы
import { Hero } from './Hero';
import ProjectGallery from './GalleryGrid';
import { CompanyInfo } from './CompanyInfo';
import { WorkTypesList } from './WorkTypesList';
import { ContactsForm } from '../../../widgets/contacts-form';

/**
 * Компонент главной страницы
 * Объединяет все основные секции сайта:
 * - Hero секция с основным предложением
 * - Информация о компании
 * - Список типов работ
 * - Галерея проектов
 * - Форма обратной связи
 */
export const HomePage = () => {
    return (
        <main>
            {/* Hero секция с основным предложением */}
            <Hero />

            {/* Информация о компании */}
            <CompanyInfo />

            {/* Список типов выполняемых работ */}
            <WorkTypesList />

            {/* Секция с галереей проектов */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-6">
                    <ProjectGallery />
                </div>
            </section>

            {/* Секция с формой обратной связи */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-lg mx-auto">
                        <ContactsForm />
                    </div>
                </div>
            </section>
        </main>
    );
};
