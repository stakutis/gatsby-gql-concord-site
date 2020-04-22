import React from 'react';
import image4 from '../../../static/uploads/Willis.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const ProfileCard = () => {
  return (
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
  );
};

export default ProfileCard;
