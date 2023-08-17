import React from "react";
import author from "../images2.jpeg";


const AboutUs = () => {
    return (
        <div className="container py-5">
        <div className="row">
        <div className="col-lg-6 col-xm-12">
        <div className= "photo-wrap">
        <img className="profile-img" src={author} alt="author..." />
        </div>
        </div>
        <div className="col-lg-6 col-xm-12">
        <h1 className="about-heading"> ABOUT US</h1>
        
        <p className="page-file">
        Welcome to Winners Chapel International, Peterborough. We are an arm of the Living Faith Church Worldwide. Our vision, as delivered to the Presiding Bishop, Dr David Oyedepo, is to preach the Word of Faith, liberating men everywhere from every oppression of the devil.

 We are dedicated to accomplishing this task throughout the United Kingdom, and Europe at large.

Our church in London was officially inaugurated in 2002 to spread the Word of Faith and to bring the liberation mandate to the United Kingdom and Europe. We have experienced diverse testimonies as individuals and as a church ever since. 

We are glad you have come to this website because we know your life will never be the same again. Take time to browse through the site and we know it would be a blessing to you. Also, join any of our weekly & Sunday services and as you come to visit us, God will meet you at every point of your need. 

        </p>

         </div>
        </div>    
        </div>
    )
}

export default AboutUs
