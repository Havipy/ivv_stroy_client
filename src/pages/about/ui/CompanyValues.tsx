import { Shield, Clock, Users, Target } from 'lucide-react';

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

export const CompanyValues = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-start">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                            <value.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                            <p className="text-gray-600">{value.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
