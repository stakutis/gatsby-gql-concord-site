import React from 'react';
import './home2.css';
import image1 from '../../../static/uploads/Man Reading a Book Illustration.jpg';
import image2 from '../../../static/uploads/wave.svg';
import image3 from '../../../static/uploads/undraw_indoor_bike_pwa4.svg';
import image4 from '../../../static/uploads/Willis.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Home2 = () => {
  return (
    <div className="main">
      <div className="landing-hero flex-row">
        <div className="value-prop">
          <h1>Main Value Prop</h1>
          <p> Some Text that describes value prop</p>
        </div>
        <div className="illustration">
          <img src={image3} alt="" />
        </div>
      </div>
      <div className="wave-bottom">
        <img src={image2} alt="" />
      </div>
      <div className="trust-bar">
        <h1> Used by over 7000+ developers</h1>
        <hr />
      </div>
      <div className="feature1 flex-row">
        <div className="feature1-text">
          <h2>Benefit Feature of product</h2>
          <p>Supporting text of value prop</p>
        </div>
        <div className="feature1-img">
          <img src={image1} alt="" />
        </div>
      </div>
      <div className="feature2 flex-row">
        <div className="feature2-img">
          <img src={image1} alt="" />
        </div>
        <div className="feature2-text">
          <h2>Benefit Feature of product</h2>
          <p>Supporting text of value prop</p>
        </div>
      </div>
      <div className="card-section flex-row">
        <div className="card">
          <img src={image4} alt="" />
          <h1>Name:</h1>
          <h3>Title</h3>
          <p>Description</p>
          <FontAwesomeIcon icon={faCoffee} />
        </div>
        <div className="card2"></div>
        <div className="card"></div>
      </div>
      <div className="cta2"></div>
    </div>
  );
};

export default Home2;
