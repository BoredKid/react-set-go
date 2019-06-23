import React from 'react';
import { Link } from 'react-router-dom';
import { string, bool } from 'prop-types';

const BoredLink = ({ path, label, href, isLive }) => (
  <div className="boredLink">
    {isLive && (
      <div className="liveSpot">
        <div></div>
        <div></div>
        <div></div>
      </div>
    )}
    {path ? (
      <Link to={path}>{label}</Link>
    ) : (
      <a rel="noopener noreferrer" target="_blank" href={href}>
        {label}
      </a>
    )}
  </div>
);

BoredLink.propTypes = {
  path: string,
  label: string,
  href: string,
  isLive: bool
};

export default BoredLink;
