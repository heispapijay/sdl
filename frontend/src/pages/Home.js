import React from "react";
import { Link } from "react-router-dom";


import logo from '../images/logo-3.png';
import SDL from '../images/SDL.mp4';
import cross  from '../images/cross.png';
import Social from '../images/deviantart logo.png';
import Social2 from '../images/foundation logo.png';
import Social3 from '../images/insta logo.png';
import Social4 from '../images/twitter logo.png';





const Home = () => {
    return(
      <div class ="hero">
  
       <video autoPlay loop muted plays-inline class="back-video" >
         <source src={SDL} type="video/mp4"/>
       </video>
  
          <nav>
            <Link to='/'>
          <img  src={logo} class="logo" alt="logo"/>
          </Link>
          <a href="https://hakaistudios.com"><img  src={cross} class="cross" alt="cross"/></a>
          </nav>
          <div class="hn">
            <div class="font-face-content">
               <h1> THE ART OF SDL</h1>
            </div>
          <ul>
              <li class="grow"><a class="font-face-link" href="/harmattan">Harmattan's Angel </a></li>
              <li class="grow"><a class="font-face-link" href="/collection">Collections</a></li>
              <li class="grow"><a class="font-face-link" href="/about">About & Contact</a></li>
            </ul>
          </div>
          <div class="loop">
          <ul>
            <li><a href=" https://twitter.com/mindofSDL"><img  src={Social4} class="Twitter" alt="twitter"/> </a></li>
            <li><a href=" https://www.instagram.com/mindofsdl/"><img  src={Social3} class="Instagram" alt="insta"/> </a></li>
            <li><a href=" https://foundation.app/@mindofSDL"><img  src={Social2} class="Foundation" alt="found"/> </a></li>
            <li><a href=" https://www.deviantart.com/sdltheartist"><img  src={Social} class="Deviant" alt="devi"/> </a></li>
          </ul>
          </div>
         </div>
      
    )
  }

  export default Home;
