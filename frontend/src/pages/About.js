import React from 'react';
import { Link } from "react-router-dom";


import pic from '../images/pic.jpg';
import logo from '../images/logo-3.png';


const About = () => {
  return (
    <div class="collect">
             <nav>
            <Link to='/'>
              <img  src={logo}  class="ulti"  alt="logo"/>
            </Link>
             </nav>
               <div class="sdl-text">
              <h1>ABOUT</h1><br/>
              <p>
               SDL is a dynamic visual artist currently based in the city of Ilorin, Nigeria.
               He's known for his captivating artworks with thought-provoking concepts and a diverse range of themes, each piece telling a unique story.
               With his keen eye for detail and his passion for creative expression, SDL's work captures human emotions fused with the mysteries of existence.
               His portfolio reflects his evolution as an artist, showcasing his dedication to his craft and the raw energy he puts into each piece.
               His artworks have garnered attention both locally and internationally, capturing the attention of art enthusiasts and the world at large.<br/><br/>

               
               His work has been featured at
               The Miami ART Basel by AW, Miami, USA, back in November of 2021, 
               NFT Lagos Gallery by AW, Lagos, Nigeria in December 2021,
               NFT Galeria Lisboa at the Convento Do Beato, Lisbon, Portugal in October of 2022,
               NFT NYC in Manhattan, New York in April of 2023.
               His latest exhibition was at The Artist Commune in Lagos, Nigeria in the May of 2023.<br/>

               [Words by Ishang Mercy Icharka]
                <h5>CONTACT ; <br/>
                <br></br>
                EMAIL : sdlcommute@gmail.com
               </h5>
               </p>
               </div>
               <img src={pic} class="thee"  alt="pic"/>
          </div>
  
  )
}

export default About;

