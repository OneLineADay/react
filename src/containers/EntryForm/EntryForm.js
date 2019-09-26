import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { postEntryAC } from '../../redux/actions/index';
import { tsPropertySignature } from '@babel/types';
import { connect } from 'react-redux';

// C:\Users\tyler\Documents\github\OneLineADay\react-app\src\redux\actions\index.js

const initialState = {
    entryText: ''
}

export const EntryForm = (props) => {

    const [entry, setEntry] = useState(initialState);


    const changeHandler = (ev) => {
        ev.persist();
        let value = ev.target.value;
        setEntry({
            ...entry,
            [ev.target.name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('entry to be posted', entry)
        console.log('EntryAC',postEntryAC)

        props.postEntryAC(entry)
    }


    return (
        <div className='entry-form-container'>
            <h1>Add an Entry</h1>
            <form onSubmit={handleSubmit} className='entry-form'>

                <textarea
                    type='text'
                    name='entryText'
                    placeholder='What Happened today?'
                    rows='3'
                    onChange={changeHandler}
                    
                />
                <button
                    type='submit'
                >Submit</button>

            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        entryList: state.entries
    }
}

export default connect(mapStateToProps, {postEntryAC})(EntryForm);

