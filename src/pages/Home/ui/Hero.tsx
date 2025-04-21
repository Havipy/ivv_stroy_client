import { useScrollTo } from '../../../shared/hooks/useScrollTo';

/**
 * Компонент Hero-секции главной страницы
 * Отображает основной призыв к действию и ключевое предложение компании
 */
export const Hero = () => {
    // Получаем функцию для прокрутки из хука
    const { scrollToElement } = useScrollTo();

    /**
     * Обработчик клика по кнопке "Оставить заявку"
     * Прокручивает страницу к форме обратной связи
     */
    const handleScrollToForm = () => {
        scrollToElement('contact-form');
    };

    return (
        // Секция с фоновым изображением и затемняющим оверлеем
        <section className="relative py-16 md:py-28">
            {/* Фоновое изображение */}
            <div className="absolute inset-0 z-0">
                <img src="/public/gallery/4.jpg" alt="Современный интерьер" className="w-full h-full object-cover" />
                {/* Затемняющий оверлей */}
                <div className="absolute inset-0 bg-black opacity-70"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                {/* Центрированный контейнер с ограниченной шириной */}
                <div className="max-w-3xl mx-auto text-center text-white">
                    {/* Главный заголовок с адаптивным размером */}
                    <h1 className="text-2xl md:text-5xl font-bold mb-3 md:mb-6 leading-tight">Профессиональный ремонт под ключ</h1>
                    {/* Подзаголовок с описанием услуг */}
                    <p className="text-base md:text-xl mb-4 md:mb-8">
                        Выполняем ремонт квартир, домов и коммерческих помещений с гарантией качества
                    </p>
                    {/* Блок с ценой и кнопкой */}
                    <div className="space-y-4">
                        {/* Блок с ценой на белом фоне */}
                        <div className="inline-block bg-white text-blue-800 text-lg md:text-2xl font-bold px-4 md:px-8 py-2 md:py-4 rounded-lg">
                            от 6.000 ₽/м²
                        </div>
                        {/* Контейнер для кнопки */}
                        <div className="block">
                            {/* Кнопка с анимацией при наведении и адаптивными стилями */}
                            <button
                                onClick={handleScrollToForm}
                                className="w-full md:w-auto mt-4 md:mt-6 bg-green-500 hover:bg-green-600 text-white px-4 md:px-8 py-2 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-all hover:shadow-lg"
                            >
                                Оставить заявку
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
