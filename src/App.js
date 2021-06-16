// import logo from './logo.svg';
import React,{useState, useEffect} from 'react';
import './App.css';
import SearchButton from './SearchButton';
import { terms } from "./data.js"
import Terms from './Terms';
import Login from './Login';



function App() {
  const [search, setSearch] = useState("");
    const [terms, setTerms] = useState([]);
  // const [password, setPassword] = useState("");
  useEffect(() => {
    fetch("https://wm2-glossary.herokuapp.com/api/terms")
      .then((res) => res.json())
      .then(setTerms)
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <div>{`The length of the list is ${terms.length}`}</div>
        <h1>Terms Definition</h1>
        <Login />
        <SearchButton search={search} setSearch={setSearch} />
        <Terms terms={terms} search={search} />
      </header>
    </div>
  );
}

export default App;
