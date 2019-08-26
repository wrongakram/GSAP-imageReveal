import React, {useRef, useEffect} from 'react';
import './App.css';
import Mountain from './images/mountains.jpg'
import {TweenLite, Power3} from 'gsap';
import CSSRulePlugin from "gsap/CSSRulePlugin";



const App = () => {
  let image = useRef(null)
  let imageContainer = useRef(null)
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  useEffect(() => {
    TweenLite.from(imageReveal, 1, {width: "700px", ease: Power3.easeOut})
    TweenLite.from(image, 1, {scale: 1.3, delay: .3, ease: Power3.easeOut})
  })

  return (
    <div className="container">
      <div className="wrapper">
        <div ref={el => {imageContainer = el}} className="img-container">
          <img ref={el => {image = el} } src={Mountain} alt="idk" />
        </div>
     </div>
    </div>
  );
}

export default App;