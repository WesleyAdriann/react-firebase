import React, { Component } from 'react';
import user from '../icons/_ionicons_svg_md-person.svg'
import mail from '../icons/_ionicons_svg_md-at.svg'

class Inserir extends Component {

    addUser() {

    }

    render () {
    
        return (
            <div>
                <div className="field">
                    <label className="label">Nome</label>
                    <div className="control has-icons-left">
                        <input className="input" type="text" placeholder="Nome do usuário"/>
                        <span className="icon is-left">
                            <img src={user} className="image is-24x24" style={{filter: 'opacity(25%)'}}/>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left">
                        <input className="input" type="text" placeholder="email@exemplo.com"/>
                        <span className="icon is-left">
                            <img src={mail} className="image is-24x24" style={{filter: 'opacity(25%)'}}/>
                        </span>
                    </div>
                </div>

                <div className="field" style={{float: 'right'}}>
                    <div className="control">
                        <button className="button is-info">Cadastrar</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Inserir;