import React from 'react';
import { StyledContainer } from "./Styles";

export const Navigation = () => {


    return (
        <StyledContainer>
            <div className='nav-logo'>Logo</div>
            <div className='nav-options'>
                <a className='nav-item'>New Entry</a>
                <a className='nav-item'>Past Entries </a>
                <a className='nav-item'>Log In</a>
            </div>
        </StyledContainer>
    );

}