import React, { Component } from 'react';

class Excluir extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }

    handleRemove(id) {
        const response = window.confirm('Tem certeza que deseja remover?');
        if (response) {
            this.props.removeUser(id);
        }
        
    }

    render () {
        return(
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
                                    <tr onClick={() => this.handleRemove(info.userId)}>
                                        <th>{info.userId}</th>
                                        <td>{info.userName}</td>
                                        <td>{info.userEmail}</td>
                                        <td style={{fontSize: '17px', color: 'red'}} key={info.userId} alt="Excluir"><span onClick={() => this.handleRemove(info.userId)}>×</span></td>
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
export default Excluir;