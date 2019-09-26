import React from "react";
import Entry from "./Entry";

const Entries = ({ entries }) => {
  return (
    <div>
      {entries.map(entry => (
        <Entry key={entry.id} />
      ))}
    </div>
  );
};

export default Entries;
