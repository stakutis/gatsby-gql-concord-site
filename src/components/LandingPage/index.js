import React from 'react';
import { navigate } from 'gatsby';

//illustrations
import image1 from '../../../static/uploads/coding_.svg';
import image2 from '../../../static/uploads/wave.svg';
import image3 from '../../../static/uploads/undraw_design_notes_8dmv.svg';
import image5 from '../../../static/uploads/code_development_.svg';

//pics
import pic1 from '../../../static/uploads/cloud.jpg';
import pic2 from '../../../static/uploads/database.jpg';
import pic3 from '../../../static/uploads/healthcare.jpg';

import styles from './home.module.css';

//emphazise built with react and high performance, maybe light house scrores

const Home = () => {
  const toContactPage = () => {
    navigate('/contact');
  };

  return (
    <div className={styles.main}>
      <div className={`${styles.landing_hero} ${styles.flex_row}`}>
        <div className={styles.value_prop}>
          <h1>World Class Tech Experts Helping You Make Your Idea a Reality</h1>
        </div>
        <img className={styles.hero_illustration} src={image3} alt="" />
      </div>
      <div className={styles.wave_bottom_hero}>
        <img src={image2} alt="" />
      </div>
      <h1 className={styles.site_title}> Concord Software and Executive Consulting</h1>
      <hr className={styles.top_line} />
      /* Animate in next 2 sections */
      <div className={`${styles.feature1} ${styles.flex_row}`}>
        <div className={styles.feature1_text}>
          <h2>Benefit Feature of product</h2>
          <p>Supporting text of value prop</p>
        </div>
        <img className={styles.feature1_img} src={image1} alt="" />
      </div>
      <div className={`${styles.feature1} ${styles.flex_row}`}>
        <div className={styles.feature1_text}>
          <h2>Benefit Feature of product</h2>
          <p>Supporting text of value prop</p>
        </div>
        <img className={styles.feature1_img} src={image5} alt="" />
      </div>
      <div className={styles.bottom_cta_section}>
        <div className={styles.bottom_cta}>
          <h3>Get in touch to see how we can help you on your next project</h3>
          <button onClick={toContactPage}>Get Started Now</button>
        </div>
        <div className={`${styles.pic_section} ${styles.flex_row}`}>
          <img className={styles.pic} src={pic1} alt="" />
          <img className={styles.pic} src={pic2} alt="" />
          <img className={styles.pic} src={pic3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
