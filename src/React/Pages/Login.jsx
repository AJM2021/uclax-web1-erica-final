import React,  { useState } from 'react';

const Login = () => {

const [imageSrc, imageSrcUpdate] = useState('/assets/img/Elsa1.png');

const imageOver = () => {
    imageSrcUpdate('/assets/img/Elsa2.jpg');
}
const imageOut = () => {
    imageSrcUpdate('/assets/img/Elsa1.png');
}

    return (
        <div>
            <h1>Login</h1>
            <img src={ imageSrc } 
            alt='Login'
            onMouseOver={ imageOver }
            onMouseOut={ imageOut}
            
            />
            </div>
    )
}

export default Login;