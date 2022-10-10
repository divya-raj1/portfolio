import React from 'react';
import './Contact.css';
import { useRef as UseRef } from 'react';
import emailjs from '@emailjs/browser';

export default function contact() {
  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bnniin8', 'template_fcti2h8', form.current, 'rgKmdWIrldm_AiiU4')

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <h5>Contact Me</h5>
      <div className="container contact-container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" rows="7" placeholder="Message" required>
          </textarea>
          <button type="submit" className="btn btn-primary">Send Message!</button>
        </form>
      </div>
    </section>
  )
}
