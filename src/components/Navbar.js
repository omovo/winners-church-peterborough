import React from 'react';
import download from "../images.jpeg";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
  <a className="navbar-brand" href="#"><img className="download" src={download} alt="" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <FontAwesomeIcon  icon={faBars}  style={{color: "#FFFFFF"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Programmes</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Us</a>

      </li><li className="nav-item">
        <a className="nav-link" href="#">Books</a>

      </li><li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>

    </ul>
   
  </div>

  </div>
</nav>
    )
}

export default Navbar
