import React from 'react';
import image4 from '../../../static/profiles/Willis.png';
import styles from './profilecard.module.css';

const ProfileCard = props => {
  return (
    <div className={styles.card}>
      <div className="flex_row">
        <img src={image4} alt="" />
        <div className={styles.card_title}>
          <h2>{props.profile.name}</h2>
          <h3>{props.profile.title}</h3>
        </div>
      </div>
      <p className={styles.card_desc}>{props.profile.description}</p>
    </div>
  );
};

export default ProfileCard;
