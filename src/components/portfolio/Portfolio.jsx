import React from "react";
import IMG1 from "../../assets/Educational Website.jpg";
import IMG2 from "../../assets/RubyCode Blog Project.jpg";
import IMG4 from "../../assets/Covid-19 Project.jpg";


import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Animation Website",
      img: IMG1,
      description:
        "An animation website developed using HTML CSS and JS with the help of bootstrap and jquery",
      technologies: "Html | CSS | Javascript | jQuery",
      github: "https://github.com/piyushraj1/Animation-website-project.git",
    },
    {
      id: 2,
      title: "Retail Management",
      img: IMG4,
      description:
        "This Dashboard is developed  using Python in which you can see the data of sold and purchased items ",
      technologies: "Python",
      github: "https://github.com/piyushraj1/retail-management.git",
    },
    {
      id: 3,
      title: "Freelancing",
      img: IMG2,
      description: "Video Editing and Graphic designing.",
      technologies: "Filmora | Canva | Photoshop",
      
      // github: "https://github.com/Rasif-Taghizada/RubyCode-Blog",
    },
    
    
    
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
             
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
