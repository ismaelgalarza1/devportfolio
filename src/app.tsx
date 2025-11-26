import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage';
import ContactPage from './pages/contact';
import ResumePage from './pages/resume';
import Footer from './components/footer';

function App() {
    return (
        <Router>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '85vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}>
                <div style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/resume" element={<ResumePage />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;