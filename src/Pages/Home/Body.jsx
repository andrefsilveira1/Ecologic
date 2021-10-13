import React from 'react'
import "./Body.css"
import ico from "../../assets/profileico.JPG"
import Skills from "../Skills/Skills"
export default function Body(){
    return(
        <>
            <body>
                <div className="Content">
                    <div className="Content-in">
                        <img src={ico} alt="Bonitão"/>
                        <p>Olá, eu sou André Freitas, aluno da UFRN e quero te apresentar a Ecologic!</p>
                    </div>
                    <div className="second">
                        <h4>Uma ideia simples, mas poderosa!</h4>
                        <p>Em colaboração com a Labuilding e bConnect, eu idealizei uma pequena Organização sem fins lucrativos responsável por orientar e promover um melhor
                            descarte para o lixo, em especial, o lixo eletrônico. Venha conhecer mais sobre um mal que pode afetar a vida de todos nós aqui no planeta Terra.
                            Navegue sobre as seções para conhecer mais sobre o projeto.
                        </p>
                        <hr/>
                        <Skills/>
                    </div>
                </div>
            </body>
        </>
    )
}