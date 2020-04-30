import React from 'react';

import styles from './profilecardfull.module.css';

const ProfileCardFull = props => {
  return (
    <div className={styles.card_full}>
      <div className="flex_row">
        <img className={styles.card_image} src={props.profile.image} alt="" />
        <div className={styles.card_title}>
          <h2>{props.profile.name}</h2>
          <h3>{props.profile.title}</h3>
        </div>
      </div>
      <div className={styles.card_desc}> {props.profile.description} </div>
    </div>
  );
};

export default ProfileCardFull;
