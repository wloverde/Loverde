import React from 'react';
// import AboutMe from "./content/AboutMe";
// import Portfolio from "./content/Portfolio";
// import Contact from "./content/Contact";
// import Resume from "./content/Resume";

const Project = ({clickedLink}) => {
    let content = null;

    switch (clickedLink) {
        case "aboutMe":
            content = <div>About Me</div>;
            break;
        case "portfolio":
            content = <div>Portfolio</div>;
            break;
        case "contact":
            content = <div>Contact</div>;
            break;
        case "resume":
            content = <div>Resume</div>;
            break;
        default:
            content = <div>About Me</div>;
            break;
    }
  
    return (
    <section className="card">
        {content}
    </section>
  );
};

export default Project;
