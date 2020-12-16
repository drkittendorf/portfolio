import React, { useState } from "react";
import burgerBender from '../assets/images/BurgerBender.png';
import codeQuiz from '../assets/images/CodeQuiz.png';
import noteTaker from '../assets/images/NoteTaker.png';
// import spacPort from '../assets/images/SpacePortal.png';
// import webOrg from '../assets/images/WebOrganizer.png';
// import codeRe from '../assets/images/CodeRefactor.png';
import Carousel from 'react-bootstrap-carousel';
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

        <Carousel.Item>
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
              <p id="desc" style={{width:"25vw"}}>This will be a lengthy description of the app</p>
              </div>
          </Carousel.Caption>

        </Carousel.Item>
{/* <div id="descdiv" style={{width:"25vw"}}>
             <p id="desc">THIS IS OUR DIVkdjsfgblksdjgflkajsdflksjdfkljasdflkjasdlfkjbsadlkfjbsadlkfjbasdlg;lkdfgsdfgkljsdfkgjhhsdkfgljhsd;lfgkhsdlkfg;ldskjfgldksjfglkdsjfglkjds;flgkds;flgkjsdlfgjkjfbslkdjfbaskD</p>
         </div> */}

        {/* <Carousel.Item>
          <img className="d-block w-40 mx-auto image1" src={codeQuiz} alt="Second slide"/>
          <Carousel.Caption>
            <h1>Second slide label</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-40 mx-auto image1" src={noteTaker} alt="Third slide" />
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item> */}

      </Carousel>
    )
    };
  
 