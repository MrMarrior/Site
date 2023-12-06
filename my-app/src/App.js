import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar/Navbar.jsx'
import { Popular } from './Components/popular/Popular.jsx';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
        <Popular></Popular>
      </header>
    </div>
  );
}

export default App;
