import React, { useState, useEffect } from "react";
import AboutMe from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";

function Page(props) {
  const { clickedLink } = props;
  const { name } = clickedLink;
  const render = () => {
    switch (name) {
      case "aboutMe":
        return <AboutMe />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };
  return <section>{render()}</section>;
}

export default Page;
