import React from 'react';
import image4 from '../../../static/profiles/Willis.png';
import styles from './profilecard.module.css';
import Shiitake from 'shiitake';
import { navigate } from 'gatsby';

const ProfileCard = props => {
  const truncClick = event => {
    console.log(event);
  };

  return (
    <div className={styles.card}>
      <div className="flex_row">
        <img className={styles.card_image} src={image4} alt="" />
        <div className={styles.card_title}>
          <h2>{props.profile.name}</h2>
          <h3>{props.profile.title}</h3>
        </div>
      </div>
      <hr />
      <Shiitake
        lines={4}
        throttleRate={200}
        className="my-element"
        overflowNode={<div onClick={() => navigate('/services')}>...read more</div>}
      >
        {props.profile.description}
      </Shiitake>
    </div>
  );
};

export default ProfileCard;
