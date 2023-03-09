import React from 'react';
import { ProbabilidadeImage } from '../../Assets';
import Sobre from '../Sobre';

//IMPORTANDO O CSS
import './header.css';

export default () => {

    function sobre() {
        document.getElementById("sobre").classList.toggle("active");
    }

    return (
        <header className='mainHeader flexBetweenAlign'>
            <div className="logo flexJustAlign">
                <img src={ProbabilidadeImage} alt="Probabilidade image" />
                <h1><span className='colorblue1'>Probabilidade</span></h1>
            </div>

            <button id='SobreDiv' onClick={sobre} >Sobre</button>

            <Sobre />

            <nav>
                <a>links aqui</a>
                <a>links aqui</a>
                <a>links aqui</a>
            </nav>
        </header>
    )
}