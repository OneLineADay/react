import React, { useState, useEffect } from "react";
import axios from "axios";
import EntriesCard from "./EntriesCard";
import { connect } from 'react-redux';
import styled from "styled-components";

const StyledContainer = styled.div`
text-align:left;
width: 55%;
max-width: 55%;
margin: auto;
margin-right: 150px;
background-color: #FFE9A4;
padding-top:15px;
padding-bottom:15px;
margin-top: 50px;
`

function Entries(props) {
    // const [ability, setAbility] = useState();
    // const [characteristic, setCharacteristic] = useState();

    console.log('Store entries', props.entryList)

    return (
        <StyledContainer>
            {props.entryList.map(item => (
                    <EntriesCard text={`${item}`} />
                ))}
        </StyledContainer>
    );
}

const mapStateToProps = state => {
    return {
        entryList: state.entries
    }
}

export default connect(mapStateToProps, {})(Entries);
