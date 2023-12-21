// components/Portfolio.tsx
import React from 'react';
import ProfilePicture from './ProfilePicture';
import Summary from './Summary';
import SkillsChart from './SkillsChart';
import Footer from './Footer';

const Portfolio: React.FC = () => {
  const headingStyle = {
    fontSize: '30px', // Adjust the font size as needed
    textAlign: 'center',
  };

  return (
    <div>
      <h1 style={{fontSize: '30px',textAlign: 'center', marginBottom:'20px'}}>Monica Anthony</h1>
      <ProfilePicture src="/ProfilePic.jpg" alt="Profile" />
      <Summary text="I am a seasoned developer 9 years of experience. I have worked across Retail and IT Infrastructure and Networking. I have diverse experience in the IT disciplines of Data Visualization , Full stack development , Natural Language Processing and AI, Business Intelligence , Datawarehousing and Systems administration. I’m passionate about Big Data , Data Visualization , AI and ML . I have experience being a technical lead and mentoring. I prioritize code cleanliness. I’m hard-working, disciplined and a quick learner. Project delivery times are very important to me. I also am great at working with people and command respect of my peers. I am always looking to improve and expand my skills. Below is my technical experience visualized with years of experience." />
      <SkillsChart/>
      <Footer/>
    </div>
  );
};

export default Portfolio;
