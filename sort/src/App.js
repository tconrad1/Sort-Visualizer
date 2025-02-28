import logo from './logo.svg';
import './css/App.css';
import './css/List.css';
import ListManip from './ListManip';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Sort Visualizer, click the buttons below to start</h1>
        <ListManip></ListManip>
      </header>
    </div>
    
  );
}

export default App;
