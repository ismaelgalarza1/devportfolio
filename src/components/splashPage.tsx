import { useEffect, useState } from "react";
import "../styles/splashPage.css";

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashPage = ({ onFinish }: SplashScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2400);
    const finishTimer = setTimeout(() => {
      onFinish();
    }, 4000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="splash-content">
        <div className="aircraft-container">
          <img
            src="../src/assets/Drone.png"
            alt="Aircraft"
            className="landing-aircraft"
          />
        </div>
        <div className="loading-bar-container">
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
