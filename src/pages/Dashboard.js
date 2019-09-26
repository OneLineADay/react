import React, { useEffect } from "react";
import Calendar from "react-calendar";
import { connect } from "react-redux";
import { fetchEntriesRequest } from "redux/entries/entries.actions";
import { Navigation } from "containers/Navigation/Navigation";
import Entries from "containers/Entries/Entries";
import EntriesCard from "containers/Entries/EntriesCard";
import EntryForm from "containers/EntryForm/EntryForm";
import { StyledBody, CalDiv, StyledContainer, EntryCardDiv, EntryFormDiv, EntryDiv } from "pages/DashboardStyles";

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
      <Navigation /> {/* Nav */}
      <StyledContainer>

        <CalDiv>
          <Calendar value={date} onChange={onDateChange} /> {/* Calendar */}
        </CalDiv>

        <Entries /> {/* Entry */}
        
        <EntryDiv>
          <EntryFormDiv>
            <EntryForm /> {/* Entry Form */}
          </EntryFormDiv>

          <EntryCardDiv>
            <EntriesCard /> {/* Entry Card */}
          </EntryCardDiv>
        </EntryDiv>
          
        

        
      </StyledContainer>
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
