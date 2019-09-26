import React, { useEffect } from "react";
import Calendar from "react-calendar";
import { connect } from "react-redux";
import { fetchEntriesRequest } from "redux/entries/entries.actions";
import { Navigation } from "containers/Navigation/Navigation";
import Entries from "components/Entries";
import { StyledBody } from "pages/DashboardStyles";

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
    <StyledBody>
      <Navigation />
      <div>
        <div>
          <Calendar value={date} onChange={onDateChange} />
        </div>

        <Entries />
      </div>
    </StyledBody>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchEntries: date => dispatch(fetchEntriesRequest(date))
});

export default connect(
  null,
  mapDispatchToProps
)(Dashboard);
