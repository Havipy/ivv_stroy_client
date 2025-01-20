import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
    return (
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md h-full">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Наши контакты</h2>

            <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold text-sm md:text-base mb-1">Адрес:</h3>
                        <p className="text-sm text-gray-600">ул. Строителей, 1, Москва</p>
                    </div>
                </div>

                <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold text-sm md:text-base mb-1">Телефон:</h3>
                        <p className="text-sm text-gray-600">+7 (999) 123-45-67</p>
                    </div>
                </div>

                <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold text-sm md:text-base mb-1">Email:</h3>
                        <p className="text-sm text-gray-600">info@stroykompaniya.ru</p>
                    </div>
                </div>

                <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold text-sm md:text-base mb-1">Режим работы:</h3>
                        <div className="text-sm text-gray-600">
                            <p>Пн-Пт: 9:00 - 18:00</p>
                            <p>Сб-Вс: выходной</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
