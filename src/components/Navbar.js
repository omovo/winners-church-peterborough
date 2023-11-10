import React from 'react';
import download from "../logo.jpg";
import{Link} from "react-scroll";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
  <a className="navbar-brand" href="#"><img className="download" src={download} alt="#" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <FontAwesomeIcon  icon={faBars}  style={{color: "#FFFFFF"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <Link smooth={true} to= "home"className="nav-link" href="#">Home <span class="sr-only"></span></Link>
      </li>
      <li className="nav-item">
      <Link smooth={true} to= "homeprogramme"className="nav-link" href="#">Programmes</Link>
      </li>
      <li className="nav-item">
      <Link smooth={true} to= "about"className="nav-link" href="#">About Us</Link>

      </li><li className="nav-item">
      <Link smooth={true} to= "home"className="nav-link" href="#">Books</Link>

      </li><li className="nav-item">
        <Link smooth={true} to= "home"className="nav-link" href="#">Follow</Link>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="#">Give</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#">Testimonies</a>
      </li>

    </ul>
   
   <div>
   
   </div>
  </div>

  </div>
</nav>
    )
}

export default Navbar;
