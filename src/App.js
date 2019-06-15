import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import BoredLink from './components/BoredLink/BoredLink';

const Stream = () => {
  return <h2>Stream</h2>;
};

const Vod = () => {
  return <h2>VOD</h2>;
};

const About = () => {
  return <h2>About</h2>;
};

const AppRouter = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <BoredLink path="/" label="Stream" />
            </li>
            <li>
              <BoredLink path="/vod/" label="VOD" />
            </li>
            <li>
              <BoredLink href="https://github.com/BoredKid/BoredStream" label="Repo" />
            </li>
            <li>
              <BoredLink path="/about/" label="About" />
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Stream} />
        <Route path="/vod/" component={Vod} />
        <Route path="/about/" component={About} />
      </div>
    </Router>
  );
};

const BigTitle = () => <h1>Bored Stream</h1>;

const App = () => {
  return (
    <div>
      <BigTitle />
      <AppRouter />
    </div>
  );
};

export default App;
