import React,  { useState } from 'react';

const Elsa = () => {

const [imageSrc, imageSrcUpdate] = useState('/assets/img/Elsa1.png');

const imageOver = () => {
    imageSrcUpdate('/assets/img/Elsa2.jpg');
}
const imageOut = () => {
    imageSrcUpdate('/assets/img/Elsa1.png');
}

    return (
        <div>
     
            Elsa

            <img src={ imageSrc } 
            alt='Elsa'
            onMouseOver={ imageOver }
            onMouseOut={ imageOut}
            
            />
            </div>
    )
}

export default Elsa;