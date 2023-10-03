import React from "react";
// import image thumbnails from ./assets/images
import CSSTips from "../../assets/images/csstips.gif";
import Horiseon from "../../assets/images/horiseon.jpg";
import Landing from "../../assets/images/landing.jpg";
import MovieReview from "../../assets/images/Movie3.jpeg";
import RPGSheet from "../../assets/images/rpgsheet.jpg";
import StudyGuide from "../../assets/images/studyguide.jpeg";

const portfolioData = [
  { image: CSSTips, title: "CSS Tips", link: "https://wloverde.github.io/css-tips/" },
  { image: Horiseon, title: "Horiseon", link: "https://foxeyb28.github.io/MovieReviews/" },
  { image: Landing, title: "Landing Page", link: "https://wloverde.github.io/landing/" },
  { image: MovieReview, title: "Movie Review", link: "#" },
  { image: RPGSheet, title: "RPG Sheet", link: "https://character-create-6e08ef125fdc.herokuapp.com/" },
  { image: StudyGuide, title: "Study Guide", link: "https://wloverde.github.io/prework-study-guide/" },
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>Work</h2>
      <div id="work">
        {portfolioData.map((item, index) => (
          <a href={item.link} key={index}>
            <div className="card">
              <img src={item.image} alt={item.title} width={200} height={300} />
              <h4>HTML | CSS</h4>
              <h3>{item.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}


export default Portfolio;
