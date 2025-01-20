import React from 'react';
import { LucideIcon } from 'lucide-react';

interface WorkTypesCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export const WorkTypesCard: React.FC<WorkTypesCardProps> = ({ icon: Icon, title, description }) => {
    return (
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm md:text-base text-gray-600">{description}</p>
        </div>
    );
};
