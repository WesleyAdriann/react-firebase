import React, { Component } from 'react';
import user from '../icons/_ionicons_svg_md-person.svg'
import mail from '../icons/_ionicons_svg_md-at.svg'

class Editar extends Component {
    constructor() {
        super();
        

    }
    render () {
        const nome = "fjaslkd";
        const email = "fhasdkshak@fhjksafk.com";
        return (
            <div className="columns">
                <div className="column">
                    <div style={{maxWidth: '30%', marginTop: '10px'}}>
                    
                    </div>

                    <div className="field">
                        <label className="label">Nome</label>
                        <div className="control has-icons-left">

                            <span className="icon is-left">
                                <img src={user} className="image is-24x24" style={{filter: 'opacity(25%)', zIndex: 0}}/>
                            </span>

                            <input 
                                id="name"
                                className="input"
                                type="text"    
                                placeholder={nome}
                            />

                            
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left">


                        <span className="icon is-left">
                                <img src={mail} className="image is-24x24" style={{filter: 'opacity(25%)', position:'absolute', zIndex: 1}}/>
                                
                            </span>
                            <input
                                id="email"
                                className="input"
                                type="text"
                                placeholder={email}
                            />
                        </div>
                    </div>

                    <div className="field" style={{float: 'right'}}>
                        <div className="control">
                            <button className="button is-info">Atualizar</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Editar;