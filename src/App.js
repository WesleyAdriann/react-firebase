import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AppLogado from './AppLogado';
import Login from './components/Login';



class App extends Component {
  constructor(props) {
    super(props);
     
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


         
          
          {/* <Login/> */}
          <AppLogado/>
          
        </BrowserRouter>
          
      </div>
    );
  }
}

export default App;
