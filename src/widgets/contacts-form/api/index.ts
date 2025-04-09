import { ContactFormData } from '../../../types';

/**
 * Отправляет данные формы обратной связи на сервер
 *
 * @param {ContactFormData} data - Данные формы (имя, email, сообщение и т.д.)
 * @returns {Promise<Response>} Промис с ответом от сервера
 *
 * @example
 * const formData = {
 *   name: 'Иван',
 *   email: 'ivan@example.com',
 *   message: 'Сообщение'
 * };
 * const response = await sendForm(formData);
 */
export const sendForm = async (data: ContactFormData) => {
    // Отправка POST запроса на эндпоинт контактной формы
    return fetch(`${import.meta.env.VITE_SERVER_URL}/api/contact`, {
        body: JSON.stringify(data), // Преобразование данных в JSON
        method: 'POST', // Метод запроса
        headers: new Headers({
            'content-type': 'application/json', // Указываем тип контента как JSON
        }),
    });
};
