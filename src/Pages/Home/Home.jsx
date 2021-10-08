import React from 'react'
import './Home.css'
import Body from "./Body"
import img_banner from "../../assets/nature3.jpg"
import Footer from "../Components/Footer"
import { Link } from 'react-router-dom';
export default function Home(){
    return(
        <>
            <div className="banner">
                <h1 className="main">ECOLOGIC</h1>
                <div className="banner_img">
                    <img src={img_banner} alt="imagem do banner"></img>
                </div>
                <div>
                    <nav>
                        <ul className="menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/sobre">Sobre</Link></li>
                            <li><Link to="/projeto">Projeto</Link></li>
                            <li><Link to="/mapa">Pontos de Coleta</Link></li>
                            <li><Link to="/habilidades">Habilidades</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Body/>
            <Footer/>
        </>
    )
}