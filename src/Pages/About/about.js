import React from 'react'
import image from "../../assets/about_image.jpg";

const About = () => {
    return (
      <section>
        <div className="aboutDescription">
          <span className="aboutWord">
            Hello,
            <span className="aboutText">
              I'm
              <span className="aboutName">
                Xongotelo Baloyi
                <br/>FullStack Developer
              </span>
            </span>
          </span>
        </div>
        <img src={image} alt="profile photo" className="aboutImage"></img>
      </section>
    );
}

export default About