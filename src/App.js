import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './App.css';


class App extends React.Component {
  state = {
    user: {},
    active: false,
  }

  handleToggle = () => {
    fetch("https://api.github.com/users/someonestaring")
      .then(response => {
        return response.json()
          .then(data => {
            this.setState({ user: data });
          })
      }
  );

  if(this.state.active === false) {
  this.setState({ active: true})
} else { this.setState({ active: false }) }
}
  render() {
    if (this.state.active === true) {
      
      return (
        <div className="App">
          <button className="ui violet button" onClick={this.handleToggle}>Press Me</button>
          <Card>
            <Image src={this.state.user.avatar_url} alt="Git Picture" />
            <Card.Content style={{ background: "rgba(20, 210, 200, 0.313)" }}>
              <Card.Header>{this.state.user.name}</Card.Header>
              <Card.Meta>{this.state.user.bio}</Card.Meta>
              <Card.Description>Username: {this.state.user.login}</Card.Description>
            </Card.Content>
          </Card>
        </div>
      );
    }
    return (

      <div className="App">
        <button className="ui violet button" onClick={this.handleToggle}>
          Press Me
        </button>
      </div>
    );
  }
}
// Ian Waddell (Brother) helped me fix my diasterious mess. xD
export default App;
// Ian Waddell (Brother) helped me fix my diasterious mess. xD