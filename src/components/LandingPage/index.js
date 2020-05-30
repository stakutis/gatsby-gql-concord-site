import React from 'react';
import { navigate } from 'gatsby';
import SocialBar from '../SocialBar';

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

  const toAboutPage = () => {
    navigate('/about');
  };

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.landing_hero}>
          <h1 className={styles.value_prop}>Concord Software and Executive Consulting</h1>

          <img className={styles.hero_illustration} src={image3} alt="" />
        </div>
        <div className={styles.wave_bottom_hero}>
          <img src={image2} alt="" />
        </div>

        <hr className={styles.top_line} />

        <div className={styles.feature1}>
          <div className={styles.feature1_text}>
            <h2>Industry Leading Tech Experts</h2>
            <p>
              We are a consortium of accomplished business executives, software architects,
              technical leaders, analysts, health & life science professionals, educators,
              investors, and other innovators who share the goal to bring modern and sensible
              engineering to solve life-impacting problems.
            </p>
            <button className={styles.find_out_more_button} onClick={toAboutPage}>
              Find Out More
            </button>
          </div>
          <img className={styles.feature1_img} src={image1} alt="" />
        </div>
        <div className={styles.feature2}>
          <img className={styles.feature2_img} src={image5} alt="" />
          <div className={styles.feature2_text}>
            <h2>Your Business is Too Important to Get Left Behind</h2>
            <p>
              Software, engineering, and business advances are occurring at an accelerated pace and
              no single architect or leader can be “best in all new advancements”. A consortium of
              an elite group of industry veterans, whose focus is to discover, learn, build, and
              assist numerous companies through their knowledge — to improve the world.
            </p>
          </div>
        </div>
        <div className={styles.bottom_cta_section}>
          <div className={styles.bottom_cta_text}>
            <h3>Get in touch to see how we can help you on your next project</h3>
            <button className={styles.get_started_button} onClick={toContactPage}>
              Get Started Now
            </button>
          </div>
          <div className={styles.pic_section}>
            <img className={styles.pic} src={pic1} alt="" />
            <img className={styles.pic} src={pic2} alt="" />
            <img className={styles.pic} src={pic3} alt="" />
          </div>
          <div className={styles.social_bar}>
            <h3 className={styles.social_title}> Or Connect With Us on Social Just to Chat</h3>
            <SocialBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
