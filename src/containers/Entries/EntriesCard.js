import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`

background-color: #EDFBFF;
width: 600px; 
max-height: 125px;
margin: auto;
border-bottom: 2px solid #00FFFF;
border-right: 2px solid #00FFFF;
`
const StyledDiv2 = styled.div`
background-color: #FFE9A4;
max-width:50%;
justify-content:flex-end;
margin-left:45%;
`

const EntriesCard = props => {
    return (
        <StyledDiv2>
            <StyledDiv>
                <h2>Date</h2>
                <h2>{props.text}</h2>
            </StyledDiv>
        </StyledDiv2>
    )
}

export default EntriesCard;