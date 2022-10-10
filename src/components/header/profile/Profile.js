import React from 'react';
import './Profile.css';
import Resume from '../../../assets/Home/resume.pdf';

export default function Profile() {
  return (
    <div className="profile-component">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="detail-name">
            <span className="primary-text">Hi, my name is <span className="name-highlight">Divya Raj</span></span>
          </div>
          <div className="detail-role">
            <span className="primary-text">
              <h1>Frontend<br />Developer.</h1>
            </span>
          </div>
          <div className="contact">
          <a href="#contact">
              <button className="btn primary-btn">Contact</button>
            </a>
            <a href={Resume} download>
              <button className="btn primary-btn">Resume</button>
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/divya-r-a273a0191" target="_blank">
              <i className='fa fa-linkedin-square'></i>
            </a>
            <a href="https://github.com/divya-raj1" target="_blank">
              <i className='fa fa-github-square'></i>
            </a>
          </div>
        </div>
        <div className="profile-picture">
            <div className="picture-background">
            </div>
        </div>
      </div>   
    </div>
  )
}
