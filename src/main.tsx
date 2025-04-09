// Импорт необходимых компонентов и стилей из React
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Создание корневого элемента React и рендеринг приложения
// StrictMode помогает выявлять потенциальные проблемы в приложении
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
