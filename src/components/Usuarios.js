import React, { Component } from 'react';

class Usuarios extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }
    render () {
        
        return (
            <div>
                
                <table className="table if-fullwidth">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {this.data.map(info => {
                            return(
                                <tr>
                                    <th>{info.userId}</th>
                                    <td>{info.userName}</td>
                                    <td>{info.userEmail}</td>
                                </tr> 
                            );
                        })}
                       
                    </tbody>
                </table>
            </div>
            );
    }
}
export default Usuarios;