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
      width: 70%;
      border-radius: 7px;
      margin-bottom: .8rem;
    }
    h3{
      font-family: 'Cutive Mono', monospace;
    }
    .buttonDiv{
      display: flex;
      width: 60%;
      justify-content: flex-start;
      /* margin: auto; */
      margin-bottom: 2rem;

      button{
        /* padding: 0.8rem; */
        width: 16%;
        border-radius: 5px;
        border: none;
        box-shadow: 5px 5px #4f4f4f;
        height: 30px;
        align-content: center;
        /* margin: auto; */
        margin: 0 1rem 0 1rem;
        background: #55ccf2;
        font-family: 'Cutive Mono', monospace;
        font-size: 1.2rem;

        &:hover{
          background: #4f4f4f;
          box-shadow: 5px 5px black;
        }
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
      <EntryForm/>
      {entries.map(({ entryid, ...rest }) => (
        <Entry key={entryid} {...rest} />
      ))}
    </StyledContainer>
    </div>

  );
};

const mapStateToProps = createStructuredSelector({
  entries: selectEntriesList
});

export default connect(mapStateToProps)(Entries);
