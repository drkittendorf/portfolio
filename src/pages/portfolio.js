import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
// import {Link} from 'react-router-dom'
//* IMAGES OF PROJECTS
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
//* CSS
import 'bootstrap/dist/css/bootstrap.min.css';  
import '../assets/css/portfolio.css'
//* icon images
import reactIcon from '../assets/images/icons/react.png';
import cssIcon from '../assets/images/icons/css.png';
import vscodeIcon from '../assets/images/icons/visual-studio-code.png';
import githubIcon from '../assets/images/icons/github.png';
import htmlIcon from '../assets/images/icons/html.png';
import jsIcon from '../assets/images/icons/javascript.png';
import nodejsIcon from '../assets/images/icons/nodejs.png';
import mongoIcon from '../assets/images/icons/mongodb.png';

const reacticon = 
     <img align="left" 
     alt="React" width="10%" height="10%" 
     src={reactIcon} 
     />
const css  = 
     <img align="left" 
     alt="HTML" width="10%" height="10%" 
     src={cssIcon} 
     />
const vscode = 
     <img align="left" 
     alt="VS Code" width="10%" height="10%" 
     src={vscodeIcon} 
     />
const github = 
     <img align="left" 
     alt="GitHub" width="10%" height="10%" 
     src={githubIcon} 
     />
const html = 
     <img align="left" 
     alt="HTML" width="10%" height="10%" 
     src={htmlIcon} 
     />
const javascript = 
     <img align="left" 
     alt="JavaScript" width="10%" height="10%" 
     src={jsIcon} 
     />
const nodejs = 
     <img align="left" 
     alt="Node JS" width="10%" height="10%" 
     src={nodejsIcon} 
     />
 const mongodb = 
     <img align="left" 
     alt="Mongo DB" width="15%" height='auto'
     src={mongoIcon} 
     />


export default function Portfolio() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    }; 

     let aa = 'https://dales-google-books-app.herokuapp.com';
     let ab = 'https://github.com/drkittendorf/21_google_books';
     let ba = 'https://drkittendorf.github.io/05-work-day-scheduler/'
     let bb = 'https://github.com/drkittendorf/05-work-day-scheduler';
   

     
     

    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className="hbody">
       
        {/* Slide #1 */}
        <Carousel.Item interval={200000}>
                   
          <Carousel.Caption id="title">
              <h1 id="title" align="left">Google Books</h1>
          </Carousel.Caption>

          <a href={aa} target='_blank' rel='noopener noreferrer'> 
                <img 
                src={googBook} 
                className='d-block w-40 mx-auto image1' 
                alt='Google Books' 
                />
           </a>
                     
          <Carousel.Caption >
                <p id="description" style={{width:"25vw"}}>
                Available @: <a href={aa} target='_blank' rel='noopener noreferrer'> Google Books </a>
                <a href={ab} target='_blank' rel='noopener noreferrer'> Google Books GitHub </a> 
                
                Technologies Used:
                <div className='tech'>
                {vscode} {html} {css} {reacticon} 
                </div>
                <div className='tech'>
                {javascript} {nodejs} {mongodb}
                </div>
                
                
                </p>
          </Carousel.Caption>

        </Carousel.Item>

         {/* #2 */}
        <Carousel.Item interval={1000}>

        <Carousel.Caption id="title">
              <h1 id="title" align="left">Work Day Scheduler</h1>
        </Carousel.Caption>

            <a href={ba} target='_blank' rel='noopener noreferrer'> 
                <img 
                src={workSched}
                className='d-block w-40 mx-auto image1' 
                alt="Work Day Scheduler" 
                />
           </a>

         
          <Carousel.Caption id="descdiv" >
            
              <p id="description" style={{width:"25vw"}}> 
              Available @: {ba}</p>

              <p id="description" style={{width:"25vw"}}> Technologies Used: HTML, CSS, JavaScript, VSCode, JQuery. 
                Available @: <a href="https://drkittendorf.github.io/05-work-day-scheduler" target='_blank' rel='noopener noreferrer'> Work Day Scheduler </a> 
                <a href={ab} target='_blank' rel='noopener noreferrer'> Work Day Scheduler Git Hub </a> 
                </p>
        
          </Carousel.Caption>
        </Carousel.Item> 
        
         {/* #3 */}
        <Carousel.Item interval={1000}>
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