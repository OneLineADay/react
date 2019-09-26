import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectEntriesList } from "redux/entries/entries.selectors";
import Entry from "components/Entry";

const Entries = ({ entries }) => {
  return (
    <div>
      {entries.map(({ id, ...rest }) => (
        <Entry key={id} {...rest} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  entries: selectEntriesList
});

export default connect(mapStateToProps)(Entries);
