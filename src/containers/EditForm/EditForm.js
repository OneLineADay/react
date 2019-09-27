import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';


const initialEntry = {
        text: 'I talked to my dad'
}

export const EditForm = () => {
    console.log('props')
    // const [entryToEdit, setEntryToEdit] = useState(''); //.get
    const [thisEntry, setEntry] = useState(initialEntry);



    // const { match, entry } = props;
    // useEffect(() => {
    //     const id = match.params.id;
    //     const entryToUpdate = entry.find(item => `${item.id}` === id);
    //     if (entryToUpdate) {
    //         console.log('Updating entry:', entryToUpdate);
    //         setEntry(entryToUpdate);
    //     }
    // }, [match ]);




    const changeHandler = (ev) => {
        // ev.persist();
        let value = ev.target.value;
        setEntry({
            ...thisEntry,
            [ev.target.name]: value
        })
    }

    const deleteItem = () =>{
        axiosWithAuth()
        .delete(`/entry/8`,
        { headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        .then(res => {
            console.log(res)
            // props.history.push('/')
        })
        .catch(err => { console.log(err) })
    }

    const handleSubmit = (e) => {
        e.preventDefault();


        // axiosWithAuth()
        //     .get(`/entry/8`,
        //     { headers: {
        //         Authorization: `Bearer ${localStorage.getItem('token')}`}
        //     }
        //     )
        //     .then(res => {
        //         console.log('Entry 8', res)
        //         setEntry(res.data.text)
   
        //     })




        axiosWithAuth()
            .put(`/entry/8`, thisEntry,
            { headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            .then(res => {
                console.log(res)
                setEntry(initialEntry)
                // props.history.push('/')
            })
            .catch(err => { console.log(err) })
    }


    return (
        <div className='entry-form-container'>
            {/* {console.log('EtoEdit',entryToEdit)} */}
            <h1>Change Something!</h1>
            <form onSubmit={handleSubmit} className='entry-form'>
                <textarea
                    type='text'
                    name='text'
                    placeholder='entry'
                    onChange={changeHandler}
                    value={thisEntry.text}
                />
                {/* <button type='submit'>Get</button> */}
                <button type='submit' >Update!</button>
            </form>
            <button onClick = {deleteItem} >DElete</button>
        </div>
    );
}


