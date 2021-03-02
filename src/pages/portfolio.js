import React, { useState } from "react";
import burgerBender from '../assets/images/BurgerBender.png';
import codeQuiz from '../assets/images/CodeQuiz.png';
import noteTaker from '../assets/images/NoteTaker.png';
import spacPort from '../assets/images/SpacePortal.png';
// import webOrg from '../assets/images/WebOrganizer.png';
import workSched from '../assets/images/WorkDayScheduler.png';
import fitTrack from '../assets/images/FitnessTracker.png';
import passGen from '../assets/images/PasswordGenerator.png';
import googBook from '../assets/images/GoogleBooks.png';
import codeRefactor from '../assets/images/CodeRefactor.png';
import empDir from '../assets/images/EmployeeDirectory.png';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';  
import '../assets/css/portfolio.css'
// import {Link} from 'react-router-dom'

export default function Portfolio() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    }; 

    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className="hbody">
       
        {/* Slide #1 */}
        <Carousel.Item interval={5000}>
          <Carousel.Caption id="title">
              <div>
                <h1 id="title" align="left">Google Books</h1>
              </div>
          </Carousel.Caption>
           
           <div> 
                <a href='https://dales-google-books-app.herokuapp.com' target='_blank' rel='noopener noreferrer'> 
                    <img src={googBook} alt="Google Books" className="d-block w-40 mx-auto image1"/>
                </a>
          </div> 

          <Carousel.Caption id="descdiv" >
              <div>
                <p id="description" style={{width:"25vw"}}> Technologies Used: HTML, CSS, JavaScript, VSCode, MongoDB. 
                Available @: <a href='https://dales-google-books-app.herokuapp.com' target='_blank' rel='noopener noreferrer'> Google Books </a> 
                </p>
              </div>
          </Carousel.Caption>
        </Carousel.Item>

         {/* #2 */}
        <Carousel.Item interval={5000}>
          <Carousel.Caption id="title">
              <div>
              <h1 id="title" align="left">Work Day Scheduler</h1>
              </div>
          </Carousel.Caption>
           <div> 
           <img className="d-block w-40 mx-auto image1" src={workSched} 
          href='https://drkittendorf.github.io/05-work-day-scheduler/' alt="Work Day Scheduler" target='_blank' rel='noopener noreferrer' />
           </div>
          <Carousel.Caption id="descdiv" >
              <div>
              <p id="description" style={{width:"25vw"}}>Technologies Used: HTML, CSS, JavaScript, VSCode, JQuery. 
              Available @: https://drkittendorf.github.io/05-work-day-scheduler</p>
              </div>
          </Carousel.Caption>
        </Carousel.Item> 
        
         {/* #3 */}
        <Carousel.Item interval={5000}>
          <Carousel.Caption id="title">
              <div>
              <h1 id="title" align="left">Employee Directory</h1>
              </div>
          </Carousel.Caption>
           <div> 
           <img className="d-block w-40 mx-auto image1" src={empDir} 
          href='https://drkittendorf.github.io/19-employee-directory/' alt="Employee Directory" target='_blank' rel='noopener noreferrer' />
           </div>
          <Carousel.Caption id="descdiv" >
              <div>
              <p id="description" style={{width:"25vw"}}>Technologies Used: HTML, CSS, JavaScript, VSCode, MongoDB 
              Available @: https://drkittendorf.github.io/19-employee-directory </p>
              </div>
          </Carousel.Caption>
        </Carousel.Item>
        
         {/* #4 */}
        <Carousel.Item interval={5000}>
          <Carousel.Caption id="title">
              <div>
              <h1 id="title" align="left">Fitness Tracker</h1>
              </div>
          </Carousel.Caption>
           <div> 
           <img className="d-block w-40 mx-auto image1" src={fitTrack} 
          href='https://ancient-stream-67606.herokuapp.com/exercise' alt="Fitness Tracker" target='_blank' rel='noopener noreferrer' />
           </div>
          <Carousel.Caption id="descdiv" >
              <div>
              <p id="description" style={{width:"25vw"}}>Technologies Used: HTML, CSS, JavaScript, VSCode. 
              Available @: https://ancient-stream-67606.herokuapp.com/exercise </p>
              </div>
          </Carousel.Caption>
        </Carousel.Item> 
        
        {/* #5 */}
        <Carousel.Item interval={5000}>
          <Carousel.Caption id="title">
              <div>
              <h1 id="title" align="left">Space Portal</h1>
              </div>
          </Carousel.Caption>
           <div> 
           <img className="d-block w-40 mx-auto image1" src={spacPort} 
          href='https://drkittendorf.github.io/totallyNotTheDarkSide/' alt="Space Portal" target='_blank' rel='noopener noreferrer' />
           </div>
          <Carousel.Caption id="descdiv" >
              <div>
              <p id="description" style={{width:"25vw"}}>Technologies Used: HTML, CSS, JavaScript, VSCode, Server Side APIs.
              Available @: https://drkittendorf.github.io/totallyNotTheDarkSide  </p>
              </div>
          </Carousel.Caption>
        </Carousel.Item> 
        
        {/* #6 */}
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
              <p id="description" style={{width:"25vw"}}>Technologies Used: HTML, CSS, JavaScript, 
              Available @: https://safe-dusk-58943.herokuapp.com </p>
              </div>
          </Carousel.Caption>
        </Carousel.Item>
         
         {/* #7 */}
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
              <p id="description" style={{width:"25vw"}}>Technologies Used: HTML, CSS, JavaScript.
              Available @: https://safe-dusk-58943.herokuapp.com </p>
              </div>
          </Carousel.Caption>
        </Carousel.Item>
         
         {/* #8 */}
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
              <p id="description" style={{width:"25vw"}}>Technologies Used: HTML, CSS, JavaScript.
              Available @: https://frozen-mesa-87445.herokuapp.com/notes.html </p>
              </div>
          </Carousel.Caption>
        </Carousel.Item>
         
         {/* #9 */}
        <Carousel.Item interval={5000}>
          <Carousel.Caption id="title">
              <div>
              <h1 id="title" align="left">Password Generator</h1>
              </div>
          </Carousel.Caption>
           <div> 
           <img className="d-block w-40 mx-auto image1" src={passGen} 
          href='https://drkittendorf.github.io/03PasswordGenerator/' alt="Password Generator" target='_blank' rel='noopener noreferrer' />
           </div>
          <Carousel.Caption id="descdiv" >
              <div>
              <p id="description" style={{width:"25vw"}}>Technologies Used: HTML, CSS, JavaScript, VSCode.
              Available @: https://drkittendorf.github.io/03PasswordGenerator </p>
              </div>
          </Carousel.Caption>
        </Carousel.Item>
        
         {/* #10 */}
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
              <p id="description" style={{width:"25vw"}}>Technologies Used: HTML, CSS, VSCode. 
                Available @: https://drkittendorf.github.io/01CodeRefactor </p>
              </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
    };