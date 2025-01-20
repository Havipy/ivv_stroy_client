import { ContactsForm } from '../../../widgets/contacts-form';
import ContactInfo from './ContactInfo';

export const ContactsPage = () => {
    return (
        <main className="flex-grow py-6 md:py-12 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">Контакты</h1>

                <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
                    <div className="w-full md:w-1/2">
                        <ContactInfo />
                    </div>
                    <div className="w-full md:w-1/2">
                        <ContactsForm />
                    </div>
                </div>
            </div>
        </main>
    );
};
