import React from "react";
import GithubImage from "../../assets/images/github.svg";
import LinkedinImage from "../../assets/images/linkedin.svg";
import EmailImage from "../../assets/images/email.svg";
import PhoneImage from "../../assets/images/phone.svg";

const Footer = () => {
  return (
    <footer id="contact">
      <h2>Contact Me</h2>
      <ul>
        <li>
          <a href="tel:+9803954698">
            <img src={PhoneImage} width={50} height={50} alt="Phone Link" />
          </a>
        </li>
        <li>
          <a href="mailto:w.andrew.loverde@gmail.com">
            <img src={EmailImage} width={50} height={50} alt="Email Link" />
          </a>
        </li>
        <li>
          <a href="https://github.com/wloverde">
            <img src={GithubImage} width={50} height={50} alt="Github Link" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/andrewloverde/">
            <img src={LinkedinImage} width={50} height={50} alt="Linkedin Link" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
