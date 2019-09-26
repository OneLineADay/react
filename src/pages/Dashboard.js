import React from "react";
import Calendar from "react-calendar";
import { connect } from "react-redux";

const Dashboard = () => {
  const today = new Date();
  const [date, setDate] = React.useState(today);

  const onDateChange = date => {
    setDate(date);
  };

  return (
    <div>
      <Calendar value={date} onChange={onDateChange} />
    </div>
  );
};

export default connect()(Dashboard);
