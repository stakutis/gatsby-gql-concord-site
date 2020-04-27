import React from 'react';
import ProfileCard from '../ProfileCard';
import styles from './profilecardsection.module.css';
import { profiles } from './profileinfo.js';

console.log(profiles);
const ProfileCardSection = () => {
  return (
    <div className={styles.card_section}>
      <ProfileCard />
    </div>
  );
};

export default ProfileCard;
