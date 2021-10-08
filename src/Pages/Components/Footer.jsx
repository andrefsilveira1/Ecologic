import React from 'react'
import "./Footer.css"
import forest from '../../assets/forest2.png'
import { Link } from 'react-router-dom';
export default function Footer(){
    return(
        <>
            <footer>
                <div className="links">
                    <a href="https://github.com/andrefsilveira1" target="_blank" rel="noreferrer">Git hub</a>
                    <a href="https://www.instagram.com/andre_freitas_1/" target="_blank" rel="noreferrer">Instagram</a>
                </div>
                <Link to="/">
                    <img src={forest} className="ico" alt="Icone de floresta"/>
                </Link>
                <div className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/sobre">Sobre</Link>
                    <Link to="/projeto">Projeto</Link>
                    <Link to="/mapa">Pontos de Coleta</Link>
                    <Link to="/habilidades">Habilidades</Link>
                </div>
            </footer>
        </>
    )
}