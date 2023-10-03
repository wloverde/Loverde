import React, { useState, useEffect } from "react";
import Header from "./Header";
import { render } from "react-dom";
import AboutMe from "./About/AboutMe";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";

const Project = ({ clickedLink }) => {
  const [content, setContent] = useState("aboutMe");
  console.log(clickedLink, "clickedLink from project.jsx");
//   const contentChange =  () => {
//     switch (content) {
//         case "aboutMe":
//             return <AboutMe/>;
//         case "portfolio":
//             return <Portfolio/>;
//         case "contact":
//             return <Contact/>;
//         case "resume":
//             return <Resume/>;
//         default:
//             return <AboutMe/>;
//   }}


  return (
    <>
        {contentChange(clickedLink)}
    </>
  );
  
};

export default Project;
