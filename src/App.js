import React, { Component } from 'react';
// import 'bulma/css/bulma.css';
import AppLogado from './AppLogado';




class App extends Component {
  constructor(props) {
    super(props);
     
  }
  render() {
    return (
      <div>
        
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
          
        
          
      </div>
    );
  }
}

export default App;
