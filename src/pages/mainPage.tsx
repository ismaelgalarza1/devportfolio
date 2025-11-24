import React, { useState, useEffect } from "react";
import '../styles/mainPage.css';

const MainPage = () => {
  const fullTitle = "Ismael Galarza";
  const [typedTitle, setTypedTitle] = useState("");

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      setTypedTitle(fullTitle.slice(0, current + 1));
      current++;
      if (current === fullTitle.length) clearInterval(interval);
    }, 100); 
    return () => clearInterval(interval);
  }, []);
  return (
    <React.StrictMode>
      <div className="landing-container" >
        <div className = "Cartoon">
            <img src="src/assets/ish.PNG" alt="ISH Dev" className="Ish"/>
            </div>
        <div className="landing-content">
          <div className="main-content-container">
            <h1 className="landing-title">
              Hello, I'm {""}
              {typedTitle}
              <span className="cursor"> | </span>
            </h1>
            <p className="title-text">
              A UAV Systems Engineer and Drone Pilot with a passion for
              technology, innovation, and Aviation. I have experience in
              designing, building, and operating UAV systems for various
              applications. My passion is web development and creating
              innovative solutions that make a difference.
            </p>
            <div className="button-container">
              <button className="projects-button">Projects</button>
              <button className="hireme-button">Hire Me</button>
            </div>
        </div>
      </div>
      </div>
    </React.StrictMode>
  );
};


export default MainPage;

