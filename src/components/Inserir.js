import React, { Component } from 'react';
import user from '../icons/_ionicons_svg_md-person.svg'
import mail from '../icons/_ionicons_svg_md-at.svg'


class Inserir extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputName: '',
            inputEmail: '',
            erro: false,
            log: ''
        }
        this.addUser = this.addUser.bind(this);
    }

    addUser() {
        this.setState ({log: ''});

        let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (this.state.inputName.length < 3) {
            this.setState({
                log: <div className="message is-danger"><div class="message-body">O nome é muito curto</div></div>
            })
        
        } else if ( !re.test(String(this.state.inputEmail).toLowerCase()) ) {
            this.setState({
                log: <div className="message is-danger"><div class="message-body">Email inválido</div></div>
            })
        } else {

            this.props.addUser(this.state.inputName, this.state.inputEmail);
            
        }
        
    }

    handleName (inputName) {
        this.setState({
            inputName
        })  
    }

    handleEmail(inputEmail) {
        this.setState({
            inputEmail
        })
    }
    



    render () {
    

        return (
            <div className="columns">
                <div className="column">
                    <div style={{maxWidth: '30%', marginTop: '10px'}}>
                    {this.state.log}
                    </div>
                    <div className="field">
                        <label className="label">Nome</label>
                        <div className="control has-icons-left">

                            <input
                                id="name"
                                className="input" 
                                type="text" 
                                placeholder="Nome do usuário" 
                                onChange={event => this.handleName(event.target.value)}
                            />

                            <span className="icon is-left">
                                <img src={user} className="image is-24x24" style={{filter: 'opacity(25%)', zIndex: 0}}/>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left">

                            <input
                                id="email"
                                className="input"
                                type="text"
                                placeholder="email@exemplo.com"     
                                onChange={event => this.handleEmail(event.target.value)}                       
                            />

                            <span className="icon is-left">
                                <img src={mail} className="image is-24x24" style={{filter: 'opacity(25%)', position:'absolute', zIndex: 1}}/>
                                
                            </span>
                        </div>
                    </div>

                    <div className="field" style={{float: 'right'}}>
                        <div className="control">
                            <button className="button is-info" onClick={this.addUser}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Inserir;