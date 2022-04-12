import logo from './logo.svg';
import './App.scss'
import Component from './example/Component';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>xin chào Nam đz</p>
        <Component />
      </header>
    </div>
  );
}

export default App;
