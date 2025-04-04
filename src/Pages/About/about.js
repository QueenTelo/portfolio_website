import React from 'react'
import image from "../../assets/about_image_website_blue.png";
import "./about.css";

const About = () => {
    return (
      <section id="aboutSection">
        <div className="aboutDescription">
          <span className="aboutWord">Hello,</span>
          <span className="aboutText">I'm Xongotelo Baloyi</span>
          <span className="aboutTitle">A Junior FullStack Developer</span>
          <span className="aboutMessage">
            Passionate about building engaging web experiences with a blend of creativity and code.
          </span>
        </div>
        <img src={image} alt="profile photo" className="aboutImage"></img>
      </section>
    );
}

export default About