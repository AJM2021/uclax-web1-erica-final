import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

const TabbedNavItem = ({tabItem, changeTabs, chosenTab}) => {

    const handleTabClick = () => {
        changeTabs(tabItem);
    }

const theClassName = classnames({
    'TabbedNavItem': true,
    'active': tabItem.title === chosenTab.title,
});

    return (
        <TabbedNavItemStyled 
        className={ theClassName }
        onClick={ handleTabClick }
        >
            { tabItem.title }
        </TabbedNavItemStyled>
        
    );
}

export default TabbedNavItem;

const TabbedNavItemStyled = styled.div`
     color: white; 
     line-height: 30px;
     display: inline-block;
     width: 100px;
     text-align: center;
     margin-right: 5px;
     border-radius: 5px 5px 0px 0px;
     font-size: 12px;
     cursor: pointer;

    background-color: #132b6d;

    &:hover {
            background-color: #10245c; 
    }
   &.active {
       background-color: #2f58c9
   }
    
`;