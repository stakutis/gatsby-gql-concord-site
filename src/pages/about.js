import React, { useContext } from 'react';
import Layout from '../components/Layout';
import ProfileCard from '../components/ProfileCard';

const About = () => {
  return (
    <Layout title="About page">
      <div className="main_pages_top_div">
        <ProfileCard />
      </div>
    </Layout>
  );
};

export default About;
