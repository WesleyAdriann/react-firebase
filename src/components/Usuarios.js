import React, { Component } from 'react';

import edit from '../icons/paper-checklist-with-pen.svg';
import deleteIcon from '../icons/rubbish-bin.svg';

class Usuarios extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }
    render () {
        
        return (
            // <div className="column">
            //         <div className="columns">
            //         <table className="table is-hoverable is-fullwidth">
            //             <thead>
            //                 <tr>
            //                     <th>ID</th>
            //                     <th>Nome</th>
            //                     <th>Email</th>
            //                     <th>Editar</th>
            //                     <th>Excluir</th>
            //                 </tr>
            //             </thead>
            //             <tbody>
                            
            //                 {this.data.map(info => {
            //                     return(
            //                         <tr>
            //                             <th>{info.userId}</th>
            //                             <td>{info.userName}</td>
            //                             <td>{info.userEmail}</td>
            //                             <td><img src={edit} className="image is-24x24" alt="Editar"/></td>
            //                             <td><img src={deleteIcon} className="image is-24x24" alt="Excluir" key={info.userId}/></td>
                                        
            //                         </tr> 
            //                     );
            //                 })}
                        
            //             </tbody>
            //         </table>
            //     </div>
            // </div>
            <div className="table-responsive-sm">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Email</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Excluir</th>    
                        </tr>
                    </thead>
                    <tbody>

                        {this.data.map(info => {
                            return (
                                <tr>
                                    <th scope="row">{info.userId}</th>
                                    <td>{info.userName}</td>
                                    <td>{info.userEmail}</td>
                                    <td><img src={edit} style={{width: 24}}/></td>
                                    <td><img src={deleteIcon} style={{width: 24}} key={info.userId}/></td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </table>
            </div>

            );
    }
}
export default Usuarios;