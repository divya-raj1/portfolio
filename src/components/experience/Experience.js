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
            <li>- Developed solutions within timelines and wrote unit tests to ensure code was 100% bug free.</li>
            <li>- Engaged with third party vendors to develop and include third party features.</li>
            <li>- Worked with design teams to enhance existing websites and increase convertion rates by 20%.</li>
          </ul>
        </div>
        <div className="experience-worked">
          <div className="experience-heading">
            <h5>Quest Innovative Solution Pvt Ltd.</h5>
            <button className="btn btn-primary">2017</button>
          </div>
          <h6>Bootstrap Intern</h6>
          <ul>
            <li>- Worked with Front End for building responsive websites in HTML, CSS, JavaScript.</li>
            <li>- Wrote styles to enhance responsive development of mobile-first websites in Bootstrap.</li>
            <li>- Tested functionality of code on multiple web browsers.</li>
          </ul>
        </div>
        <h5>Skills</h5>
        <AnimatedOnScroll animationIn="fadeIn" className="experience-skills">
          <button className="btn btn-primary">React JS</button>
          <button className="btn btn-primary">Javascript</button>
          <button className="btn btn-primary">HTML5</button>
          <button className="btn btn-primary">CSS3</button>
          <button className="btn btn-primary">jQuery</button>
          <button className="btn btn-primary">Bootstrap</button>
          <button className="btn btn-primary">Material UI</button>
          <button className="btn btn-primary">RESTful Webservices</button>
          <button className="btn btn-primary">Scrum</button>
          <button className="btn btn-primary">Node JS</button>
          <button className="btn btn-primary">web socket</button>
          <button className="btn btn-primary">My SQL</button>
        </AnimatedOnScroll>
      </div>

    </section>
  )
}
