import React from 'react';
import ServiceCard from '../ServicesCard';

import styles from './servicecardsection.module.css';
import { servicesWeb } from './services';
import { FaReact } from 'react-icons/fa';

const ServiceCardSection = () => {
  return (
    <div className={styles.top_div}>
      <h1>Areas Of Expertise</h1>
      <FaReact className={styles.main_icon} />
      <h3>
        We have the tech experience you need, Our expert team of advisors and consultants can answer
        your questions and design solutions
      </h3>
      <h2> Web Development</h2>
      <div className={styles.card_rows}>
        {servicesWeb.map(service => (
          <ServiceCard service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCardSection;
