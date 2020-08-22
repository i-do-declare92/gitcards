import React from 'react';
import Welcome from './component/welcome/Welcome';
import { Button } from '@material-ui/core';
import Card from './component/card/Card';
import './App.css';


function App() {
  return (
    <div className="App">
      <Welcome />
     <Button color="primary">User</Button>
      <Card />
    </div>
  );

}

export default App;
