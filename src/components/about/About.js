import React from 'react';
import './About.css';
//href not added as of now
export default function About() {

  return (
    <section id="about">
      <h2>About Me</h2>
      <h5>Myself</h5>
      <div className="container about-container">
        <p>Hello! I’m Divya. I'm a result-oriented, passionate Front End Developer and I enjoy developing Front end user interfaces for websites and exploring new technologies.</p>
          <div className="about-cards">
            <a className="about-card">
              <i className="fa fa-cogs about-icon"></i>
              <h5>Experience</h5>
              <small>2+ years working</small>
            </a>
            <a className="about-card">
              <i className="fa fa-book about-icon"></i>
              <h5>Education</h5>
              <small>B.Tech Graduate</small>
            </a>
          </div>
          <a href="#contact" className="btn btn-primary">Get In Touch</a>
      </div>
    </section>
  )
}
