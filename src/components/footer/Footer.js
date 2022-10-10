import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-social">
        <a href="https://www.linkedin.com/in/divya-r-a273a0191" target="_blank">
          <i className='fa fa-linkedin-square'></i>
        </a>
        <a href="https://github.com/divya-raj1" target="_blank">
          <i className='fa fa-github-square'></i>
        </a>
      </div>
      <div className="footer-contact">
        <span><a href="mailto:divyarj982gmail.com">divyarj98@gmail.com</a> &nbsp;&nbsp;|&nbsp;&nbsp; +91 7034307717</span>
      </div>
      <span>&copy; Divya Raj 2022. All rights reserved.</span>
    </footer>
  )
}
