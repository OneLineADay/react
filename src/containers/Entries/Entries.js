import React, { useState, useEffect } from "react";
import axios from "axios";
import EntriesCard from "./EntriesCard";
import { connect } from 'react-redux';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

function Entries(props) {
    const [entries, setEntries] = useState();
    // const [characteristic, setCharacteristic] = useState();

    console.log('Store entries', props.entryList)

    useEffect(() => {
        axiosWithAuth()
            .get('/entries',
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            )
            .then(res => {
                console.log('Respons3423423', res.data)

                setEntries(res.data)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    return (

        <div>
            {console.log('StateEntries:', entries)}
            {entries ?
                entries.map(item => (
                    <h2>{`${item.text}`}</h2>

                ))

                :

                <div>Loading</div>
            }

        </div>
    );
}

const mapStateToProps = state => {
    return {
        entryList: state.entries
    }
}

export default connect(mapStateToProps, {})(Entries);
