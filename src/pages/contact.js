import React from 'react';
import Layout from '../components/Layout';
import ContactSection from '../components/ContactSection';
import styles from './styles/contact.module.css';

const Contact = () => {
  return (
    <Layout title="Contact Page">
      <div className={styles.contact_section}>
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Contact;
