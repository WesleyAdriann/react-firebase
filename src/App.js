import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppLogado from './AppLogado';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logado: false,
      user: "",
      admin: false
    }
  }

  checkLogin() {
    if (this.state.logado === true) {
      return true;
    } else {return false}
  }

  render() {
    return (
      <div>
        <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={AppLogado}/>
                </Switch>
            </BrowserRouter>
      </div>
    );
  }
}

export default App;
