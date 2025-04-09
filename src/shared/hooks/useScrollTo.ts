import { useCallback } from 'react';

/**
 * Хук для плавной прокрутки к элементу по его ID
 *
 * @returns {Object} Объект с функцией scrollToElement
 * @property {Function} scrollToElement - Функция для прокрутки к элементу
 * @param {string} elementId - ID элемента, к которому нужно прокрутить
 *
 * @example
 * const { scrollToElement } = useScrollTo();
 * // Прокрутка к элементу с id="section-1"
 * scrollToElement('section-1');
 */
export const useScrollTo = () => {
    /**
     * Функция для плавной прокрутки к элементу
     * @param {string} elementId - ID элемента, к которому нужно прокрутить
     */
    const scrollToElement = useCallback((elementId: string) => {
        // Получение элемента по ID
        const element = document.getElementById(elementId);

        // Если элемент найден, выполняем прокрутку
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth', // Плавная анимация прокрутки
                block: 'center', // Центрирование элемента по вертикали
            });
        }
    }, []);

    return { scrollToElement };
};
