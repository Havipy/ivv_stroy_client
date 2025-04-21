import { useState } from 'react';
import { Star } from 'lucide-react';

/**
 * Компонент для отображения отзыва
 */
interface ReviewProps {
    id: string;
    name: string;
    date: string;
    rating: number;
    text: string;
}

const Review = ({ name, date, rating, text }: ReviewProps) => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg">{name}</h3>
                <span className="text-gray-500 text-sm">{date}</span>
            </div>

            <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className={`w-5 h-5 ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                ))}
            </div>

            <p className="text-gray-700">{text}</p>
        </div>
    );
};

/**
 * Форма для добавления нового отзыва
 */
const ReviewForm = () => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState(5);
    const [text, setText] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Имитация отправки формы
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setName('');
            setRating(5);
            setText('');

            // Сбросить сообщение об успешной отправке через 3 секунды
            setTimeout(() => setIsSuccess(false), 3000);
        }, 1000);
    };

    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold mb-4">Оставить отзыв</h3>

            {isSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    Спасибо! Ваш отзыв успешно отправлен.
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                        Ваше имя
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Оценка</label>
                    <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button key={star} type="button" onClick={() => setRating(star)} className="focus:outline-none">
                                <Star className={`w-8 h-8 ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="text" className="block text-gray-700 mb-2">
                        Ваш отзыв
                    </label>
                    <textarea
                        id="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={4}
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors disabled:opacity-50"
                >
                    {isSubmitting ? 'Отправка...' : 'Отправить отзыв'}
                </button>
            </form>
        </div>
    );
};

/**
 * Компонент страницы с отзывами
 */
export const ReviewsPage = () => {
    // Демо-данные для отзывов
    const reviews = [
        {
            id: '1',
            name: 'Алексей Иванов',
            date: '15 мая 2024',
            rating: 5,
            text: 'Отличная компания! Ремонт выполнен качественно и в срок. Особенно понравилась ответственность мастеров и внимание к деталям. Буду рекомендовать друзьям и знакомым.',
        },
        {
            id: '2',
            name: 'Марина Петрова',
            date: '3 апреля 2024',
            rating: 4,
            text: 'Хороший ремонт по разумной цене. Единственное, были небольшие задержки по срокам, но результат полностью устроил. Качество работ на высоте.',
        },
        {
            id: '3',
            name: 'Дмитрий Сидоров',
            date: '20 марта 2023',
            rating: 5,
            text: 'Заказывал ремонт ванной комнаты. Все было сделано идеально! Мастера работали аккуратно, убирали за собой мусор. Очень доволен результатом.',
        },
        {
            id: '4',
            name: 'Елена Смирнова',
            date: '12 января 2025',
            rating: 5,
            text: 'Профессиональный подход к работе! Сделали ремонт в гостиной - просто восторг. Использовали современные материалы и технологии, о которых я даже не знала. Результат превзошел все ожидания.',
        },
        {
            id: '5',
            name: 'Игорь Козлов',
            date: '3 февраля 2025',
            rating: 4,
            text: 'Заказывал комплексный ремонт квартиры. В целом остался доволен, хотя в процессе были некоторые вопросы по материалам. Команда реагировала быстро и решала все проблемы. Рекомендую.',
        },
        {
            id: '6',
            name: 'Анна Волкова',
            date: '17 марта 2025',
            rating: 5,
            text: 'Второй раз обращаюсь в эту компанию и снова в восторге! Ремонт кухни выполнен идеально. Особенно хочу отметить дизайнера, который предложил нестандартные и очень практичные решения для нашего небольшого пространства.',
        },
        {
            id: '7',
            name: 'Сергей Николаев',
            date: '5 апреля 2025',
            rating: 3,
            text: 'Ремонт сделан качественно, но были проблемы с соблюдением сроков. Затянули на две недели дольше оговоренного. Из-за этого пришлось менять планы на переезд.',
        },
    ];

    // Функция для преобразования строковой даты в объект Date для сортировки
    const parseDate = (dateStr: string) => {
        const monthsMap: Record<string, number> = {
            января: 0,
            февраля: 1,
            марта: 2,
            апреля: 3,
            мая: 4,
            июня: 5,
            июля: 6,
            августа: 7,
            сентября: 8,
            октября: 9,
            ноября: 10,
            декабря: 11,
        };

        const [day, month, year] = dateStr.split(' ');
        return new Date(parseInt(year), monthsMap[month], parseInt(day));
    };

    // Сортировка отзывов по дате (от новых к старым)
    const sortedReviews = [...reviews].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

    return (
        <main className="py-12 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-12">Отзывы наших клиентов</h1>

                    <p className="text-gray-700 text-lg text-center mb-8">
                        Мы гордимся тем, что наши клиенты остаются довольны нашей работой. Ниже вы можете ознакомиться с отзывами и
                        поделиться своим мнением о сотрудничестве с нами.
                    </p>

                    <div className="grid md:grid-cols-1 gap-8 mb-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Последние отзывы</h2>
                            {sortedReviews.map((review) => (
                                <Review key={review.id} {...review} />
                            ))}
                        </div>
                    </div>

                    <ReviewForm />
                </div>
            </div>
        </main>
    );
};

export default ReviewsPage;
