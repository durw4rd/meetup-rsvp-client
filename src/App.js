import React, { useState } from 'react';
import RsvpOptions from './components/rsvpOptions.js';
import ListUpcomingEvents from './components/listUpcomingEvents.js';
import ListScheduledJobs from './components/getScheduledJobs.js';
import './App.css';

function App() {

  const [scheduledJobs, setScheduledJobs] = useState([]);

  const handleRSVPclick = (event) => {
    setScheduledJobs() // needs work
  }

  return (
    <div className="App">
      <header className="App-header">
        <br />
        {/* <RsvpOptions /> */}
        <br/>
        <ListUpcomingEvents />
        <br/>
        <br/>
        <ListScheduledJobs />
      </header>
    </div>
  );
}

export default App;
