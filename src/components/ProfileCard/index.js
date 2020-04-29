import React from 'react';
import image4 from '../../../static/profiles/Willis.png';
import styles from './profilecard.module.css';
import Shiitake from 'shiitake';

const ProfileCard = props => {
  const truncClick = event => {
    console.log(event);
  };

  return (
    <div className={styles.card}>
      <div className={styles.wrap}>
        <div className="flex_row">
          <img src={image4} alt="" />
          <div className={styles.card_title}>
            <h2>{props.profile.name}</h2>
            <h3>{props.profile.title}</h3>
          </div>
        </div>
        <Shiitake
          onClick={event => console.log('ggg')}
          lines={4}
          throttleRate={200}
          className="my-element"
          overflowNode={<div onClick={() => console.log('ggg')}>...read more</div>}
        >
          {props.profile.description}
        </Shiitake>
      </div>
    </div>
  );
};

export default ProfileCard;
