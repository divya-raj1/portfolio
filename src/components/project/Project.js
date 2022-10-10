import React from 'react';
import './Project.css';
import Project1 from '../../assets/Home/portfolio.png';
import Project3 from '../../assets/Home/react-api-image.png';
import Project4 from '../../assets/Home/priceTracker.png';
import Project2 from '../../assets/Home/playstore.png';


//array of images
const data = [
  {
    id: 1,
    image: Project1,
    title: 'My Portfolio',
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    image: Project2,
    title: 'Google play store landing page clone',
    github: 'https://github.com/divya-raj1/playstore-page',
    demo: 'https://divya-raj1.github.io/playstore-page/'
  },
  {
    id: 3,
    image: Project3,
    title: 'Responsive React Webpage',
    github: 'https://github.com/divya-raj1/react-webpage',
    demo: 'https://divya-raj1.github.io/react-webpage/'
  },
  {
    id: 4,
    image: Project4,
    title: 'Simple price tracker',
    github: 'https://github.com/divya-raj1/Price-Tracker',
    demo: 'https://divya-raj1.github.io/Price-Tracker/'
  }
]

export default function Portfolio() {
  return (
    <section id="project">
      <h2>Some Things I've Built</h2>
      <h5>Projects</h5>

      <div className="container project-container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (<article key={id} className="project-items">
              <div className="project-item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="project-item-cta">
                <a href={github} className="btn" target={id == 1 ? "" : "_blank"}>Github</a>
                <a href={demo} className="btn btn-primary" target={id == 1 ? "" : "_blank"}>Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}
