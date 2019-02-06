import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <div>
        <section className="hero is-fullheight">

          <hero className="hero-body">

            <div className="container">
              <div className="columns is-centered">       
                <div className="column is-half box" >

                  <div className="field">
                    <label className="label">Login</label>
                    <div className="control">
                      <input className="input" type="text"/>
                    </div>
                    <br/>
                    <label className="label">Senha</label>
                    <div className="control">
                      <input className="input" type="password"/>
                    </div>
                    <br/>
                    
                    <input className="button" type="submit" value="Entrar"/>
                  </div>

                </div>
              </div>
            </div>
            
          </hero>

        </section>
      </div>
    );
  }
}

export default App;
