import { useCallback } from 'react';

export const useScrollTo = () => {
    const scrollToElement = useCallback((elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    }, []);

    return { scrollToElement };
};
