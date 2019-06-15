import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

const BoredLink = ({ path, label, href }) => (path ? <Link to={path}>{label}</Link> : <a href={href}>{label}</a>);

BoredLink.propTypes = {
  path: string,
  label: string,
  href: string
};

export default BoredLink;
