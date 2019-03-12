import React, { Component } from 'react';
import edit from '../icons/paper-checklist-with-pen.svg';

class Usuarios extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }
    render () {
        
        return (
            <div className="column">
                    <div className="columns">
                    <table className="table is-hoverable is-fullwidth">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th/>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {this.data.map(info => {
                                return(
                                    <tr>
                                        <th>{info.userId}</th>
                                        <td>{info.userName}</td>
                                        <td>{info.userEmail}</td>
                                        <td><img src={edit} className="image is-24x24" alt="Editar"/></td>
                                    </tr> 
                                );
                            })}
                        
                        </tbody>
                    </table>
                </div>
            </div>
            );
    }
}
export default Usuarios;