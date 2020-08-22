import React from 'react';
import Welcome from './component/welcome/Welcome';
import { Button } from '@material-ui/core';
import Card from './component/card/Card';
import UserCard from './component/userCard/UserCard';
import './App.css';


function App() {
  return (
    <div className="App">
      <Welcome />
      <Button>
        <Card />
        <Button/>
        </Button>
    </div>
  );

}

export default App;
