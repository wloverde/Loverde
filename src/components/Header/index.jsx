import React, { useState } from "react";
import Modecat from "../../assets/images/modecat.png";
const Header = (props) => {
  const { pages = [], setClickedLink, clickedLink } = props;
  const handleClick = (link) => {
    setClickedLink(link);
  };
  return (
    <header>
      {/* set Header to home */}
      <img
        className="logo"
        src={Modecat}
        width={75}
        height={75}
        alt="Modecat"
      />
      <h1> LoVerde </h1>
      {/* a navbar to swap content from project.jsx*/}
      <nav>
        <ul>
          {pages.map((page) => {
            return (
              <li
                className={`${clickedLink.name === page.name && "navActive"}`}
                key={page.name}
                onClick={() => setClickedLink(page)}
              >
                {page.name}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
export default Header;

