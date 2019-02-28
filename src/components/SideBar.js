import React , { Component } from 'react';
import {  Link, Switch } from 'react-router-dom';


class SideBar extends Component {
    constructor(props) {
        super(props);

    }

    handleSide() {
       console.log("kflsadhfjklsd");
       this.props.closeSide();
    }

    render () {
        return (
            <div>
                        <span onClick={this.props.closeSide}>&times;</span>
                        <aside classNam="menu is-info">
                        
                            <p className="menu-label">Geral</p>
                            <ul className="menu-list">
                                <li><Link to="/usuarios">Usuarios</Link></li>
                            </ul>
                            <p className="menu-label">Administrador</p>
                            <ul className="menu-list">
                                <li><Link to="/inserir">Inserir</Link></li>
                                <li><Link to="/excluir">Excluir</Link></li>
                                
                                <br/>
                                       
                            </ul>
                            {/* <ul className="menu-list"><li><Link to="/login">Logout</Link></li></ul> */}
                        </aside>

                       
                
                    
            

                      
                      
            </div>
        )
    }

}
export default SideBar;