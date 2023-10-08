import React from "react";
import { Link } from "react-router-dom";


import Home from '../images/poemcover.png';
import logo from '../images/logo.png';
import poem from '../images/poem.jpg';


const Harmattan = () => {
    return(
        <div class="harma" >
          <nav>
          <Link to='/'>
              <img  src={logo} class="angel" alt="logo"/>
            </Link>
          </nav>
          <div class="About">
            <img src={poem} class="poem" alt="poem"/>
          </div>
        </div>
    )
}


export default Harmattan;