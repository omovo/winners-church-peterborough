import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
        <div className="main-info">
        <Typed
        className= "typed-text"
                    strings={["WELCOME TO", "THE PRESENCE OF GOD", "WINNERS CHAPEL INTERNATIONAL PETERBOROUGH", "WELCOME HOME", "WINNERS CHAPEL INTERNATIONAL PETERBOROUGH"]}
                    typeSpeed={60}
                    backSpeed={50}
                    loop
                />
                
        </div>
        </div>
        

        
    
    )
}

export default Header
