import React from 'react';
import styles from './servicecard.module.css';

const ServiceCard = props => {
  const { service } = props;

  return (
    <div className={styles.card}>
      <h1>{service.title}</h1>
      <div className={styles.icon}>{service.icon()}</div>
      <ul className={styles.service_list}>
        {service.description.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
