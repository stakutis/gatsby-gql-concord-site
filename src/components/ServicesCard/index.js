import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServiceCard = props => {
  const { service } = props;
  console.log(service);

  return (
    <div>
      <h1>{service.title}</h1>
      <div>{service.icon()}</div>
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceCard;
