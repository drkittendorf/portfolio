import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
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

     const aa = 'https://dales-google-books-app.herokuapp.com';
     const ab = 'https://github.com/drkittendorf/google_books';
     const ba = 'https://drkittendorf.github.io/work-day-scheduler/';
     const bb = 'https://github.com/drkittendorf/work-day-scheduler';
     const ca = 'https://drkittendorf.github.io/employee-directory/';
     const cb = 'https://github.com/drkittendorf/employee-directory/';
     const da = 'https://safe-dusk-58943.herokuapp.com/'
     const db = 'https://github.com/drkittendorf/burger'
     const ea = 'https://drkittendorf.github.io/code-quiz/'
     const eb = 'https://github.com/drkittendorf/code-quiz/'
     const fa = 'https://frozen-mesa-87445.herokuapp.com/'
     const fb = 'https://drkittendorf.github.io/note-taker/'
     const ga = 'https://ancient-stream-67606.herokuapp.com/'
     const gb = 'https://github.com/drkittendorf/workout_tracker'
     const ha = 'https://drkittendorf.github.io/totallyNotTheDarkSide/'
     const hb = 'https://github.com/drkittendorf/totallyNotTheDarkSide'
     const ia = 'https://drkittendorf.github.io/password-generator/'
     const ib = 'https://github.com/drkittendorf/password-generator'
     const ja = 'https://drkittendorf.github.io/code-refactor/'
     const jb = 'https://github.com/drkittendorf/code-refactor'
     

    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className="hbody">
       
        {/* Slide #1 */}
        <Carousel.Item interval={5000}>
                   
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
                Available @: <a href={aa} className= 'lynx' target='_blank' rel='noopener noreferrer'> Google Books </a>
                <a href={ab} className= 'lynx' target='_blank' rel='noopener noreferrer'> Google Books GitHub </a> 
                
                Technologies Used:
                <div className='tech'>
                {vscode} {html} {css} {reacticon} 
                </div>
                <div className='tech'>
                {javascript} {nodejs} {mongodb} {github}
                </div>
                
                
                </p>
          </Carousel.Caption>

        </Carousel.Item>

         {/* #2 */}
        <Carousel.Item interval={5000}>

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
                Available @: <a href={ba} className= 'lynx' target='_blank' rel='noopener noreferrer'> Work Day Scheduler Live App </a>
                <a href={bb} className= 'lynx' target='_blank' rel='noopener noreferrer'> Work Day Scheduler Git Hub  </a> 
                
                Technologies Used:
                <div className='tech'>
                {vscode}{html}{css}
                </div>
                <div className='tech'>
                {javascript}{github}
                </div>             
                
                </p>
          </Carousel.Caption>

        </Carousel.Item> 
        
         {/* #3 */}
        <Carousel.Item interval={5000}>
          <Carousel.Caption id="title">
              <div>
              <h1 id="title" align="left">Employee Directory</h1>
              </div>
          </Carousel.Caption>

          <a href={ca} target='_blank' rel='noopener noreferrer'> 
                <img 
                src={empDir} 
                className='d-block w-40 mx-auto image1' 
                alt='Employee Directory' 
                />
           </a>

           <Carousel.Caption >
                <p id="description" style={{width:"25vw"}}>
                Available @: <a href={ca} className= 'lynx' target='_blank' rel='noopener noreferrer'> Employee Directory</a>
                <a href={cb} className= 'lynx' target='_blank' rel='noopener noreferrer'> Employee Directory GitHub </a> 
                
                Technologies Used:
                <div className='tech'>
                {vscode} {html} {css} {reacticon} 
                </div>
                <div className='tech'>
                {javascript} {nodejs} {github}
                </div>
                </p>
          </Carousel.Caption>

        </Carousel.Item>
        {/* END #3 */}
        
         {/* #4 */}
        <Carousel.Item interval={5000}>
          <Carousel.Caption id="title">
              <div>
              <h1 id="title" align="left">Burger App</h1>
              </div>
          </Carousel.Caption>

          <a href={da} target='_blank' rel='noopener noreferrer'> 
                <img 
                src={burgerBender} 
                className='d-block w-40 mx-auto image1' 
                alt='Burger App' 
                />
           </a>
              
           <Carousel.Caption >
                <p id="description" style={{width:"25vw"}}>
                Available @: <a href={da} className= 'lynx' target='_blank' rel='noopener noreferrer'> Burger App</a>
                <a href={db} className= 'lynx' target='_blank' rel='noopener noreferrer'> Burger App GitHub </a> 
                
                Technologies Used:
                <div className='tech'>
                {vscode} {html} {css}
                </div>
                <div className='tech'>
                {javascript} {nodejs} {github}
                </div>
                </p>
          </Carousel.Caption>

        </Carousel.Item> 
        {/* END #4 */}

        {/* #5 */}
        <Carousel.Item interval={5000}>

          <Carousel.Caption id="title">
              <div>
              <h1 id="title" align="left">Code Quiz</h1>
              </div>
          </Carousel.Caption>

            <a href={ea} target='_blank' rel='noopener noreferrer'> 
                <img 
                src={codeQuiz} 
                className='d-block w-40 mx-auto image1' 
                alt='Code Quiz' 
                />
           </a>

           <Carousel.Caption >
                <p id="description" style={{width:"25vw"}}>
                Available @: <a href={ea} className= 'lynx' target='_blank' rel='noopener noreferrer'> Code Quiz App</a>
                <a href={eb} className= 'lynx' target='_blank' rel='noopener noreferrer'> Code Quiz GitHub </a> 
                
                Technologies Used:
                <div className='tech'>
                {vscode} {html} {css}
                </div>
                <div className='tech'>
                {javascript} {github}
                </div>
                </p>
          </Carousel.Caption>

        </Carousel.Item> 
        {/* END #5 */}

        {/* Slide #6 */}
        <Carousel.Item interval={5000}>

          <Carousel.Caption id="title">
              <div>
              <h1 id="title" align="left">Note Taker</h1>
              </div>
          </Carousel.Caption>
           
          <a href={fa} target='_blank' rel='noopener noreferrer'> 
                <img 
                src={noteTaker} 
                className='d-block w-40 mx-auto image1' 
                alt='Note Taker' 
                />
           </a>
          
           <Carousel.Caption >
                <p id="description" style={{width:"25vw"}}>
                Available @: <a href={fa} className= 'lynx' target='_blank' rel='noopener noreferrer'> Note Taker App</a>
                <a href={fb} className= 'lynx' target='_blank' rel='noopener noreferrer'> Note Taker GitHub </a> 
                
                Technologies Used:
                <div className='tech'>
                {vscode} {html} {css}
                </div>
                <div className='tech'>
                {javascript} {github}
                </div>
                </p>
          </Carousel.Caption>

        </Carousel.Item>
         {/* END #6 */}
         
         {/* #7 */}
        <Carousel.Item interval={5000}>

          <Carousel.Caption id="title">
              <div>
              <h1 id="title" align="left">Fitness Tracker</h1>
              </div>
          </Carousel.Caption>

            <a href={ga} target='_blank' rel='noopener noreferrer'> 
                <img 
                src={fitTrack} 
                className='d-block w-40 mx-auto image1' 
                alt='Fitness Tracker' 
                />
           </a>

           <Carousel.Caption >
                <p id="description" style={{width:"25vw"}}>
                Available @: <a href={ga} className= 'lynx' target='_blank' rel='noopener noreferrer'> Fitness Tracker App</a>
                <a href={gb} className= 'lynx' target='_blank' rel='noopener noreferrer'> Fitness Tracker GitHub </a> 
                
                Technologies Used:
                <div className='tech'>
                {vscode} {html} {css}
                </div>
                <div className='tech'>
                {javascript} {github}
                </div>
                </p>
          </Carousel.Caption>
        
        </Carousel.Item>
           {/* End #7 */}

         {/* #8 */}
        <Carousel.Item interval={5000}>
          <Carousel.Caption id="title">
              <div>
              <h1 id="title" align="left">Space Portal</h1>
              </div>
          </Carousel.Caption>
           
          <a href={ha} target='_blank' rel='noopener noreferrer'> 
                <img 
                src={spacPort} 
                className='d-block w-40 mx-auto image1' 
                alt='Space Portal' 
                />
           </a>

           <Carousel.Caption >
                <p id="description" style={{width:"25vw"}}>
                Available @: <a href={ha} className= 'lynx' target='_blank' rel='noopener noreferrer'> Space Portal </a>
                <a href={hb} className= 'lynx' target='_blank' rel='noopener noreferrer'> Space Portal GitHub </a> 
                
                Technologies Used:
                <div className='tech'>
                {vscode} {html} {css} 
                </div>
                <div className='tech'>
                {javascript} {github}
                </div>
                 </p>
          </Carousel.Caption>

        </Carousel.Item>
        {/* END #8 */}
         
         {/* #9 */}
        <Carousel.Item interval={5000}>

          <Carousel.Caption id="title">
              <div>
              <h1 id="title" align="left">Password Generator</h1>
              </div>
          </Carousel.Caption>
           
          <a href={ia} target='_blank' rel='noopener noreferrer'> 
                <img 
                src={passGen} 
                className='d-block w-40 mx-auto image1' 
                alt='Password Generator' 
                />
           </a>

           <Carousel.Caption >
                <p id="description" style={{width:"25vw"}}>
                    Available @: <a href={ia} className= 'lynx' target='_blank' rel='noopener noreferrer'> Password Generator </a>
                    <a href={ib} className= 'lynx' target='_blank' rel='noopener noreferrer'> Password Generator GitHub </a> 
                    
                    Technologies Used:
                    <div className='tech'>
                    {vscode} {html} {css} 
                    </div>
                    <div className='tech'>
                    {javascript} {github}
                    </div>         
                </p>
          </Carousel.Caption>

        </Carousel.Item>
        {/* END #9 */}
        
         {/* #10 */}
        <Carousel.Item interval={5000}>
          
          <Carousel.Caption id="title">
              <div>
              <h1 id="title" align="left">Code Refactor</h1>
              </div>
          </Carousel.Caption>
          
          <a href={ja} target='_blank' rel='noopener noreferrer'> 
                <img 
                src={codeRefactor} 
                className='d-block w-40 mx-auto image1' 
                alt='Code Refactor' 
                />
           </a>

           <Carousel.Caption >
                <p id="description" style={{width:"25vw"}}>
                    Available @: <a href={ja} className= 'lynx' target='_blank' rel='noopener noreferrer'> Code Refactor </a>
                    <a href={jb} className= 'lynx' target='_blank' rel='noopener noreferrer'> Code Refactor GitHub </a> 
                    
                    Technologies Used:
                    <div className='tech'>
                    {vscode} {html} {css}
                    </div>
                    <div className='tech'>
                    {github}
                    </div>
                </p>
          </Carousel.Caption>

        </Carousel.Item>
        {/* END #10 */}


      </Carousel>
    )
    };