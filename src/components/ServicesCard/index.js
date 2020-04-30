import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const fff = {
  icon: faCoffee
};

const ServiceCard = () => {
  return (
    <div>
      <FontAwesomeIcon icon={fff.icon} />;
    </div>
  );
};

export default ServiceCard;
