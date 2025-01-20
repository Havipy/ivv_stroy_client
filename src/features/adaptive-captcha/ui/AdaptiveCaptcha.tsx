import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface ReCaptchaProps {
    onChange: (token: string | null) => void;
    recaptchaRef: React.RefObject<ReCAPTCHA>;
}

const RECAPTCHA_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

export const AdaptiveCaptcha: React.FC<ReCaptchaProps> = ({ onChange, recaptchaRef }) => {
    return (
        <div className="transform-gpu scale-[0.77] md:scale-100">
            <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_SITE_KEY} onChange={onChange} />
        </div>
    );
};
