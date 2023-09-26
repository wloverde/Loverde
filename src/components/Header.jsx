import React from "react";
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
                <li onClick={() => handleClick("aboutMe")}>About Me</li>
                <li onClick={() => handleClick("portfolio")}>Portfolio</li>
                <li onClick={() => handleClick("contact")}>Contact</li>
                <li onClick={() => handleClick("resume")}>Resume</li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;