import React, {Component} from 'react';
import hamburguerMenu from '../img/abrir-menu.svg'

export default class MenuITGirls extends Component {
  render() {
    return (
        <div>
        <div className="barra-topo">
        </div>
        <input id="check" type="checkbox"/>
        <label id="label-menu" for="check">
            <img id="fecha-menu" src={hamburguerMenu} />
        </label>
        <nav>
            <ul>
                <li><a href="">HOME</a></li>
                <li><a href="">O PROJETO</a></li>
                <li><a href="">CONTEÚDOS</a></li>
                <li><a href="">NOTÍCIAS</a></li>
                <li><a href="">PARTICIPANTES</a></li>
                <li><a href="">FALE CONOSCO</a></li>
            </ul>
            <div className="midias-icones">
                <h1 className="fa fa-instagram" aria-hidden="true"></h1>
                &nbsp;&nbsp;&nbsp;&nbsp;{/* Colocar padding proporcional... */}
                <i className="fa fa-facebook-official" aria-hidden="true"></i>
            </div>
        </nav>
    </div>
    );
  };
};