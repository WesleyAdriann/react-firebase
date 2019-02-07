import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import SideBar from './components/SideBar';

class Routers extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route  path="/login"  component={Login}/>
                    <Route exact path="/" component={SideBar}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routers;