import React from 'react';
import ContactForm from '../Form';
import styles from './contactsection.module.css';
import image2 from '../../../static/uploads/wave2.svg';

const ContactSection = () => {
  return (
    <div className={styles.top_div}>
      <div className={styles.page_column}>
        <h2 className={styles.cta}>
          Get in touch to see how we can help you with your next project
        </h2>
        <h3> Free Consultations</h3>
        <ContactForm />
        <img src={image2} alt="" />
        <div className={styles.background}> </div>
      </div>
    </div>
  );
};

export default ContactSection;
