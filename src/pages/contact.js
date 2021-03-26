import React from "react";
import dale from '../assets/images/aboutDale.png';
//* CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/style.css"

function contact(){
    return(
        <div className="bodybody">
     
                <div className='sideByPair'>
                        {/*pair of divs*/}
                        <div className='aboutImage mx-auto'> 
                            <img src={dale} alt="Dale Kittendorf"/> 
                        </div> 

                        <div className="contactBody mx-auto">
                            <h1>Contact</h1>
                            <br></br>
                            <h2> Email: </h2>
                          <a href='mailto:drkittendorf@gmail.com' target='_blank' rel='noopener noreferrer'> <h2> drkittendorf@gmail.com </h2> </a> 
                          <h2>GitHub:</h2>
                            <a href='https://github.com/drkittendorf' target='_blank' rel='noopener noreferrer'> <h2> https://github.com/drkittendorf </h2> </a>
                            <h2></h2>
                            <h2>LinkedIn:</h2>
                            <a href='https://www.linkedin.com/in/dalerkittendorf' target='_blank' rel='noopener noreferrer'> <h2> https://www.linkedin.com/in/dalerkittendorf</h2> </a> 
                            
                            
                        </div>

                </div>
        </div>
   );
  }


export default contact;