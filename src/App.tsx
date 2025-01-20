import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PaymentPage } from './pages/payment';
import { ContactsPage } from './pages/contacts';
import { AboutPage } from './pages/about';
import { HomePage } from './pages/Home';
import { AppLayout } from './app/layouts/AppLayout';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                    <Route path="/payment" element={<PaymentPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
