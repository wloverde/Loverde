import { useState } from "react";
import React from "react";
import AboutMe from "./content/AboutMe";
import Portfolio from "./content/Portfolio";
import Contact from "./content/Contact";
import Resume from "./content/Resume";

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
        hi
        {content}
    </section>
  );
};

export default Project;
