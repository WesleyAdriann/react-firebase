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
                                <li onClick={this.props.closeSide}>
                                    <Link to="/usuarios">
                                        Usuarios
                                    </Link>
                                </li>
                            </ul>
                            <p className="menu-label">Administrador</p>
                            <ul className="menu-list">
                                <li onClick={this.props.closeSide}>
                                    <Link to="/inserir">
                                        Inserir
                                    </Link>
                                </li>
                                <li onClick={this.props.closeSide}>
                                    <Link to="/excluir">
                                        Excluir
                                    </Link>
                                </li>
                                <li onClick={this.props.closeSide}>
                                    <Link to="/editar">
                                        Editar
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