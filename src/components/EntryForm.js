import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { createEntryRequest } from "redux/entries/entries.actions";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  border: 2px solid whitesmoke;
  background: #55ccf2;
  padding: 0.5rem 1rem;

  h3 {
    font-family: "Cutive Mono", monospace;
  }

  input {
    width: 100%;
    border-radius: 3px;
    min-height: 2rem;
    padding: 0.8rem;
    margin-bottom: 0.8rem;
    border: 1px solid grey;
  }

  .buttonDiv {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;

    button {
      width: 16%;
      border-radius: 5px;
      border: none;
      box-shadow: 5px 5px #4f4f4f;
      height: 30px;
      align-content: center;
      background: #55ccf2;
      font-family: "Cutive Mono", monospace;
      font-size: 1.2rem;

      &:hover {
        background: #4f4f4f;
        box-shadow: 5px 5px black;
        cursor: pointer;
      }
    }
  }
`;

export const EntryForm = props => {
  const [entry, setEntry] = useState("");

  const changeHandler = e => {
    setEntry(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.createEntry({ text: entry });
  };

  return (
    <StyledContainer>
      <h3>New Entry:</h3>
      <form onSubmit={handleSubmit} className="entry-form">
        <input
          type="text"
          name="text"
          placeholder="What Happened today?"
          value={entry}
          onChange={changeHandler}
        />
        <div className="buttonDiv">
          <button type="submit">Submit</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </form>
    </StyledContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  createEntry: text => dispatch(createEntryRequest(text))
});

export default connect(
  null,
  mapDispatchToProps
)(EntryForm);
