import React  from "react";
import "./project.css";
import work from "../assets/work.png";
import altitude from "../assets/altitude.png";
import fishing from "../assets/fishing.png";
import finance from "../assets/finance.png";
import quake from "../assets/quake.png";
import flavour from "../assets./flavour.png";

const emojis = [
    [finance, "Finance Pro Site", "Loan-focused finance website with a Survey integrated with gohigh-level CRM via API for efficient data management.","https://financeprosite.netlify.app/"],
    [fishing, "Great Fishing", "Get the freshest fish delivered to your doorstep with recipes - all in one convenient website!","https://greatfishing.netlify.app"],
    [quake, "QuakeVisio", "An insightful app that visually represents earthquake data empowering for a deeper understanding of seismic activity." , "https://radiant-salmiakki-6b61f8.netlify.app/"],
    [altitude, "Advertisement Agency", "Digital advertising agency website offering social media pricing, ad descriptions, and easy call bookings, " ,"https://agency-altitude.netlify.app"],
    [flavour, "Flavour Quest", "Feeding Your Flock Right: Premium Chicken Starters with dips delivered.","https://flavourquest78.netlify.app/"],
    [fishing, "Great Fishing", "Get the freshest fish delivered to your doorstep recipes - all in one convenient website!", "https://greatfishing.netlify.app"],
    [quake, "QuakeVisio", "An insightful app that visually represents earthquake  empowering for deeper understanding of seismic activity.", "https://radiant-salmiakki-6b61f8.netlify.app/"],
    [altitude, "Advertisement Agency", "Digital advertising agency website offering social media pricing, ad descriptions, and easy call bookings." ,"https://agency-altitude.netlify.app"],
     [flavour, "Flavour Quest", "Feeding Your Flock Right: Premium Chicken Starters with dips delivered.","https://flavourquest78.netlify.app/"],
  ];

function Projects(){

    const navigateToExternalURL = (url) => {
      window.open(url, "_blank"); 
    };

    return(
        <div className="projects" id="projects">
        <div className="wrapper col-md-7">
        <div>
        <h2 className="project-head">Projects</h2>
        <p className="sub-p">Some of my projects...</p>
        </div>
        <div className="carousel">
        {emojis.map((i, index) => (
          <div className="carousel__item" key={index} onClick={() => navigateToExternalURL(i[3])}>
            <div className="carousel__item-body">
              <img className="site-img" src={i[0]} alt=""></img>
              <div className="project">
              <span className="project-title">{i[1]}</span>
              <span className="project-desc">{i[2]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
        <div className="project-con col-md-3">
          <img className="project-img" src={work} alt=""></img>
        </div>
    </div>
    );
}

export default Projects;
