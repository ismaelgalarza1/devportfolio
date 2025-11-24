import React from "react";


const TopMainPage = () => {

    //====================================================
    //Using States and Effects to create the toggle button
    // for dark mode and light mode
    //=====================================================

    const [isON, setIsON] = React.useState(false);

    const handleToggle = () => {
        setIsON(!isON);
    };

  return (
    
    <div className="TopPageContainer" >
        <button className="radioButton" onClick={handleToggle}></button>


    </div>
  )
};

export default TopMainPage;