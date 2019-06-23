import React from 'react';
import { string } from 'prop-types';
import { ABOUT } from '../../utils/constants';

const AboutItem = ({ label, content }) => (
  <div className="aboutItem">
    <p className="aboutItemLabel">{label}:</p>
    <p className="aboutItemContent">{content}</p>
  </div>
);

AboutItem.propTypes = {
  label: string,
  content: string
};

const About = () => (
  <div className="about">
    <h2>Bored Kid et le Bored Stream</h2>
    <div className="aboutList">
      {ABOUT.map((item) => (
        <AboutItem {...item} key={item.label} />
      ))}
    </div>
  </div>
);

export default About;
