import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import ReCAPTCHA from 'react-google-recaptcha';
import { ContactFormData } from '../../../types';
import { AdaptiveCaptcha } from '../../../features/adaptive-captcha';
import { sendForm } from '../api';

export const ContactsForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>();

    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [isVerified, setIsVerified] = useState(false);
    const [recaptchaError, setRecaptchaError] = useState('');

    const onSubmit = async (data: ContactFormData) => {
        if (!isVerified) {
            setRecaptchaError('Пожалуйста, подтвердите, что вы не робот');
            return;
        }

        try {
            await sendForm(data);
            console.log('Form submitted:', data);
            reset();
            setIsVerified(false);
            setRecaptchaError('');
            recaptchaRef.current?.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleRecaptchaChange = (token: string | null) => {
        setIsVerified(!!token);
        if (token) {
            setRecaptchaError('');
        }
    };

    return (
        <div id="contact-form" className="w-full bg-white p-4 md:p-6 rounded-lg shadow-md scroll-mt-24">
            <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Оставьте заявку</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md mx-auto">
                <div>
                    <input
                        {...register('name', { required: 'Обязательное поле' })}
                        className="w-full px-3 py-2 text-sm md:text-base border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Ваше имя"
                    />
                    {errors.name && <span className="text-xs md:text-sm text-red-500 mt-1">{errors.name.message}</span>}
                </div>
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
                <div>
                    <textarea
                        {...register('comment')}
                        className="w-full px-3 py-2 text-sm md:text-base border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Комментарий"
                        rows={4}
                    />
                </div>
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

                <button
                    type="submit"
                    className={`w-full py-2.5 px-4 rounded-md transition-colors duration-200 font-semibold text-sm md:text-base ${
                        isVerified ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!isVerified}
                >
                    Оставить заявку сейчас
                </button>
            </form>
        </div>
    );
};
