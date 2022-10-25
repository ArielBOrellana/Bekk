import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Halla balla :D
        </p>
        <a
          className="App-link"
          href="https://www.nrk.no/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lær deg react i dag eller i morgen.. på nrk?
        </a>
      </header>
    </div>
  );
}

export default App;
