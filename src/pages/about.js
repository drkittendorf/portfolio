import React from "react";
import "../assets/css/style.css"
import dale from '../assets/images/aboutDale.png';

function about() {
  return (
    <div className="bodybody">
     
         <div className='sideByPair'>
                <div className='aboutImage'> 
                    <img src={dale} alt="Dale Kittendorf"/> 
                </div> 
                <div className="aboutBody">
                    <h1>~ About ~</h1>
                        <p>
                            Thank You for visiting my portfolio site!
                        </p>
        
                        <p>
                        I am a web developer committed to a life of learning. I have recently completed my Full Stack Web Development Certificate at the University of Texas, Austin. 
                        I also have a background in Library and Information Science. Since moving to Austin in 2014 I have had the opportunity to explore the film and music industry.
                        While at Austin Public Library I lead the development of the  Electric Lady Bird streaming music service 
                        and initiated the development of a Sight and Sound team at the Library.
                        </p>
                    
                        <p>
                        Having the opportunity to work with some exciting aspects of technology, inspired me to dive deeper into web development.
                        After completing the Web Development bootcamp, I intend to continue developing my knowledge of programming, through continued learning and practice.
                        I am particularly interested in Virtual Reality, Cybersecurity and UX design, but I am seeking to be a strong contributor in a team environment 
                        in which I can continue to learn and develop new skills, while adapting my problem solving and creative skills to an exciting new environment.
                        </p>

                        <p>
                        Througout my working life I have been guided by the principles of providing excellent customer service, whether those are internal or external customers.
                        I also have experience in managing budgets, projects and personnel. 
                        In my spare time I enjoy video and board games, listening to music, watching and discussing film and television and fresh dining experiences.  
                        </p>
                </div>
        </div>
      
    </div>
  );
}

export default about;