import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const FollowUs = () => {
    return (
      <div id="followss"class="social-container">
      <h3>Social Media</h3>
      <a href="#"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="#"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="#" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="#"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

</div> 
       
    )
}

export default FollowUs
