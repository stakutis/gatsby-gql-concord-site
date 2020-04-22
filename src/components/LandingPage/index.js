import React from 'react';

import image1 from '../../../static/uploads/undraw_collaborators_prrw.svg';
import image2 from '../../../static/uploads/wave.svg';
import image3 from '../../../static/uploads/undraw_design_notes_8dmv.svg';
import image5 from '../../../static/uploads/undraw_product_iteration_kjok.svg';

import styles from './home.module.css';

//emphazise built with react and high performance, maybe light house scrores

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={`${styles.landing_hero} ${styles.flex_row}`}>
        <div className={styles.value_prop}>
          <h1>Main Value Prop</h1>
          <p> Some Text that describes value prop</p>
        </div>
        <img className={styles.hero_illustration} src={image3} alt="" />
      </div>
      <div className={styles.wave_bottom}>
        <img src={image2} alt="" />
      </div>
      <hr className={styles.top_line} />
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
    </div>
  );
};

export default Home;
