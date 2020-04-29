import React from 'react';
import ProfileCard from '../ProfileCard';
import styles from './profilecardsection.module.css';
import { profiles } from './profileinfo.js';

//add chris' profile card

const ProfileCardSection = () => {
  return (
    <div className={styles.card_section}>
      {profiles.map(profile => (
        <div className={styles.card}>
          <ProfileCard key={profile.id} profile={profile} />
        </div>
      ))}
    </div>
  );
};

export default ProfileCardSection;
