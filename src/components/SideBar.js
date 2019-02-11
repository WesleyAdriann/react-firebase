import React , { Component } from 'react';
import {  Link, Switch } from 'react-router-dom';


class SideBar extends Component {
    render () {
        return (
            <div className="hero is-fullheight if-info" style={{borderRight: '1px hsl(217, 71%, 53%) solid'}}>
                    
                        <aside classNam="menu is-info">
                            <p class="menu-label">Geral</p>
                            <ul className="menu-list">
                                <li><Link to="/usuarios">Usuarios</Link></li>
                            </ul>
                            <p className="menu-label">Administrador</p>
                            <ul className="menu-list">
                                <li><Link to="/inserir">Inserir</Link></li>
                                <li><Link to="/excluir">Excluir</Link></li>
                                
                                <br/>
                                       
                            </ul>
                            <ul className="menu-list"><li><Link to="/login">Logout</Link></li></ul>
                        </aside>

                       
                
                    
            

                      
                      
            </div>
        )
    }

}
export default SideBar;