import React from 'react';
import './Experience.css';
import {AnimatedOnScroll} from "react-animated-css-onscroll";

export default function Experience() {
  return (
    <section id="experience">
      <h2>Where I've worked</h2>
      <h5>The skills I have</h5>
      <div className="container experience-container">
        <div className="experience-worked">
          <div className="experience-heading">
            <h5>Infosys</h5>
            <button className="btn btn-primary">2020 - Present</button>
          </div>
          <h6>Senior Systems Engineer (Front End)</h6>
          <ul>
            <li>- Developed, debugged and maintained websites in React JS, JavaScript (ES6), HTML5, CSS3, jQuery.</li>
            <li>- Developed solutions for web application issues with zero bugs and within timelines.</li>
            <li>- Engaged with third party vendors to develop and include third party software integrations.</li>
            <li>- Self trained and worked along with backend integrations in server-side languages.</li>
          </ul>
        </div>
        <h5>Skills</h5>
        <AnimatedOnScroll animationIn="fadeIn" className="experience-skills">
          <button className="btn btn-primary">React JS</button>
          <button className="btn btn-primary">Javascript</button>
          <button className="btn btn-primary">HTML</button>
          <button className="btn btn-primary">CSS</button>
          <button className="btn btn-primary">jQuery</button>
          <button className="btn btn-primary">Bootstrap</button>
          <button className="btn btn-primary">Node JS</button>
          <button className="btn btn-primary">web socket</button>
          <button className="btn btn-primary">My SQL</button>
          <button className="btn btn-primary">MongoDB</button>
        </AnimatedOnScroll>
      </div>

    </section>
  )
}
