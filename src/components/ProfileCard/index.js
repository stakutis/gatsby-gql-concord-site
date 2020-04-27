import React from 'react';
import image4 from '../../../static/profiles/Willis.png';
import styles from './profilecard.module.css';

const ProfileCard = () => {
  return (
    <div className={styles.card_section}>
      <div className={styles.card}>
        <img src={image4} alt="" />
        <div className={styles.card_text}>
          <h2>Name:</h2>
          <h3>Title</h3>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
