import React, { Component } from 'react';
import SideBar from './components/SideBar';
import { Switch, Route } from 'react-router-dom';
import Usuarios from './components/Usuarios';
import Inserir from './components/Inserir';
import Excluir from './components/Excluir';

class AppLogado extends Component {
    constructor() {
        super();
        this.state = {
          data: [   
            {userId: 1, userName: 'rafael',  userEmail: 'rafael@gmail.com'},
            {userId: 2, userName: 'natanael', userEmail: 'natanael@live.com'}
          ],
        };
        this.openSide = this.openSide.bind(this);
        this.closeSide = this.closeSide.bind(this);
      }
    
    openSide () {
        document.getElementById("sideBar").style.display = "block";
    }

    closeSide () {
        document.getElementById("sideBar").style.display = "none";
    }


    
    render (){
        return(
            <div>
                {/* <section className="section" style={{paddingTop: '24px'}}>
                    
                    <div className="columns">
                        <div className="column is-2">
                            <SideBar/>
                        </div>
                        
                        <div className="column is-5">


                            
                            <Route path="/usuarios" component={() => <Usuarios data={this.state.data}/>} /> 
                            <Route path="/inserir" component={() => <Inserir/>}/>  
                            <Route path="/excluir" component={() => <Excluir/>}/>
                            

                        </div>
                        
                    </div>
                    
                </section> */}

                <div style={{display: 'none'}} id="sideBar">
                    <SideBar closeSide={this.closeSide}/>
                </div>

                <div className="section" style={{paddingTop: '24px'}}>
                            <span onClick={this.openSide}>&#9776;</span>
                            <Route path="/usuarios" component={() => <Usuarios data={this.state.data}/>} /> 
                            <Route path="/inserir" component={() => <Inserir/>}/>  
                            <Route path="/excluir" component={() => <Excluir data={this.state.data}/>}/>

                            
                </div>

            </div>
        );
    }


}
export default AppLogado;