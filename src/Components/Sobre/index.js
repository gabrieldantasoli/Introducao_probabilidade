import React from 'react';

//IMPORTANDO O CSS
import './sobre.css';

export default () => {

    function fechar() {
        document.getElementById("sobre").classList.remove("active");
    }

    return (
        <section id='sobre' className=''>
            <p>Criei esse Site</p>
            <button onClick={fechar}>Fechar</button>
        </section>
    )
}