import React from "react";
import ReactCalendar from "react-calendar";

const Calendar = () => {
  const today = new Date();
  const [date, setDate] = React.useState(today);

  const onDateChange = date => {
    setDate(date);
  };

  return <ReactCalendar value={date} onChange={onDateChange} />;
};

export default Calendar;
