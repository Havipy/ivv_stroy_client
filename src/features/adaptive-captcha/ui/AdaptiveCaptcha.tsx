import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

/**
 * Интерфейс пропсов для компонента AdaptiveCaptcha
 * @property onChange - Функция обратного вызова, вызываемая при изменении состояния капчи
 * @property recaptchaRef - Референс на компонент ReCAPTCHA для программного управления
 */
interface ReCaptchaProps {
    onChange: (token: string | null) => void;
    recaptchaRef: React.RefObject<ReCAPTCHA>;
}

// Ключ сайта для ReCAPTCHA (тестовый ключ)
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6Ld82x8rAAAAAB4lZSHpUqgZhdOmnWZLkpwp9P42';
/**
 * Компонент адаптивной капчи
 * Оборачивает стандартный компонент ReCAPTCHA с дополнительными стилями
 * для адаптивного отображения на разных устройствах
 */
export const AdaptiveCaptcha: React.FC<ReCaptchaProps> = ({ onChange, recaptchaRef }) => {
    return (
        // Контейнер с трансформацией для масштабирования на мобильных устройствах
        <div className="transform-gpu scale-[0.77] md:scale-100">
            <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_SITE_KEY} onChange={onChange} />
        </div>
    );
};
