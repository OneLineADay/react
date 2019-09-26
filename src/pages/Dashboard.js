import React, { useEffect } from "react";
import Calendar from "react-calendar";
import { connect } from "react-redux";
import Entries from "containers/Entries/Entries";
import { Navigation } from "containers/Navigation/Navigation";
import EntriesCard from "containers/Entries/EntriesCard";
import EntryForm from "containers/EntryForm/EntryForm";
import { StyledBody } from "utils/styles.utils";

const Dashboard = () => {
  const today = new Date();
  const [date, setDate] = React.useState(today);
  const entries = [];

  const onDateChange = date => {
    setDate(date);
  };

  const setTitle = () => {
    document.title = "One Line A Day";
  };

  useEffect(setTitle, []);

  return (
    <div>
      <Navigation />
      <Entries entries={entries} />
      <EntriesCard />
      <EntryForm />
      <Calendar value={date} onChange={onDateChange} />
      <Entries entries={entries} />
      
    </div>
  );
};

export default connect()(Dashboard);
