import React from 'react';
import arrow from './images/arrow.svg'
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
                  <div className="hero-content-line-inner">Hello</div>
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
                  Projects
                  <div className="arrow-icon">
                    <img src={arrow} alt="arrow icon"/>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
