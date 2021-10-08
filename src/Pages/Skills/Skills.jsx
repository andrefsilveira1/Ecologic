import React from 'react'
import Footer from "../Components/Footer"
import "./Skills.css"
import Header from "../Components/Header"
export default function Skills(){
    return(
        <>
            <Header title="Habilidades"/>
            <div className="drop-box">
                <div className="inside">
                    <h2>Habilidades</h2>
                    <hr/>
                    <div className="table-box">
                        <table border="1">
                            <tr>
                                <td>Habilidade</td>
                                <td>Percentual</td>
                            </tr>
                            <tr>
                                <td>HTML</td>
                                <td>80%</td>
                            </tr>
                            <tr>
                                <td>CSS</td>
                                <td>75%</td>
                            </tr>
                            <tr>
                                <td>React</td>
                                <td>50%</td>
                            </tr>
                            <tr>
                                <td>Next</td>
                                <td>45%</td>
                            </tr>
                            <tr>
                                <td>C++</td>
                                <td>60%</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}