import React , { Component } from 'react';
import {  Link, Switch } from 'react-router-dom';
import '../css/style.css';


class SideBar extends Component {
    constructor(props) {
        super(props);

    }

    

    render () {
        return (
            <div>
                    <div className="sideBar">
                        <div align="right" style={{fontSize: '20px', color: 'red'}}><span onClick={this.props.closeSide}>×</span></div>
                        <aside className="menu is-info">
                        
                            <p className="menu-label">Geral</p>
                            <ul className="menu-list">
                                <li>
                                    <Link to="/usuarios">
                                        <span onClick={this.props.closeSide}>Usuarios</span>
                                    </Link>
                                </li>
                            </ul>
                            <p className="menu-label">Administrador</p>
                            <ul className="menu-list">
                                <li>
                                    <Link to="/inserir">
                                        <span onClick={this.props.closeSide}>Inserir</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/excluir">
                                        <span onClick={this.props.closeSide}>Excluir</span>
                                    </Link>
                                </li>
                                <br/>        
                            </ul>
                            {/* <ul className="menu-list"><li><Link to="/login">Logout</Link></li></ul> */}
                        </aside>

                    </div>
                    <div className="main" onClick={this.props.closeSide}/>

                    
                    
            

                      
                      
            </div>
        )
    }

}
export default SideBar;