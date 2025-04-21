// Импорт необходимых компонентов из react-router-dom для маршрутизации
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Импорт страниц приложения
import { ContactsPage } from './pages/contacts';
import { AboutPage } from './pages/about';
import { HomePage } from './pages/Home';
import { ReviewsPage } from './pages/reviews';
// Импорт основного макета приложения
import { AppLayout } from './app/layouts/AppLayout';

// Главный компонент приложения
function App() {
    return (
        // Router - компонент для обеспечения маршрутизации в приложении
        <Router>
            {/* Routes - компонент, содержащий все маршруты приложения */}
            <Routes>
                {/* Основной маршрут с общим макетом AppLayout */}
                <Route path="/" element={<AppLayout />}>
                    {/* Главная страница (index) */}
                    <Route index element={<HomePage />} />
                    {/* Страница "О нас" */}
                    <Route path="/about" element={<AboutPage />} />
                    {/* Страница контактов */}
                    <Route path="/contacts" element={<ContactsPage />} />
                    {/* Страница отзывов */}
                    <Route path="/reviews" element={<ReviewsPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

// Экспорт компонента App по умолчанию
export default App;
