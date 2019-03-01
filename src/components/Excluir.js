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
            <div>
                
                <table className="table if-fullwidth">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {this.data.map(info => {
                            return(
                                <tr>
                                    <th>{info.userId}</th>
                                    <td>{info.userName}</td>
                                    <td>{info.userEmail}</td>
                                    <td style={{fontSize: '17px', color: 'red'}} key={info.userId}><span onClick={() => this.handleRemove(info.userId)}>×</span></td>
                                </tr> 
                            );
                        })}
                       
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Excluir;