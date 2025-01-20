import { FC } from 'react';

export const PaymentPage: FC = () => {
    return (
        <main className="py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold mb-8">Оплата</h1>

                <div className="prose max-w-none">
                    <p className="text-lg mb-6">Информация о способах оплаты будет добавлена позже. Здесь будет размещена информация о:</p>

                    <ul className="list-disc pl-6 mb-6">
                        <li>Наличный расчет</li>
                        <li>Безналичный расчет</li>
                        <li>Оплата картой</li>
                        <li>Рассрочка</li>
                        <li>Этапы оплаты</li>
                    </ul>
                </div>
            </div>
        </main>
    );
};
