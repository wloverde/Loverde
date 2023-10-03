import React from "react";
import Github from "../../assets/images/github.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import Email from "../../assets/images/email.svg";
import Phone from "../../assets/images/phone.svg";

const Footer = () => {
  return (
    <footer id="contact">
      <h2>Contact Me</h2>
      <ul>
        <li>
          <a href="tel:+9803954698">
            <PhoneImage width={50} height={50} alt="Phone Link" />
          </a>
        </li>
        <li>
          <a href="mailto:w.andrew.loverde@gmail.com">
            <EmailImage width={50} height={50} alt="Email Link" />
          </a>
        </li>
        <li>
          <a href="https://github.com/wloverde">
            <GithubImage width={50} height={50} alt="Github Link" />
          </a>
        </li>
        <li>
          <a href="https://www.twitch.tv/sanpygames">
            <TwitchImage width={50} height={50} alt="Twitch Link" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
