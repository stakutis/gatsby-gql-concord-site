import React, { useContext } from 'react';
import Layout from '../components/Layout';
import ProfileCardSection from '../components/ProfileCardSection';

const About = () => {
  return (
    <Layout title="About page">
      <div className="main_pages_top_div">
        <ProfileCardSection />
      </div>
    </Layout>
  );
};

export default About;
