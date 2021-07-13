import React from "react";
import dale from '../assets/images/aboutDale.png';
//* CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/style.css"


function about() {
  return (
    <div className="bodybody">
     
         <div className='sideByPair mx-auto'>
                {/* <div className='aboutImage'> 
                    <img src={dale} alt="Dale Kittendorf"/> 
                </div>  */}
                <div className="aboutBody">
                    <h2>About Dale </h2>
                    <br></br>
                    <h2>Full Stack Developer</h2>
                        <p>
                        In October of 2020, I completed my Full Stack Web Development Certificate at the University of Texas. <br></br>
                        In July of 2021, I completed a 6-week full-time Certificate Course in Java and React Native through Southern Methodist University. <br></br>
                        </p>

                        <h5>Career as a Librarian</h5>
                        <p>
                        Prior to taking these courses I had been employed as a Librarian in several different capacities. I have been a lifelong learner and involved with many technology 
                        implementations in library environments. While working in the library space I also gained experience in managing budgets, projects and personnel.
                        Most recently at Austin Public Library where I lead the development of the Electric Lady Bird streaming music service 
                        and initiated the development of a Sight and Sound team at the Library, these involved working with web technologies and even dipped in VR, 
                        with the use of 360° cameras to record musical perfromances, with an eye toward developing a collection of VR videos accessible through the internet.
                        These experiences inspired me to dive deeper into web development.
                        </p>
                        <h5>Software Development</h5>
                        <p>
                        During the early 2000s I worked as a web specialist, using Dreamweaver and Adobe Suite to create and maintain a library website. At the same time I explored the use of CMS tools:
                         Drupal, Joomla and SimpleMachines to deploy websites and bulletin boards for a small art publication that I had co-founded. Since that time I have had an eye on shifting my career into
                        web technology and software development. I have continually sought to gain a deeper understanding of any technology that I have used.
                        </p>
                        <p>
                        Through the bootcamp at UT I gained deeper knowledge of <strong> CSS, HTML5, JavaScript, and MySQL, while getting experience with Git, Node.js, MongoDB, Bootstrap, 
                        React and some exposure to Handlebars, Materialize, </strong> 
                        Since completing the Web Development bootcamp last year, I've continued to reinforce my knowledge of programming, through continued learning and practice.
                        I have also had the opportunity to complete a Java / React Native bootcamp to expand my programming horizons. I'm excited to add these technologies to my toolbelt 
                        and have found that learning these new tehcnologies have served to reinforce previous lessons in JavaScript and React.
                        </p>

                        <h5>Values and Interests</h5>
                        <p>
                        Througout my working life I have been guided by the principles of providing excellent customer service, for internal and external customers. 
                        I've excelled at learning new skills on the job and I learn most effectively with direct application. I value communication and collaboration as well as taking calculated risks for innovative solutions. 
                        I manage my stress by walking outdoors, journaling, meditating, and listening to music. 
                        In my spare time I enjoy, spending time with my girlfriend, playing video and board games, collecting music, creative writing and discovering fresh dining experiences. 
                        </p>

                        <h5>Seeking</h5>
                        <p>
                        I'm seeking interesting work developing technology projects in a collaborative environment. I'll be a strong contributor continuing to learn and develop new skills,
                         while adapting my problem solving and creative skills to meet challenges. I'll thrive in high pressure and long hour situations with the right team and leadership, 
                         but can be equally at home on slower paced detail oriented projects.
                        </p>


                </div>
        </div>
        {/*Addimages Here*/}
      
    </div>
  );
}

export default about;