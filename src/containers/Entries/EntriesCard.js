import React from "react";
import Styled from "styled-components";

const EntriesCard = props => {
    return (
        <div className="">
            <h2>Date</h2>
            <h2>{props.text}</h2>
        </div>
    )
}

export default EntriesCard;