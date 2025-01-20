import { ContactFormData } from '../../../types';

export const sendForm = async (data: ContactFormData) => {
    console.log(import.meta.env.SERVER_URL);
    return fetch(`${import.meta.env.VITE_SERVER_URL}/api/contact`, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
    });
};
