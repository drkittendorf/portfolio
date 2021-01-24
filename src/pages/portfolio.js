import React, { useState } from "react";
import burgerBender from '../assets/images/BurgerBender.png';
import codeQuiz from '../assets/images/CodeQuiz.png';
import noteTaker from '../assets/images/NoteTaker.png';
// import spacPort from '../assets/images/SpacePortal.png';
// import webOrg from '../assets/images/WebOrganizer.png';
import codeRefactor from '../assets/images/CodeRefactor.png';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';  
import "../assets/css/portfolio.css" 
// import {Link} from "react-router-dom"

export default function Portfolio() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    }; 

    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className="hbody">

        <Carousel.Item interval={5000}>
          <Carousel.Caption id="title">
              <div>
              <h1 id="title" align="left">Burger App</h1>
              </div>
          </Carousel.Caption>
           <div> 
           <img className="d-block w-40 mx-auto image1" src={burgerBender} 
          href='https://safe-dusk-58943.herokuapp.com/' alt="Burger App" target='_blank' rel='noopener noreferrer' />
           </div>
          <Carousel.Caption id="descdiv" >
              <div>
              <p id="description" style={{width:"25vw"}}>Technologies Used: HTML, CSS, JavaScript, </p>
              </div>
          </Carousel.Caption>
        </Carousel.Item>


         {/* <div id="descdiv" style={{width:"25vw"}}>
             <p id="desc">gjkj</p>
         </div>  */}

        <Carousel.Item interval={5000}>
          <Carousel.Caption id="title">
              <div>
              <h1 id="title" align="left">Code Quiz</h1>
              </div>
          </Carousel.Caption>
           <div> 
           <img className="d-block w-40 mx-auto image1" src={codeQuiz} 
          href='https://safe-dusk-58943.herokuapp.com/' alt="Code Quiz" target='_blank' rel='noopener noreferrer' />
           </div>
          <Carousel.Caption id="descdiv" >
              <div>
              <p id="description" style={{width:"25vw"}}>Technologies Used: HTML, CSS, JavaScript, </p>
              </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <Carousel.Caption id="title">
              <div>
              <h1 id="title" align="left">Note Taker</h1>
              </div>
          </Carousel.Caption>
           <div> 
           <img className="d-block w-40 mx-auto image1" src={noteTaker} 
          href='https://frozen-mesa-87445.herokuapp.com/notes.html' alt="Note Taker" target='_blank' rel='noopener noreferrer' />
           </div>
          <Carousel.Caption id="descdiv" >
              <div>
              <p id="description" style={{width:"25vw"}}>Technologies Used: HTML, CSS, JavaScript, </p>
              </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <Carousel.Caption id="title">
              <div>
              <h1 id="title" align="left">Code Refactor</h1>
              </div>
          </Carousel.Caption>
           <div> 
           <img className="d-block w-40 mx-auto image1" src={codeRefactor} 
          href='https://drkittendorf.github.io/01CodeRefactor/' alt="Note Taker" target='_blank' rel='noopener noreferrer' />
           </div>
          <Carousel.Caption id="descdiv" >
              <div>
              <p id="description" style={{width:"25vw"}}>Technologies Used: HTML, CSS, VSCode </p>
              </div>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    )
    };