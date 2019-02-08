import React, { Component } from 'react';
import SideBar from './components/SideBar';
import Usuarios from './components/Usuarios';
import Inserir from './components/Inserir';
import Excluir from './components/Excluir';
import { Route} from 'react-router-dom';

class AppLogado extends Component {
    render (){
        return(
            <div>
                <section className="section" style={{paddingBottom: '0'}}>
                    <div className="columns">
                        <div className="column is-2">
                            <SideBar/>
                        </div>
                        
                        <div className="column">
                            <Route path="/usuarios" component={Usuarios} />
                            <Route path="/inserir" component={Inserir} />
                            <Route path="/excluir" component={Excluir} />
                        </div>
                    </div>

                </section>
            </div>
        );
    }


}
export default AppLogado;