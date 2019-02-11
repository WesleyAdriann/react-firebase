import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AppLogado from './AppLogado';
import Login from './components/Login';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logado: true,
      user: "",
      admin: false,
    };
    this.checkLogin = this.checkLogin.bind(this);
  }

  checkLogin = () => {
    if (this.state.logado === true) {
      return true;
    } else {return false}
  }

 
  

  render() {
    return (
      <div>
        <BrowserRouter >
{/* 
          <Switch>
            <Route exact path="/" render={ () => (
              this.checkLogin ? (
                <AppLogado/>
              ) : (
                <Redirect to="/login"/>
              )


            )}/>

            <Route path="/login" component={Login}/>
          </Switch> */}


         
          
          <Login/>
          
          
        </BrowserRouter>
          
      </div>
    );
  }
}

export default App;
