import { useState } from "react";
import React from "react";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";

const Project = ({clickedLink}) => {
    let content = null;

    switch (clickedLink) {
        case "aboutMe":
            content = <AboutMe />;
            break;
        case "portfolio":
            content = <Portfolio />;
            break;
        case "contact":
            content = <Contact />;
            break;
        case "resume":
            content = <Resume />;
            break;
        default:
            content = <AboutMe />;
            break;
    }
  
    return (
    <section className="card">
        {content}
    </section>
  );
};

export default Project;
