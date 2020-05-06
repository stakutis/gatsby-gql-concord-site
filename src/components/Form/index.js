import React from 'react';
import styles from './contactform.module.css';
import { FcInvite } from 'react-icons/fc';

const ContactForm = () => (
  <div className={styles.form_wrap}>
    <div className={styles.icon}>
      <FcInvite />
    </div>
    <form name="Contact Form" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="Contact Form" />
      <div className={styles.form_row}>
        <label>Your Name:</label>
        <input type="name" name="name" />
      </div>
      <div className={styles.form_row}>
        <label>Your Email:</label>
        <input type="email" name="email" />
      </div>
      <div className={styles.form_row}>
        <label>Subject:</label>
        <input name="subject" />
      </div>
      <div className={styles.form_row}>
        <label>Message:</label>
        <textarea name="message" />
      </div>
      <button className={styles.submit_button} type="submit">
        Send
      </button>
    </form>
  </div>
);

export default ContactForm;
