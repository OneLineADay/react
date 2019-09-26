import React, { useEffect } from "react";
import Calendar from "react-calendar";
import { connect } from "react-redux";
import Entries from "components/Entries";
import { fetchEntriesRequest } from "redux/entries/entries.actions";

const Dashboard = ({ fetchEntries }) => {
  const today = new Date();
  const [date, setDate] = React.useState(today);

  const onDateChange = date => {
    fetchEntries(date);
    setDate(date);
  };

  const setTitle = () => {
    document.title = "One Line A Day";
  };

  useEffect(setTitle, []);

  return (
    <div>
      <Calendar value={date} onChange={onDateChange} />
      <Entries />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchEntries: date => dispatch(fetchEntriesRequest(date))
});

export default connect(
  null,
  mapDispatchToProps
)(Dashboard);
