import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

/* Scripts ------------------------*/
import { mq } from '../common/media_queries.js';

/* Components ---------------------------*/
import Nav from './Nav.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Main from './Main.jsx';



const Container = () => {
    return (
       <BrowserRouter>
       <ContainerStyled className='Container'>
            <Header />
            <Nav />
            <Main />
            <Footer />
        </ContainerStyled>
        </BrowserRouter>
    );
    }
    export default Container; 

    const ContainerStyled = styled.div`
        background-color: pink;

        @media ${mq.tablet} {
                background-color: yellow;
        }
        @media ${mq.desktop} {
                background-color: maroon;
        }
        @media ${mq.ultrawide} {
                background-color: purple;
        }
        `;