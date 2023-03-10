import React from 'react';

//IMPORTANDO O CSS
import './sobre.css';

export default () => {

    function fechar() {
        document.getElementById("sobre").classList.remove("active");
    }

    return (
        <section id='sobre' className=''>
            <p>Fala glr , td bom ?</p>
            <p>Criei esse site com o objetivo de fazer uploads de conteúdos das matérias de <strong>Introdução à Probabilidade</strong> e <strong>Estatística Aplicada</strong> Vistas no curso de Ciência da Computção na UFCG.</p>
            <p>Aqui irei fazer o upload de Conceitos , aplicações e exercícios sobre Probabilidade e Estatística. Espero poder ajudar os futuros alunos dessas disciplinas com o compartilhamento dessas infromações.</p>
            <button onClick={fechar}>Fechar</button>
        </section>
    )
}