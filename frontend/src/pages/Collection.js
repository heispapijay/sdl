import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";



import Item from "./Item";
import logo from '../images/logo-3.png';
import './collection.css';

import image1 from '../images/Abaddon.jpg';
import image2 from '../images/AURORA.jpg';
import image3 from '../images/Amber.jpg';
import image4 from '../images/Blindspot.jpg';
import image5 from '../images/Chrysalis II.jpg';
import image6 from '../images/Chrysalis X.jpg';
import image7 from '../images/Chrysanthemum.jpg';
import image8 from '../images/EDVARD MUNCH.jpg';
import image9 from '../images/Ex Animo.jpg';
import image10 from '../images/Ffallen Fantasy.jpg';
import image11 from '../images/Gemini.jpg';
import image12 from '../images/HOPE.jpg';
import image13 from '../images/HUNDR3D.jpg';
import image14 from '../images/Hangman.jpg';
import image15 from '../images/III.jpg';
import image16 from '../images/In This Light,.jpg';
import image17 from '../images/John Was A Farmer.jpg';
import image18 from '../images/Liber - Fade.jpg';
import image19 from '../images/Liber - Pierce.jpg';
import image20 from '../images/Liber - Reach.jpg';
import image21 from '../images/climax369.jpg';
import image22 from '../images/Lake Atramento.jpg';

import image23 from '../images/Lucy Lullaby.jpg';
import image24 from '../images/Lucy Redemption.jpg';
import image25 from '../images/MOONCHILD.jpg';
import image26 from '../images/Metamorphosis.jpg';
import image27 from '../images/Midnight Moon.jpg';
import image28 from '../images/PLASTIC.jpg';
import image29 from '../images/Putrescence.jpg';
import image30 from '../images/ROOTS.jpg';
import image31 from '../images/Unrequited Love (With Generis).jpg';
import image32 from '../images/Unrequited Love II (With Generis).jpg';
import image33 from '../images/Untitled I.jpg';
import image34 from '../images/Vanya Vitriol.jpg';
import image35 from '../images/Vas Inane.jpg';
import image36 from '../images/Vignette.jpg';
import image37 from '../images/Why Are You Green.jpg';
import image38 from '../images/nostalgia-time.jpg';


import image39 from '../images/indigo 0.jpg';
import image40 from '../images/indigo i.jpg';
import image41 from '../images/indigo ii.jpg';
import image42 from '../images/indigo iii.jpg';


import image43 from '../images/numinous transits RE.jpg';
import image44 from '../images/000 on this numinous transit r.jpg';
import image45 from '../images/1 Fallen Sacrifices.jpg';
import image46 from '../images/2 CITADEL.jpg';
import image47 from '../images/3 SEVER I.jpg';
import image48 from '../images/4 SEVER II.jpg';
import image49 from '../images/5 Our Father.jpg';
import image50 from '../images/6 Product Of My Environment.jpg';
import image51 from '../images/7 LOVE.jpg';
import image52 from '../images/8 Confessions.jpg';
import image53 from '../images/9 i am here for us.jpg';
import image54 from '../images/10 Parasite.jpg';
import image55 from '../images/11 Honest Giant.jpg';
import image56 from '../images/12 Mother.jpg';
import image57 from '../images/13 Mustapha_s Theory.jpg';



import image58 from '../images/Anima Vestra.jpg';
import image59 from '../images/CHRYSALIS IV.jpg';
import image60 from '../images/Do not Hurt The Bird.jpg';
import image61 from '../images/ETORHE.jpg';
import image62 from '../images/forever i am never here.jpg';
import image63 from '../images/John Is Not A Killer.jpg';
import image64 from '../images/Kill Sina.jpg';
import image65 from '../images/L enfance Nue.jpg';
import image66 from '../images/Malignant.jpg';
import image67 from '../images/Midnight Eye (with Britney Walker).jpg';
import image68 from '../images/Portrait Of A Lady On Fire.jpg';
import image69 from '../images/Some Things Are not Meant To Be.jpg';
import image70 from '../images/SPIRITS777.jpg';
import image71 from '../images/The Hermit Dilemma.jpg';
import image72 from '../images/The Powers That Be.jpg';
import image73 from '../images/Time To Save The World.jpg';

import image74 from '../images/Heaven Tears Are Not Rain.jpg';
import image75 from '../images/Wish You Were Here.jpg';


import image76 from '../images/Vega I, texts.jpg';
import image77 from '../images/Vega I.jpg';
import image78 from '../images/Vega II, texts.jpg';
import image79 from '../images/Vega II.jpg';
import image80 from '../images/Vega III, texts.jpg';
import image81 from '../images/Vega III.jpg';
import image82 from '../images/Vega IV, texts.jpg';
import image83 from '../images/Vega IV.jpg';


import image84 from '../images/14 Parable Of The Saint.jpg';
import image85 from '../images/14 Saint  storyline.jpg';
import image86 from '../images/15 The Final Sacrifice, Nobis.jpg';
import image87 from '../images/16 in the end of this numinous transit r.jpg';




const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];



const Collection = () => {

  const [showModal, setShowModal] = useState(false);
  const [imageSelected, setImageSelected] = useState(null);

  const openModal = (imageURL) => {
    setImageSelected(imageURL);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setImageSelected(null);
  };



  
  return (
    <div class="container">
      <nav>
        <Link to='/'>
          <img src={logo} class="look" alt="logo" />
        </Link>
      </nav>
      <h2> 2021</h2>
      <div className="item">
        <Carousel breakPoints={breakPoints}>
          <Item onClick={() => openModal(image1)} ><img src={image1} class="image1" alt="abbadon" /></Item>
          <Item onClick={() => openModal(image2)}><img src={image2} class="image2" alt="aurora" /></Item>
          <Item onClick={() => openModal(image3)}><img src={image3} class="image3" alt="amber" /></Item>
          <Item onClick={() => openModal(image4)}><img src={image4} class="image4" alt="blindspot" /></Item>
          <Item onClick={() => openModal(image5)}><img src={image5} class="image5" alt="chysalis II" /></Item>
          <Item onClick={() => openModal(image6)}><img src={image6} class="image6" alt="chysalis X" /></Item>
          <Item onClick={() => openModal(image7)}><img src={image7} class="image7" alt="Chrysantheum" /></Item>
          <Item onClick={() => openModal(image8)}><img src={image8} class="image8" alt="EDVARD MUNCH" /></Item>
          <Item onClick={() => openModal(image9)}><img src={image9} class="image9" alt="Ex Animo" /></Item>
          <Item onClick={() => openModal(image10)}><img src={image10} class="image10" alt="fallen fantasy" /></Item>
          <Item onClick={() => openModal(image11)}><img src={image11} class="image11" alt="Gemini" /></Item>
          <Item onClick={() => openModal(image12)}><img src={image12} class="image12" alt="HOPE" /></Item>
          <Item onClick={() => openModal(image13)}><img src={image13} class="image13" alt="HUNDR3D" /></Item>
          <Item onClick={() => openModal(image14)}><img src={image14} class="image14" alt="Hangman" /></Item>
          <Item onClick={() => openModal(image15)}><img src={image15} class="image15" alt="III" /></Item>
          <Item onClick={() => openModal(image16)}><img src={image16} class="image16" alt="In This Light" /></Item>
          <Item onClick={() => openModal(image17)}><img src={image17} class="image17" alt="John was a farmer" /></Item>
          <Item onClick={() => openModal(image18)}><img src={image18} class="image18" alt="Liber -Fade" /></Item>
          <Item onClick={() => openModal(image19)}><img src={image19} class="image19" alt="Liber -Pierce" /></Item>
          <Item onClick={() => openModal(image20)}><img src={image20} class="image20" alt="Liber -Reach" /></Item>
          <Item onClick={() => openModal(image21)}><img src={image21} class="image21" alt="Climax390" /></Item>
          <Item onClick={() => openModal(image22)}><img src={image22} class="image22" alt="Lake Atramento" /></Item>
          <Item onClick={() => openModal(image23)}><img src={image23} class="image22" alt="Lucy Lullaby" /></Item>
          <Item onClick={() => openModal(image24)}><img src={image24} class="image22" alt="Lucy Redemption" /></Item>
          <Item onClick={() => openModal(image25)}><img src={image25} class="image22" alt="MOONCHILD" /></Item>
          <Item onClick={() => openModal(image26)}><img src={image26} class="image22" alt="Metamorphosis" /></Item>
          <Item onClick={() => openModal(image27)}><img src={image27} class="image22" alt="Midnight Moon" /></Item>
          <Item onClick={() => openModal(image28)}><img src={image28} class="image22" alt="PLASTIC" /></Item>
          <Item onClick={() => openModal(image29)}><img src={image29} class="image22" alt="Putrescence" /></Item>
          <Item onClick={() => openModal(image30)}><img src={image30} class="image22" alt="ROOTS" /></Item>
          <Item onClick={() => openModal(image31)}><img src={image31} class="image22" alt="Unrequited love" /></Item>
          <Item onClick={() => openModal(image32)}><img src={image32} class="image22" alt="Unrequited love II" /></Item>
          <Item onClick={() => openModal(image33)}><img src={image33} class="image22" alt="Untitled I" /></Item>
          <Item onClick={() => openModal(image34)}><img src={image34} class="image22" alt="Vanya Vitrol" /></Item>
          <Item onClick={() => openModal(image35)}><img src={image35} class="image22" alt="Vas Inane" /></Item>
          <Item onClick={() => openModal(image36)}><img src={image36} class="image22" alt="Vignette" /></Item>
          <Item onClick={() => openModal(image37)}><img src={image37} class="image22" alt="Why are you green" /></Item>
          <Item onClick={() => openModal(image38)}><img src={image38} class="image22" alt="nosalgia-time" /></Item>
        </Carousel>
      </div>
      <h2>INDIGO [March 2022]</h2>
      <div className="item">
        <Carousel breakPoints={breakPoints}>
          <Item onClick={() => openModal(image39)}><img src={image39} class="image1" alt="abbadon" /></Item>
          <Item onClick={() => openModal(image40)}><img src={image40} class="image2" alt="aurora" /></Item>
          <Item onClick={() => openModal(image41)}><img src={image41} class="image3" alt="amber" /></Item>
          <Item onClick={() => openModal(image42)}><img src={image42} class="image4" alt="blindspot" /></Item>
        </Carousel>
      </div>
      <h2>NUMINOUS TRANSITS [May 2022 - Sept. 2022]</h2>
      <div className="item">
        <Carousel breakPoints={breakPoints}>
          <Item onClick={() => openModal(image43)}><img src={image43} class="image1" alt="abbadon" /></Item>
          <Item onClick={() => openModal(image44)}><img src={image44} class="image2" alt="aurora" /></Item>
          <Item onClick={() => openModal(image45)}><img src={image45} class="image3" alt="amber" /></Item>
          <Item onClick={() => openModal(image46)}><img src={image46} class="image4" alt="blindspot" /></Item>
          <Item onClick={() => openModal(image47)}><img src={image47} class="image5" alt="chysalis II" /></Item>
          <Item onClick={() => openModal(image48)}><img src={image48} class="image6" alt="chysalis X" /></Item>
          <Item onClick={() => openModal(image49)}><img src={image49} class="image7" alt="Chrysantheum" /></Item>
          <Item onClick={() => openModal(image50)}><img src={image50} class="image8" alt="EDVARD MUNCH" /></Item>
          <Item onClick={() => openModal(image51)}><img src={image51} class="image9" alt="Ex Animo" /></Item>
          <Item onClick={() => openModal(image52)}><img src={image52} class="image10" alt="fallen fantasy" /></Item>
          <Item onClick={() => openModal(image53)}><img src={image53} class="image11" alt="Gemini" /></Item>
          <Item onClick={() => openModal(image54)}><img src={image54} class="image12" alt="HOPE" /></Item>
          <Item onClick={() => openModal(image55)}><img src={image55} class="image13" alt="HUNDR3D" /></Item>
          <Item onClick={() => openModal(image56)}><img src={image56} class="image14" alt="Hangman" /></Item>
          <Item onClick={() => openModal(image57)}><img src={image57} class="image15" alt="III" /></Item>
          <Item onClick={() => openModal(image84)}><img src={image84} class="image15" alt="III" /></Item>
          <Item onClick={() => openModal(image85)}><img src={image85} class="image15" alt="III" /></Item>
          <Item onClick={() => openModal(image86)}><img src={image86} class="image15" alt="III" /></Item>
          <Item onClick={() => openModal(image87)}><img src={image87} class="image15" alt="III" /></Item>
        </Carousel>
      </div>
      <h2>2022</h2>
      <div className="item">
        <Carousel breakPoints={breakPoints}>
          <Item onClick={() => openModal(image58)}><img src={image58} class="image1" alt="abbadon" /></Item>
          <Item onClick={() => openModal(image59)}><img src={image59} class="image2" alt="aurora" /></Item>
          <Item onClick={() => openModal(image60)}><img src={image60} class="image3" alt="amber" /></Item>
          <Item onClick={() => openModal(image61)}><img src={image61} class="image4" alt="blindspot" /></Item>
          <Item onClick={() => openModal(image62)}><img src={image62} class="image5" alt="chysalis II" /></Item>
          <Item onClick={() => openModal(image63)}><img src={image63} class="image6" alt="chysalis X" /></Item>
          <Item onClick={() => openModal(image64)}><img src={image64} class="image7" alt="Chrysantheum" /></Item>
          <Item onClick={() => openModal(image65)}><img src={image65} class="image8" alt="EDVARD MUNCH" /></Item>
          <Item onClick={() => openModal(image66)}><img src={image66} class="image9" alt="Ex Animo" /></Item>
          <Item onClick={() => openModal(image67)}><img src={image67} class="image10" alt="fallen fantasy" /></Item>
          <Item onClick={() => openModal(image68)}><img src={image68} class="image11" alt="Gemini" /></Item>
          <Item onClick={() => openModal(image69)}><img src={image69} class="image12" alt="HOPE" /></Item>
          <Item onClick={() => openModal(image70)}><img src={image70} class="image13" alt="HUNDR3D" /></Item>
          <Item onClick={() => openModal(image71)}><img src={image71} class="image14" alt="Hangman" /></Item>
          <Item onClick={() => openModal(image72)}><img src={image72} class="image15" alt="III" /></Item>
          <Item onClick={() => openModal(image73)}><img src={image73} class="image15" alt="III" /></Item>
        </Carousel>
      </div>
      <h2>2023</h2>
      <div className="item">
        <Carousel breakPoints={breakPoints}>
          <Item onClick={() => openModal(image74)}><img src={image74} class="image1" alt="abbadon" /></Item>
          <Item onClick={() => openModal(image75)}><img src={image75} class="image2" alt="aurora" /></Item>
        </Carousel>
      </div>
      <h2>VEGA [Mar. 2023 - Apr. 2023]</h2>
      <div className="item">
        <Carousel breakPoints={breakPoints}>
          <Item onClick={() => openModal(image76)}><img src={image76} class="image1" alt="abbadon" /></Item>
          <Item onClick={() => openModal(image77)}><img src={image77} class="image2" alt="aurora" /></Item>
          <Item onClick={() => openModal(image78)}><img src={image78} class="image2" alt="aurora" /></Item>
          <Item onClick={() => openModal(image79)}><img src={image79} class="image2" alt="aurora" /></Item>
          <Item onClick={() => openModal(image80)}><img src={image80} class="image2" alt="aurora" /></Item>
          <Item onClick={() => openModal(image81)}><img src={image81} class="image2" alt="aurora" /></Item>
          <Item onClick={() => openModal(image82)}><img src={image82} class="image2" alt="aurora" /></Item>
          <Item onClick={() => openModal(image83)}><img src={image83} class="image2" alt="aurora" /></Item>
        </Carousel>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            {imageSelected && <img src={imageSelected} alt="Preview" />}
          </div>
          <p></p>
        </div>
      )}
    </div>
  );
}



export default Collection;
