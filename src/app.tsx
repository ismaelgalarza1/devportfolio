import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import ContactPage from "./pages/contact";
import Footer from "./components/footer";
import SplashScreen from "./components/splashPage";
import ProjectsPage from "./pages/projects";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}

      <Router>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}>
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
