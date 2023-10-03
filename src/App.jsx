import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Project from "./components/Project";
import Page from "./components/Pages";
import "./App.css";

function App() {
  const [pages] = useState([
    { name: "aboutMe" },
    { name: "resume" },
    { name: "portfolio" },
    { name: "contact" },
  ]);

  const [clickedLink, setClickedLink] = useState(pages[0]);

  // const handleClick = (link) => {
  //     setClickedLink(link);
  // };

  return (
    <>
      <Header
        clickedLink={clickedLink}
        setClickedLink={setClickedLink}
        pages={pages}
      />
      <main>
        <Page clickedLink={clickedLink} > </Page>
      </main>
      <Footer />
    </>
  );
}

export default App;
