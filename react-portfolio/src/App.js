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
  let content = useRef(null)
  let tl  = new TimelineLite({delay: .8})

  useEffect(() => {
    // Images Vars
    const img1 = images.firstElementChild
    const img2 = images.lastElementChild

    // Content Vars
    const headlineFirst = content.children[0].children[0]
    const headlineSecond = headlineFirst.nextSibling
    const headlineThird = headlineSecond.nextSibling
    const contentP = content.children[1]
    const contentButton = content.children[2]

    // Removes flash
    TweenMax.to(app, 0, {css: {visibility: 'visible'}})

    // Images Animation
    tl.from(img1, 1.2, {y: 1280, ease: Power3.easeOut}, 'HeroText')
      .from(img1.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
      .from(img2, 1.2, {y: 1280, ease: Power3.easeOut}, .4)
      .from(img2.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .4)

    // Content Animation
    tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children], 1, {
      y: 44,
      ease: Power3.easeOut,
      delay: .8
    }, .15, 'HeroText')
    .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
    .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)

  }, [tl])

  return (
    <div className="hero" ref={el => app = el}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => content = el}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Hello,</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">I'm Alex Leybourne.</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">A Full Stack dev.</div>
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
