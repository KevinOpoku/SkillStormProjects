import logo from './logo.svg';
import './App.css';
import {CreateFlight} from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CreateFlight />
        <p>
          PlaceHolder Text
        </p>
        <a
          className="App-link"
          href="https://www.expedia.com/Flights"
          target="_blank"
          rel="noopener noreferrer"
        >
          What flights are available?
        </a>
      </header>
    </div>
  );
}

export default App;
