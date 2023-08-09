import React ,{useState,useEffect,useRef}from "react";
import Carousel from 'react-multi-carousel';
import skill from "../assets/skills.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import bootstrap from "../assets/bootstrap.png";
import git from "../assets/git.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import angular from "../assets/angular.png";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  }; 

function Skills(){
    const carouselRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        carouselRef.current.next();
      }, 1000); 
  
      return () => clearInterval(interval);
    }, []);
  
    const handleSlideChange = (index) => {
      setCurrentSlide(index);
    };
    return(
        <div className="skill" id="skills">
            <div className="skill-image col-md-3">
                <img className="skill-image" src={skill} alt=""></img>
            </div>
            <div className="skill-div col-md-7">
                <h2 className="skill-head">Skills</h2>
                <p className="sub-p">What I have learnt so far</p>
                <div class="slider-container">
                <Carousel responsive={responsive} ref={carouselRef} infinite={true} selectedSlide={currentSlide} afterChange={handleSlideChange}>
                  <div className="skills">
                   <img className="skill-img" src={html} alt="Logo 1"></img>
                   <h4 className="skill-h">HTML</h4>
                  </div>
                  <div className="skills">
                   <img className="skill-img" src={css} alt="Logo 2"></img>
                   <h4 className="skill-h">CSS</h4>
                   </div>
                   <div className="skills">
                   <img className="skill-img" src={js} alt="Logo 2"></img>
                   <h4 className="skill-h">Javascript</h4>
                   </div>
                   <div className="skills">
                   <img className="skill-img" src={bootstrap} alt="Logo 2"></img>
                   <h4 className="skill-h">Bootstrap</h4>
                   </div>
                   <div className="skills">
                   <img className="skill-img" src={git} alt="Logo 2"></img>
                   <h4 className="skill-h">Git</h4>
                   </div>
                   <div className="skills">
                   <img className="skill-img" src={mongo} alt="Logo 2"></img>
                   <h4 className="skill-h">MongoDB</h4>
                   </div>
                   <div className="skills">
                   <img className="skill-img" src={node} alt="Logo 2"></img>
                   <h4 className="skill-h">Node</h4>
                   </div>
                   <div className="skills">
                   <img className="skill-img" src={react} alt="Logo 2"></img>
                   <h4 className="skill-h">React</h4>
                   </div>
                   <div className="skills">
                   <img className="skill-img" src={angular} alt="Logo 2"></img>
                   <h4 className="skill-h">Angular</h4>
                   </div>
                </Carousel>
            </div>
            </div>
        </div>
        );
    }

    export default Skills;