import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`

background-color: #EDFBFF;
width: 850px; 
margin: auto;
border-bottom: 2px solid #00FFFF;
border-right: 2px solid #00FFFF;
display:flex;
margin-top: 15px;
margin-bottom: 15px;
`


const EntriesCard = props => {
    return (
            <StyledDiv>
                <h2>Date</h2>
                <h2>{props.text}</h2>
            </StyledDiv>       
    )
}

export default EntriesCard;