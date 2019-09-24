import React from "react";
import Styled from "styled-components";

const EntriesCard = props => {
    return (
        <div className="">
            <h2>{props.ability}</h2>
            <h3>{props.characteristic}</h3>
        </div>
    )
}

export default EntriesCard;