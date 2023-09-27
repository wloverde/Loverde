import React, { useState } from 'react';
import Modecat from "../assets/images/modecat.png";

const Header = () => {
    const [clickedLink, setClickedLink] = useState("aboutMe");

    const handleClick = (link) => {
        setClickedLink(link);
    };

    return (
    <header>
        {/* set Header to home */}
      <img className="logo" src={Modecat} width={75} height={75} alt="Modecat" />
      <h1>  LoVerde </h1>
      {/* a navbar to swap content from project.jsx*/}
        <nav >
            <ul>
                <li 
                className={clickedLink === 'aboutMe' ? 'active' : ''}
                onClick={() => handleClick("aboutMe")}>About Me</li>
                <li
                className={clickedLink === 'portfolio' ? 'active' : ''}
                onClick={() => handleClick("portfolio")}>Portfolio</li>
                <li 
                className={clickedLink === 'contact' ? 'active' : ''}
                onClick={() => handleClick("contact")}>Contact</li>
                <li 
                className={clickedLink === 'resume' ? 'active' : ''}
                onClick={() => handleClick("resume")}>Resume</li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;