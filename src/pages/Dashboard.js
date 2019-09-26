import React, { useEffect } from "react";
import Calendar from "react-calendar";
import { connect } from "react-redux";
import Entries from "../components/Entries";

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
      <Calendar value={date} onChange={onDateChange} />
      <Entries entries={entries} />
    </div>
  );
};

export default connect()(Dashboard);
