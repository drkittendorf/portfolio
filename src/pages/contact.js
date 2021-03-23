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

                        <div className="aboutBody mx-auto">
                            <h1>Contact</h1>
                            <h2>           Email: drkittendorf@gmail.com               </h2>
                            <h2>                                                       </h2>
                            <h2>LinkedIn: https://www.linkedin.com/in/dalerkittendorf/ </h2>
                            <h2>                                                       </h2>
                            <h2>GitHub: https://github.com/drkittendorf                </h2>
                            <h2>                                                       </h2>
                            <h3>             Austin Tx                                 </h3>
                        </div>

                </div>
        </div>
   );
  }


export default contact;