import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { createStructuredSelector } from "reselect";
import { selectEntriesList } from "redux/entries/entries.selectors";
import Entry from "components/Entry";
import EntryForm from '../containers/EntryForm/EntryForm';

const StyledContainer = styled.div`
@import url('https://fonts.googleapis.com/css?family=Cutive+Mono|Encode+Sans+Semi+Condensed&display=swap');

  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: #ffe9a4;
  margin: 2rem;
  align-content: space-around;
  
  .entry-form-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* margin-left: 25%; */
    textarea{
      width: 100%;
      border-radius: 7px;
      margin-bottom: .8rem;
    }
    h3{
      font-family: 'Cutive Mono', monospace;
    }
    .buttonDiv{
      display: flex;
      width: 60%;
      justify-content: space-around;
      margin: auto;
      margin-bottom: 2rem;

      button{
        /* padding: 0.8rem; */
        width: 10%;
        border-radius: 5px;
        border: none;
        box-shadow: 5px 5px #4f4f4f;
        height: 30px;
        align-content: center;
        margin: auto;
        background: #55ccf2;
        font-family: 'Cutive Mono', monospace;
        font-size: 1.2rem;
      }
    }
  }
`;

const TopText = styled.div`
@import url('https://fonts.googleapis.com/css?family=Cutive+Mono|Encode+Sans+Semi+Condensed&display=swap');
font-family: 'Cutive Mono', monospace;
margin: 2rem 2rem 0 2rem;
font-size: 2rem;
`;

const Entries = ({ entries }) => {
  return (
    <div>
    <TopText>Entries:</TopText>
    <StyledContainer>
      <EntryForm />
      {entries.map(({ id, ...rest }) => (
        <Entry key={id} {...rest} />
      ))}
    </StyledContainer>
    </div>

  );
};

const mapStateToProps = createStructuredSelector({
  entries: selectEntriesList
});

export default connect(mapStateToProps)(Entries);
