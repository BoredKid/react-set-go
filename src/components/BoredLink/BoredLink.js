import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import './BoredLink.css';

const BoredLink = ({ path, label, href }) => (
  <div>
    {path ? (
      <Link className="BoredLink" to={path}>
        {label}
      </Link>
    ) : (
      <a className="BoredLink" href={href}>
        {label}
      </a>
    )}
  </div>
);

BoredLink.propTypes = {
  path: string,
  label: string,
  href: string
};

export default BoredLink;
