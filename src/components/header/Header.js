import React from 'react';
import Profile from './profile/Profile';
import Footer from './footer/Footer';
import './Header.css';

export default function Header() {
  return (
    <div className="home-component">
      <Profile/>
      <Footer/>
    </div>
  )
}
