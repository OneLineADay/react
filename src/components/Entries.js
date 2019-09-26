import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { createStructuredSelector } from "reselect";
import { selectEntriesList } from "redux/entries/entries.selectors";
import Entry from "components/Entry";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Entries = ({ entries }) => {
  return (
    <StyledContainer>
      {entries.map(({ entryid, ...rest }) => (
        <Entry key={entryid} {...rest} />
      ))}
    </StyledContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  entries: selectEntriesList
});

export default connect(mapStateToProps)(Entries);
