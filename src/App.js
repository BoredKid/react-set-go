import React from 'react';
import Menu from './components/Menu';

const BigTitle = () => <h1 className="bigTitle">Bored Stream</h1>;

const App = () => {
  return (
    <div>
      <BigTitle />
      <Menu />
    </div>
  );
};

export default App;
