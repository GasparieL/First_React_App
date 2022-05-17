import logo from './logo.svg';
import './App.css';
import { Introduction } from './components/IntroductionComponent';
import React,  {useState} from "react"


function App() {
  let [nameInput, setNameInput] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Introduction setName = {setNameInput}/>
        {nameInput}
        
        {/* <Introduction foo={5}/>
        <Introduction foo = {3} /> */}

      </header>
    </div>
  );
}

export default App;
