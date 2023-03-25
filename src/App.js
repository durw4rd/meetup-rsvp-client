import logo from './logo.svg';
import ListUpcomingEvents from './components/listUpcomingEvents.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <ListUpcomingEvents />
      </header>
    </div>
  );
}

export default App;
