// import "../../assets/css/hstyle.css"
import React from 'react';
import {Link} from "react-router-dom"
import resume from '../../assets/images/DaleRKittendorf2020Resume.pdf';

function Navbar() {
    return (
        <nav className=''>
        <Link to={"/portfolio/about"} className="">About</Link>
        <Link to={"/portfolio/contact"} className="">Contact</Link>
        <Link to={"/portfolio/portfolio"} className="">Portfolio</Link>
        <a href={resume} target="_blank" rel='noopener noreferrer' className=""> Resume</a>
        <a href="https://github.com/drkittendorf" target="_blank" className='' rel='noopener noreferrer'><i className="fab fa-github fa-3x icon"></i></a>
        <a href="https://www.linkedin.com/in/dalerkittendorf" target="_blank" className='' rel='noopener noreferrer'><i className="fab fa-linkedin fa-3x icon"></i></a>
      </nav>
    );
  }

export default Navbar;