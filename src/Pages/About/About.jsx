import React from 'react'
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import './About.css'
export default function About(){
    return(
        <>
            <Header title="Sobre"/>
            <div className="Box">
                <div className="conteudo">
                    <h3>Um breve resumo:</h3>
                    <hr/>
                    <p>
                        Há exatos 19 anos e 159 dias eu viria ao mundo já com uma enorme dúvida: o que eu vou ser quando crescer? <br/>
                        Por muito tempo eu adiei essa pergunta, mas em 2020, não haveria jeito, eu teria que escolher um caminho. Eu sempre amei aventura, estar no meio
                        da selva, trilhar caminhos no meio do mato e acampar. Por conta disso, aos 18 anos eu estava certo de que queria entrar no Exército Brasileiro.
                        Em contrapartida, também estive muito conectado aos jogos e computadores e pensei em seguir essa carreira. As notas do ENEM saíram e eu tinha
                        uma decisão a fazer. Tive um excelente resultado, e logo começaram a me dizer o que fazer. Medicina, Direito e Engenharia Civil (como sempre).
                        Eu não queria ficar ocioso e optei por fazer um curso que eu realmente queria (BTI). Mas por muito pouco, quase escolhia Direito.
                        O dia em que eu entrei no Instituto Metrópole Digital pela primeira vez, eu me decidi que meu lugar era lá, e que iria seguir a carreira como
                        desenvolvedor.
                    </p>
                    <p>
                        Apesar de um pequeno período presencial na Universidade, procurei me manter sempre aprendendo novos conteúdos e me integrando a projetos,
                        como o La building. Atualmente sou membro voluntário do IEEE - Computer Society, desenvolvendo diversos projetos no ramo de TI. Na minha opinião, 
                        a melhor forma de aprender é praticando. Por causa disso, estou participando desse desafio.
                    </p>
                    <p>
                        Fora do meio acadêmico, me considero uma pessoa extremamente comunicativa e extrovertida. Amo atividades físicas como Academia, Calistenia, Karatê e 
                        Trekking. Quando tenho um tempo livre, sempre busco ler algum livro ou assistir algum filme. Detesto séries pois simplesmente não consigo terminar 
                        nehuma, ficar por muito tempo na frente da televisão é um sofrimento para mim (Males de uma pessoa hiperativa), mas ficar horas na praia, é comigo mesmo!
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    )
}