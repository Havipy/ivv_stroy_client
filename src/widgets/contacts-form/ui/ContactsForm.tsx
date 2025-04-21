import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ReCAPTCHA from 'react-google-recaptcha';
import { ContactFormData } from '../../../types';
import { AdaptiveCaptcha } from '../../../features/adaptive-captcha';
import { sendForm } from '../api';

/**
 * Компонент формы обратной связи
 * Позволяет пользователям оставить заявку с контактными данными
 * Включает валидацию полей и защиту от ботов через reCAPTCHA
 */
export const ContactsForm = () => {
    // Инициализация формы с помощью react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>();

    // Ссылка на компонент reCAPTCHA для программного управления
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    // Состояние верификации reCAPTCHA
    const [isVerified, setIsVerified] = useState(false);
    // Состояние ошибки reCAPTCHA
    const [recaptchaError, setRecaptchaError] = useState('');
    // Состояние загрузки при отправке формы
    const [isLoading, setIsLoading] = useState(false);

    /**
     * Обработчик отправки формы
     * @param data - Данные формы типа ContactFormData
     */
    const onSubmit = async (data: ContactFormData) => {
        // Проверка прохождения reCAPTCHA
        if (!isVerified) {
            setRecaptchaError('Пожалуйста, подтвердите, что вы не робот');
            return;
        }

        try {
            setIsLoading(true);
            // Отправка данных формы на сервер
            const response = await sendForm(data);

            if (!response.ok) {
                throw new Error('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.');
            }

            toast.success('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
            console.log('Form submitted:', data);
            // Сброс формы и состояния reCAPTCHA после успешной отправки
            reset();
            setIsVerified(false);
            setRecaptchaError('');
            recaptchaRef.current?.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.');
        } finally {
            setIsLoading(false);
        }
    };

    /**
     * Обработчик изменения состояния reCAPTCHA
     * @param token - Токен верификации от reCAPTCHA
     */
    const handleRecaptchaChange = (token: string | null) => {
        setIsVerified(!!token);
        if (token) {
            setRecaptchaError('');
        }
    };

    return (
        <div id="contact-form" className="w-full bg-white p-4 md:p-6 rounded-lg shadow-md scroll-mt-24">
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Оставьте заявку</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md mx-auto">
                {/* Поле для ввода имени */}
                <div>
                    <input
                        {...register('name', { required: 'Обязательное поле' })}
                        className="w-full px-3 py-2 text-sm md:text-base border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Ваше имя"
                    />
                    {errors.name && <span className="text-xs md:text-sm text-red-500 mt-1">{errors.name.message}</span>}
                </div>

                {/* Поле для ввода телефона с валидацией формата */}
                <div>
                    <input
                        {...register('phone', {
                            required: 'Обязательное поле',
                            pattern: {
                                value: /^(\+7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/,
                                message: 'Неверный формат телефона',
                            },
                        })}
                        className="w-full px-3 py-2 text-sm md:text-base border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Телефон"
                    />
                    {errors.phone && <span className="text-xs md:text-sm text-red-500 mt-1">{errors.phone.message}</span>}
                </div>

                {/* Поле для ввода комментария */}
                <div>
                    <textarea
                        {...register('comment')}
                        className="w-full px-3 py-2 text-sm md:text-base border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Комментарий"
                        rows={4}
                    />
                </div>

                {/* Компонент reCAPTCHA и обработка ошибок */}
                <div className="space-y-2">
                    <div className="flex justify-center -mx-4 md:mx-0">
                        <AdaptiveCaptcha recaptchaRef={recaptchaRef} onChange={handleRecaptchaChange} />
                    </div>
                    {recaptchaError && (
                        <div className="text-center">
                            <span className="text-xs md:text-sm text-red-500">{recaptchaError}</span>
                        </div>
                    )}
                </div>

                {/* Кнопка отправки формы */}
                <button
                    type="submit"
                    className={`w-full py-2.5 px-4 rounded-md transition-colors duration-200 font-semibold text-sm md:text-base ${
                        isVerified ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!isVerified || isLoading}
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center">
                            <svg
                                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            Отправка...
                        </div>
                    ) : (
                        'Оставить заявку сейчас'
                    )}
                </button>
            </form>
        </div>
    );
};
