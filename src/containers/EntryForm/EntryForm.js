import React, { useState } from "react";
import { connect } from "react-redux";
import axios from'axios';

import {addEntry} from '../../data/entries';
// import styled from "styled-components";

// const StyledForm = styled.form`
// textarea{

//   width: 100%;
// }

// `;

const initialState = {
  text: ""
};

export const EntryForm = props => {
  const [entry, setEntry] = useState(initialState);

  const changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    setEntry({
      ...entry,
      [ev.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("entry to be posted", entry);
    addEntry(entry);
    

 axios.post("/entries", entry,
    {
      headers: {
        Authorization: `Bearer ${btoa("lambda-client:lambda-secret")}`,
        "Content-Type": "application/json"
      }
    }
  );


    // axios.post(`https://olad-backend.herokuapp.com/entry`, entry)
    // .then(res=>{
    //   console.log('Post response',res);
    // })
  };

  // const handleEdit = e =>{
  //   e.preventDefault();
  //   console.log("entry to be posted", entry);
  //   axios.put(`https://olad-backend.herokuapp.com/entry`, entry)
  //   .then(res=>{
  //     console.log('Post response',res);
  //   })
  // }

  return (
    <div className="entry-form-container">
      <h3>New Entry:</h3>
      <form onSubmit={handleSubmit} className="entry-form">
        <textarea
          type="text"
          name="text"
          // placeholder="What Happened today?"
          rows="3"
          onChange={changeHandler}
          value = {props.entryList}
        />
        <div className='buttonDiv'>
          <button type="submit">Submit</button>
          <button type = 'button' >Edit</button>
          <button type = 'button' >Delete</button>
        </div>

      </form>
    </div>
  );
};

const mapStateToProps = state => {
    return {
        entryList: state.entries
    }
}

export default connect()(EntryForm);
