import React from "react";
import "./index.css";
import CSSTips from "../../assets/images/csstips.gif";
import Landing from "../../assets/images/landing.jpg";
import MovieReview from "../../assets/images/Movie3.jpeg";
import RPGSheet from "../../assets/images/rpgsheet.jpg";
import StudyGuide from "../../assets/images/studyguide.jpeg";

const portfolioData = [
  { image: RPGSheet, title: "RPG Sheet", usage: "HandleBars | SQL | Node", link: "https://character-create-6e08ef125fdc.herokuapp.com/" },
  { image: MovieReview, title: "Movie Review",usage: "HTML | Javascript | APIS", link: "https://foxeyb28.github.io/MovieReviews/" },
  { image: CSSTips, title: "CSS Tips",usage: "HTML | CSS",link: "https://wloverde.github.io/css-tips/" },
  { image: StudyGuide, title: "Study Guide",usage: "HTML | CSS", link: "https://wloverde.github.io/prework-study-guide/" },
  { image: Landing, title: "Landing Page",usage: "HTML | CSS", link: "https://wloverde.github.io/landing/" },
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>Work</h2>
      <div id="work" className="portfolio-grid">
        {portfolioData.map((item, index) => (
          <a href={item.link} key={index} className="portfolio-item">
            <div className="card">
              <img src={item.image} alt={item.title} width={400} height={200} />
              <h4>{item.usage}</h4>
              <h3>{item.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
