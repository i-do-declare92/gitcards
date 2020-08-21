import React from 'react';
import Welcome from './component/welcome/Welcome';
import Button from './component/button/Button';
import Card from './component/card/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Button />
      <Card />
    </div>
  );
}

export default App;
