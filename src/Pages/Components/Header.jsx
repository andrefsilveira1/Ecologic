import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

export default function Header(props){
    return(
        <div className="banner_x">
                <h1 className="main">{props.title}</h1>
                <div>
                    <nav>
                        <ul className="menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/sobre">Sobre</Link></li>
                            <li><Link to="/projeto">Projeto</Link></li>
                            <li><Link to="/mapa">Pontos de Coleta</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
    );
}