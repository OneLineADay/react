import React, { useState, useEffect } from "react";
import axios from "axios";
import EntriesCard from "./EntriesCard";
import { connect } from 'react-redux';

function Entries(props) {
    // const [ability, setAbility] = useState();
    // const [characteristic, setCharacteristic] = useState();

    console.log('Store entries', props.entryList)

    return (
        <div>
            {/* {props.entryList.map(item => (
                    <EntriesCard text={`${item}`} />
                ))} */}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        entryList: state.entries
    }
}

export default connect(mapStateToProps, {})(Entries);
