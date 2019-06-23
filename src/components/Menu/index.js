import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import BoredLink from '../BoredLink';
import Stream from '../Stream';
import About from '../About';
import { getStreams } from '../../services/twitch';

const BigTitle = () => (
  <Link to="/" className="bigTitle">
    <h1>Bored Stream</h1>
  </Link>
);

const Menu = () => {
  const [isStreamLive, setIsStreamLive] = useState(false);

  useEffect(() => {
    getStreams().then((data) => setIsStreamLive(!!data.length));
  }, []);

  return (
    <Router>
      <div className="menu">
        <BigTitle />

        <BoredLink path="/" label="Stream" isLive={isStreamLive} />

        <BoredLink href="https://github.com/BoredKid" label="Repos" />

        <BoredLink path="/about/" label="About" />
      </div>
      <div className="content">
        <Route path="/" exact component={Stream} />
        <Route path="/about/" component={About} />
      </div>
    </Router>
  );
};

export default Menu;
