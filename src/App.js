import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Routers from './Routers'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logada: false
    };
  }

  render() {
    return (
      <div>
        <Routers/>
      </div>
    );
  }
}

export default App;
