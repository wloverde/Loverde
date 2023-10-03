import React, { useState, useEffect } from "react";


const Project = ({ clickedLink }) => {
  const [content, setContent] = useState("aboutMe");
  console.log(clickedLink, "clickedLink from project.jsx");
  return (
    <>
        {contentChange(clickedLink)}
    </>
  );
  
};

export default Project;
