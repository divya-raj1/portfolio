import React, {useState} from 'react';
import './Navigation.css';

export default function Navigation() {
  const [activeSec, setActiveSec] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveSec('#')} className={activeSec === '#' ? 'active' : ''}>
        <i className="fa fa-home"></i>
      </a>
      <a href="#about" onClick={() => setActiveSec('#about')} className={activeSec === '#about' ? 'active' : ''}>
        <i className="fa fa-user"></i>
      </a>
      <a href="#experience" onClick={() => setActiveSec('#experience')} className={activeSec === '#experience' ? 'active' : ''}>
        <i className="fa fa-cogs"></i>
      </a>
      <a href="#project" onClick={() => setActiveSec('#project')} className={activeSec === '#project' ? 'active' : ''}>
        <i className="fa fa-share-alt"></i>
      </a>
      <a href="#contact" onClick={() => setActiveSec('#contact')} className={activeSec === '#contact' ? 'active' : ''}>
        <i className="fa fa-envelope-o"></i>
      </a>
    </nav>
  )
}
