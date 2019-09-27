import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { createStructuredSelector } from "reselect";
import { selectEntriesList } from "redux/entries/entries.selectors";
import Entry from "components/Entry";
import EntryForm from "components/EntryForm";

const StyledContainer = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Cutive+Mono|Encode+Sans+Semi+Condensed&display=swap");

  display: flex;
  flex-direction: column;
  background: #ffe9a4;
  padding: 1rem 2rem;
  align-content: space-around;
  /* overflow-y: scroll; */
`;

const TopText = styled.h2`
  @import url("https://fonts.googleapis.com/css?family=Cutive+Mono|Encode+Sans+Semi+Condensed&display=swap");
  font-family: "Cutive Mono", monospace;
  font-size: 2rem;
`;

const Entries = ({ entries }) => {
  return (
    <div>
      <TopText>Entries:</TopText>
      <StyledContainer>
        <EntryForm />
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
