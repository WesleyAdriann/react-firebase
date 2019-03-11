import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import SideBar from './components/SideBar';
import Usuarios from './components/Usuarios';
import Inserir from './components/Inserir';
import Excluir from './components/Excluir';
import Editar from './components/Editar';
import { BemVindo } from './components/BemVindo';

import firebase from 'firebase';
import { DB_config } from './config/config';
import 'firebase/database';

import './css/style.css';

class AppLogado extends Component {
    constructor() {
        super();
        this.state = {
          data: [   
            // {userId: 1, userName: 'rafael',  userEmail: 'rafael@gmail.com'},
            // {userId: 2, userName: 'natanael', userEmail: 'natanael@live.com'}
          ],
        };
        
        this.app = firebase.initializeApp(DB_config);
        this.db = this.app.database().ref().child('data')

        this.openSide = this.openSide.bind(this);
        this.closeSide = this.closeSide.bind(this);

        this.addUser = this.addUser.bind(this);
        this.removeUser = this.removeUser.bind(this);
      }
    
    componentDidMount() {
        const { data } = this.state;
        this.db.on('child_added', snap => {
            data.push({
                userId: snap.key,
                userName: snap.val().userName,
                userEmail: snap.val().userEmail
            })
            this.setState({data});
        });

        this.db.on('child_removed', snap => {
            for (let i = 0; i < data.length; i++) {
                if(data[i].userId == snap.key) {
                    data.splice(i, 1);
                }
            }
            this.setState({data});
        }) 
    }


    addUser (name, email) {
        this.db.push().set({
            userName: name,
            userEmail: email
        }, function(error) {
            if (error) {
                alert("Não foi possivel adicionar o usuário.")
            } else {
                alert("Usuário adicionado.")
            }
          });   
    }

    removeUser(id) {
        console.log('remove ', id);
        this.db.child(id).remove();
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
                            <span onClick={this.openSide}><p class="iconMenu" style={{fontSize: '20px'}}>☰</p></span>
                            
                            <Route path="/" exact component={BemVindo} />
                            <Route path="/usuarios" component={() => <Usuarios data={this.state.data}/>} /> 
                            <Route path="/inserir" component={() => <Inserir addUser={this.addUser}/>}/>  
                            <Route path="/excluir" component={() => <Excluir data={this.state.data} removeUser={this.removeUser}/>}/>
                            <Route path="/editar" component={() => <Editar/>}/>
                            
                </div>

            </div>
        );
    }


}
export default AppLogado;