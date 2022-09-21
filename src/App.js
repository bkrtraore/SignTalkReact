import logo from './SIGN.png';
import './styles/App.css';


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to Sign Talk 
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <button id="button-go" href="https://google.fr">
          C'est parti ! 
        </button>
      </header>
    </div>
  );
}

export default App;
