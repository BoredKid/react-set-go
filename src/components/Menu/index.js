import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

const BigTitle = () => (
  <Link to="/" className="bigTitle">
    <h1>Big title</h1>
  </Link>
);

const Menu = () => {

  return (
    <Router>
      <div className="menu">
        <BigTitle />

        <Link to='/' className="link">Home</Link>
        <Link to='/secondary' className="link">A secondary view</Link>

      </div>
      <div className="content">
        <Route path="/" exact component={()=><h1>Welcome to the main view</h1>} />
        <Route path="/secondary/" component={()=><h1>Welcome to a secondary view view</h1>} />
      </div>
    </Router>
  );
};

export default Menu;
