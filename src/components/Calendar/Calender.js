import React from "react";
import ReactCalendar from "react-calendar";

const Calendar = () => {
  const today = new Date();
  const [date, setDate] = React.useState(today);

  const onDateChange = date => {
    setDate(date);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    console.log(`${day}-${month}-${year}`);
  };

  return <ReactCalendar value={date} onChange={onDateChange} />;
};

export default Calendar;
