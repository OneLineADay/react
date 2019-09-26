import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { createStructuredSelector } from "reselect";
import { selectEntriesList } from "redux/entries/entries.selectors";
import Entry from "components/Entry";
import EntryForm from '../containers/EntryForm/EntryForm';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #ffe9a4;
  margin: 2rem;
  align-content: space-around;
  

  .entry-form-container{
    display: flex;
    justify-content: center;
    flex-direction: column;


    
    textarea{
      margin: auto;
      width: 80%;
    }
  }
`;

const TopText = styled.div`
@import url('https://fonts.googleapis.com/css?family=Cutive+Mono|Encode+Sans+Semi+Condensed&display=swap');
font-family: 'Cutive Mono', monospace;
margin: 2rem 2rem 0 2rem;
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
