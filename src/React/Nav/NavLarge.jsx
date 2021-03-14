import React from 'react';
import styled from 'styled-components';

/*Components ------------------------------*/
import Nav from './Nav.jsx';

const NavLarge = () => {

    return (
        <NavLargeStyled className='NavLarge'>
            <Nav />
        </NavLargeStyled>
    );
}

export default NavLarge;

const NavLargeStyled = styled.div`

    display: flex;
    justify-content: center;
    background-color: #2f58c9;
    padding: 20px;

    .Nav {
        display: flex;
        width: 500px;
    }

a {
    flex: 1;
    text-align: center;
    display: block;
    background: #132b6d;
    color: white;
    text-decoration: none;

    border-radius: 5px;

    padding: 10px;
    margin: 0px 5px;

    &.active {
        background-color: #0b1a44;
    }
    &:hover {
        background-color: #10245c;
        color: white
    }
} 
`;