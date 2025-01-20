import { Hero } from './Hero';

import { GalleryGrid } from './GalleryGrid';
import { CompanyInfo } from './CompanyInfo';
import { WorkTypesList } from './WorkTypesList';

import { ContactsForm } from '../../../widgets/contacts-form';
export const HomePage = () => {
    return (
        <main>
            <Hero />
            <CompanyInfo />
            <WorkTypesList />
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Наши работы</h2>
                    <GalleryGrid />
                </div>
            </section>
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
