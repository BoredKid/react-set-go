import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BoredLink from './components/BoredLink/BoredLink';

function Stream() {
  return <h2>Stream</h2>;
}

function Vod() {
  return <h2>VOD</h2>;
}

function About() {
  return <h2>About</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <BoredLink path="/" label="Stream"/>
            </li>
            <li>
              <BoredLink path="/about/" label="About"/>
            </li>
            <li>
              <BoredLink href="https://github.com/BoredKid/BoredStream" label="Repo"/>
            </li>
            <li>
              <BoredLink path="/vod/" label="VOD"/>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Stream} />
        <Route path="/vod/" component={Vod} />
        <Route path="/about/" component={About} />
      </div>
    </Router>
  );
}
function App() {
  return (
    <div>
      <h1>Welcome to the Bored Stream Website ;)</h1>
      <AppRouter/>
    </div>

  );
}

export default App;
