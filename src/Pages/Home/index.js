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
                </div>
        </section>
    )
}