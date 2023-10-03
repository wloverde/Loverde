import React from "react";
import "./index.css"
import GithubImage from "../../assets/images/github.svg";
import LinkedinImage from "../../assets/images/linkedin.svg";
import EmailImage from "../../assets/images/email.svg";
import PhoneImage from "../../assets/images/phone.svg";

const contactOptions = [
  { icon: PhoneImage, link: "tel:+9803954698", alt: "Phone Link" },
  { icon: EmailImage, link: "mailto:w.andrew.loverde@gmail.com", alt: "Email Link" },
  { icon: GithubImage, link: "https://github.com/wloverde", alt: "Github Link" },
  { icon: LinkedinImage, link: "https://www.linkedin.com/in/andrewloverde/", alt: "Linkedin Link" },
];

const Contact = () => {
  return (
    <section>
      <h2>Contact Me</h2>
      <div className="contact-grid">
        {contactOptions.map((option, index) => (
          <a href={option.link} key={index}>
            <div className="contact-item">
              {option.alt}
              <br/>
              <img src={option.icon} width={50} height={50} alt={option.alt} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;

