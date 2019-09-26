import React, { useState } from "react";
import { connect } from "react-redux";

const initialState = {
  entryText: ""
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
  };

  return (
    <div className="entry-form-container">
      <h1>Add an Entry</h1>
      <form onSubmit={handleSubmit} className="entry-form">
        <textarea
          type="text"
          name="entryText"
          placeholder="What Happened today?"
          rows="3"
          onChange={changeHandler}
        />
        <button type="submit">Submit</button>
        <button>Edit</button>
        <button>Delete</button>
      </form>
    </div>
  );
};

// const mapStateToProps = state => {
//     return {
//         entryList: state.entries
//     }
// }

export default connect()(EntryForm);
