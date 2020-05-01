import React from 'react';
import ServiceCard from '../ServicesCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import styles from './servicecardsection.module.css';
import { servicesWeb } from './services';
import { FaDatabase } from 'react-icons/fa';

const ServiceCardSection = () => {
  return (
    <div className={styles.top_div}>
      <h1>Areas Of Expertise</h1>

      <FontAwesomeIcon className={styles.icon_style_main} icon={FaDatabase} />
      <h3>
        We have the tech experience you need, Our expert team of advisors and consultants can answer
        your questions and design solutions
      </h3>
      <h2> Web Development</h2>
      {servicesWeb.map(service => (
        <ServiceCard service={service} />
      ))}
    </div>
  );
};

export default ServiceCardSection;
