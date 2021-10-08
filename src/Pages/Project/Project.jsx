import React from 'react'
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import "./Project.css"
export default function Project(){
    return(
        <>
            <Header title="Projeto"/>
            <div className="Box-project">
                <div className="inside">
                    <h3>O que deve ser feito?</h3>
                    <hr/>
                    <p>O lixo de maneira geral foi, e sempre será, um enorme problema para nosso mundo. <br/>
                        Contudo, o lixo eletrônico é extremamente perigoso para o meio ambiente. Embora ainda não seja produzido na mesma escala do lixo
                        convencional, cada vez mais esse lixo vem sendo produzido por nós. Visto que desde os anos 2.000 a produção de componentes eletro-eletrônicos
                        disparou, consequentemente, o resíduo eletrônico também. Por conta disso, precisamos conscientizar e coletar o lixo eletrônico de maneira correta
                        para que seja despachado sem impactar o meio-ambiente.
                    </p>
                    <h3>Por que precisa ser realizado?</h3>
                    <hr/>
                    <p>
                        O lixo eletrônico em si não é tão nocivo ao ambiente. Mas o descarte irregular do mesmo é preocupante. Ao ser descartado de forma incorreta,
                        elementos químicos como:  chumbo, cádmio, mercúrio, berílio, (dentre outros) são despejados e se infiltram no solo e na água. Em contato
                        com os seres humanos, pode causar doenças graves como anemia, falhas no sistema nervoso e até mesmo o câncer. Contudo, o problema maior está
                        na infiltração desses compostos químicos no solo, que poderá impropriar a região e contaminar lençóis freáticos que armazenam enormes quantidades
                        de água. Tomando como exemplo Natal, a capital do Rio Grande do Norte, é uma cidade construída em cima de dunas (areia). Dessa forma, os químicos
                        permeiam o solo com facilidade, aumentando os danos causados por eles. Perceba que ao contaminar o solo, será mais difícil cultivar ou construir
                        algo em volta da região afetada. Além disso, se atingir reservatórios de água, irá inapropriar uma enorme quantidade de água líquida que se ingerido
                        por alguém, irá sofrer sérias consequências em virtude desse ato.
                    </p>
                    <h3>Quem deve fazer?</h3>
                    <hr/>
                    <p>
                        Todos devem fazer a sua parte. Podemos começar separando o lixo eletrônico e entregando nos pontos de coleta apropriados. A iniciativa "Ecologic" surge
                        como um facilitador desse descarte. O site em si permite o usuário encontrar pontos perto de sua localização e se dirigir até o ponto de coleta para
                        descartar o resíduo. Ademais, o projeto visa criar um ponto de coleta próprio que recebe todo tipo de lixo para reciclagem.
                    </p>
                    <h3>Onde será implementado?</h3>
                    <hr/>
                    <p>
                        O ponto de coleta seria criado primeiramente em Natal, pois é uma cidade que conta com pouco, ou quase nenhum projeto de conscientização ambiental. Mas 
                        é uma cidade que necessita disso urgentemente (como comentado anteriormente).
                        Contudo, o sistema abrange qualquer região do mundo. Visto que basta utilizar a aba "pontos de coleta"
                        e encontrar pontos em sua região.
                    </p>
                    <h3>Quando deverá ser feito?</h3>
                    <hr/>
                    <p>
                        O mais rápido possível. Quanto mais cedo iniciarmos esse processo, menos o ambiente será impactado, menos o governo irá gastar para reverter os danos
                        e menos pessoas sofrerão com a contaminação do solo e da água.
                    </p>
                    <h3>Como será conduzido?</h3>
                    <hr/>
                    <p>
                        Apesar de parecer complicado, uma equipe com apenas uma pessoa daria conta de administrar a Organização. Manter o site por si só, já será melhor do que
                        não tomar nenhuma medida. Porém, se colocada em atividade, a organização irá promover a conscientização e separação do lixo. Em seguida, será destinada
                        para empresas que reutilizam os elementos químicos e/ou convertem em outros materiais.
                    </p>
                    <h3>Quanto custará?</h3>
                    <hr/>
                    <p>
                        De imediato, o custo para manter o site, manutenção, divulgação e serviços online custará em torno de R$ 200 a R$ 400 reais anuais. Na idealização avançada do projeto,
                        irá necessitar de um grande investimento para alugar um galpão, comprar os materiais e até mesmo pagar funcionários. Por conta disso, será necessário um
                        investimento inicial de aproximadamente R$ 10.000 e um montante mensal de R$ 7.000. 
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    )
}