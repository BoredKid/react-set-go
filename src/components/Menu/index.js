import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import BoredLink from '../BoredLink';
import Stream from '../Stream';
import About from '../About';

const Menu = () => {
  return (
    <Router>
      <div className="menu">
        <BoredLink path="/" label="Stream" />

        <BoredLink href="https://github.com/BoredKid/BoredStream" label="Repo" />

        <BoredLink path="/about/" label="About" />
      </div>

      <Route path="/" exact component={Stream} />
      <Route path="/about/" component={About} />
    </Router>
  );
};

export default Menu;
