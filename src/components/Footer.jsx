import React from "react";
import Github from "../assets/images/github.svg";
import Linkedin from "../assets/images/linkedin.svg";
import Email from "../assets/images/email.svg";
import Phone from "../assets/images/phone.svg";

const Footer = () => {
  return (
    <footer>
        <h1>Contact:</h1>
        <div>
        <img src={Github} width={50} height={50} alt="Github Link" />
        <img src={Linkedin} width={50} height={50} alt="Linkedin Link" />
        <img src={Email} width={50} height={50} alt="Email Link" />
        <img src={Phone} width={50} height={50} alt="Phone Link" />
        </div>

    </footer>
  );
}

export default Footer;