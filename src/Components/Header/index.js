import React from 'react';
import { NavLink } from 'react-router-dom';
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
                <NavLink to="/" className={({isActive}) => (isActive ? "linkActive" : "")} >conceitos</NavLink>
                <NavLink to="/a" className={({isActive}) => (isActive ? "linkActive" : "")} >Exercícios</NavLink>
                <NavLink to="/b" className={({isActive}) => (isActive ? "linkActive" : "")} >Home</NavLink>
            </nav>
        </header>
    )
}