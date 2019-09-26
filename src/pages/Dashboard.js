import React, { useEffect } from "react";
import Calendar from "react-calendar";
import { connect } from "react-redux";

const Dashboard = () => {
  const today = new Date();
  const [date, setDate] = React.useState(today);

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
    </div>
  );
};

export default connect()(Dashboard);
