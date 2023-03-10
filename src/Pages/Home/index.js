import React from 'react';

//IMPORTANDO O CSS
import './home.css';

export default () => {

    return (
        <section className='home'>
                <h1 className='center intro'>Probabilidade e Estatística</h1>
                <div className="Content">
                    <p><span classname="concept">Probabilidade :</span> É o estudo da aleatóriedade e incerteza.</p>
                    <p><span classname="concept">Estatística :</span> É um conjunto de métodos usados para analizar dados.</p>
                    <ul>
                        <li>
                            <p><span className='concept'>Estatística Descritiva : </span>Está relacionada à organização e representação de dados.</p>
                        </li>
                        <li>
                            <p><span className='concept'>Estatística Inferencial : </span>Está relacionada ao fato de realizarmos inferências sobre dados previamente coletados , usando a Probabilidade.</p>
                        </li>
                    </ul>
                    <hr />
                    <div className="boxContent">
                        <p><span className="concept">Fenômenos Determinísticos : </span> São aqueles em que os resultados são sempre os mesmos, dado um conjunto de variáveis.</p>
                        <p><span className='colorgreen1'>Exemplo : </span> Se soutarmos um lapís sabemos que ele irá cair em direção ao chao .</p>
                    </div>
                    <div className="boxContent">
                        <p><span className="concept">Fenômenos Aleatórios : </span> São aqueles em que os resultados são imprevisíveis, independentemente da quantidade da sua repetição.</p>
                        <p><span className='colorgreen1'>Exemplo : </span> Ao jogar um dado (Não viciado) , não consiguimos prever, com certeza ,qual número irá resultar.</p>
                    </div>
                    <hr />
                    <div className="boxContent">
                        <p><span className="concept">Espaço Amostral : </span> O espaço amostral (de um experimento aleatório) é o conjunto formado por todos os resultados possíveis desse experimento. </p>
                        <p><span className='colorgreen1'>Exemplo : </span> Para o lançamento de um dado , o espaço amostral do lançamento será : <br /><strong>S = {"{1 , 2 , 3 , 4 , 5 , 6}"} .</strong></p>
                    </div>
                    <div className="boxContent">
                        <p><span className="concept">Evento Aleatório : </span> De forma resumida , é um subconjunto do espaço amostral.</p>
                        <p><span className='colorgreen1'>Exemplo : </span> Para o lançamento de um dado , um possível evento aleatório é que o resultado seja impar e , o subconjunto desse evento será : <br /><strong>E = {"{1 , 3 , 5}"} .</strong></p>
                    </div>
                    <div className="boxContent">
                        <p><span className="concept">Espaço Equiprovável : </span> Temos que todos os pontos amostrais (elementos do espaço amostral) têm a mesma chance de ocorrer.</p>
                        <p><span className='colorgreen1'>Exemplo : </span> Em um globo honesto (onde todas as bolas têm o mesmo peso , dimensões, tamanho e as mesmas características) , todas as bolas têm exatamente a mesma Probabilidade de ser sorteadas.</p>
                    </div>
                    <hr />
                </div>
        </section>
    )
}