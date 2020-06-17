import React, {useRef, useEffect} from 'react';
import {TweenMax, TimelineLite, Power3} from 'gsap'

import './App.scss';

// Assets
import img2 from './images/img2.png'
import img1 from './images/img1.png'
import arrow from './images/arrow.svg'


function App() {

  let app = useRef(null)
  let images = useRef(null)

  let tl  = new TimelineLite()

  useEffect(() => {
    // IMages Vars
    const img1 = images.firstElementChild
    const img2 = images.lastElementChild

    TweenMax.to(app, 0, {css: {visibility: 'visible'}})

    tl.from(img1, 1.2, {y: 1280, ease: Power3.easeOut})
      .from(img1.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
      .from(img2, 1.2, {y: 1280, ease: Power3.easeOut}, .4)
      .from(img2.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .4)

  })

  return (
    <div className="hero" ref={el => app = el}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner">
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Hello,</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">I'm Alex Leybourne</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Full Stack dev</div>
                </div>
              </h1>
              <p>I speak many languages including react, vue, ruby, html, scss and more.</p>
              <div className="btn-row">
                <button className="projects-button">
                  My Work
                  <div className="arrow-icon">
                    <img src={arrow} alt="arrow icon"/>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" ref={el => images = el}>
              <div className="hero-image img2">
                <img src={img2} alt="Alex Leybourne"/>
              </div>
              <div className="hero-image img1">
                <img src={img1} alt="Alex Leybourne"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
