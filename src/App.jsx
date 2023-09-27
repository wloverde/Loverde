import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Project from './components/Project'
import './App.css';

function App() {
  const [clickedLink, setClickedLink] = useState("aboutMe");

  const handleClick = (link) => {
      setClickedLink(link);
  };

  return (
    <>
      <Header clickedLink={clickedLink} onLinkClick={handleClick}/> 
      <Project clickedLink={clickedLink}/>
      <Footer/>
    </>
  )
}

export default App
