import React from 'react';
import arrow from './images/arrow.svg'
import imgPool from './images/pool.gif'
import imgDriver from './images/driver.gif'
import './App.scss';

function App() {
  return (
    <div className="App">
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
            <div className="hero-images-inner">
              <div className="hero-image pool">
                <img src={imgPool} alt="pool"/>
              </div>
              <div className="hero-image driver">
                <img src={imgDriver} alt="driver"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
