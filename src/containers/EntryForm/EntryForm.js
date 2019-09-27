import React, { useState } from "react";
import { connect } from "react-redux";
import {createEntryRequest} from 'redux/entries/entries.actions';


export const EntryForm = props => {
  const [entry, setEntry] = useState('');

  const changeHandler = e => {
    setEntry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createEntry({text: entry});
  }

  return (
    <div className="entry-form-container">
      <h3>New Entry:</h3>
      <form onSubmit={handleSubmit} className="entry-form">
        <textarea
          type="text"
          name="text"
          // placeholder="What Happened today?"
          rows="3"
          value={entry}
          onChange={changeHandler}
        />
        <div className='buttonDiv'>
          <button type="submit">Submit</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>

      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  createEntry: text => dispatch(createEntryRequest(text))
});

export default connect(null, mapDispatchToProps)(EntryForm);
