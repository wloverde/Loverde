import React from "react";

const Header = () => {
  return (
    <header>
        {/* set Header to home */}
      <h1>LoVerde </h1>
      {/* a navbar to swap content from project.jsx*/}
        <nav>
            <ul>
            <li>About Me</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li>Resume</li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;