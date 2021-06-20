// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import SearchButton from './SearchButton';
import { terms } from "./data.js"
import Terms from './Terms';
import Login from './Login';
import AddNewTerm from './AddNewTerm';
import UpdatingTheTerms from './UpdatingTheTerms';
import AddNewTermBtn from './AddNewTermBtn';



function App() {
  const [search, setSearch] = useState("");
  const [terms, setTerms] = useState([]);
  const [token, setToken] = useState("");
  const [showBtn, setShowBtn] = useState(true);

  const handleLoginClick =()=>{
    setShowBtn((showBtn) => !showBtn)
  };
  
  // const [password, setPassword] = useState("");
  useEffect(() => {
    fetch("https://wm2-glossary.herokuapp.com/api/terms")
      .then((res) => res.json())
      .then(setTerms)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>{`The length of the list is ${terms.length}`}</div>
        <h1>Terms Definition</h1>
        <Login setToken={setToken} />
        <SearchButton search={search} setSearch={setSearch} />
        <Terms terms={terms} search={search} />
        <AddNewTermBtn handleLoginClick={handleLoginClick} />
        <AddNewTerm token={token} showBtn={showBtn}/>
        <UpdatingTheTerms />
      </header>
    </div>
  );
}

export default App;
