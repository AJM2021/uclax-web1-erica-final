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
            <br></br>
            <br></br>
            Elsa
            <br></br>
            <br></br>
            <img src={ imageSrc } 
            onMouseOver={ imageOver }
            onMouseOut={ imageOut}
            
            />
            </div>
    )
}

export default Elsa;