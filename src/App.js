
// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

// import SearchButton from './SearchButton';
// import { terms } from "./data.js"
// import Terms from './Terms';
// import Login from './Login';
// import AddNewTerm from './AddNewTerm';
// import UpdatingTheTerms from './UpdatingTheTerms';
// import AddNewTermBtn from './AddNewTermBtn';
// import DeleteTerm from './DeleteTerm';
// import ListOfTerms from './ListOfTerms';
// import ResourcesList from './ResourcesList';
// import ResourceAdd from './ResourceAdd';
import HomePage from './HomePage';
import DataOfTerms from "./DataOfTerms";

import ResultPage from "./ResultPage"
// import Popup from './Popup';



function App() {
  const [search, setSearch] = useState("");
  const [terms, setTerms] = useState([]);
  // const [token, setToken] = useState("");
  // const [showBtn, setShowBtn] = useState(true);
  // const [open, setOpen] = useState(true);
  // const [res, setRes] = useState([]);

  // const handleLoginClick = () => {
  //   setShowBtn((showBtn) => !showBtn)
  // };

  // const [password, setPassword] = useState("");
  // useEffect(() => {
  //   fetch("https://wm2-glossary.herokuapp.com/api/terms/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setTerms(data)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })

  // }, []);


  return (
    <div className="App">
      <header className="App-header">
        {/* <div>{`The length of the list is ${terms.length}`}</div> */}
        <h1>Terms Definition</h1>

        {/* <Login setToken={setToken} open={open} setOpen={setOpen} /> */}
        {/* <ListOfTerms /> */}

        {/* <SearchButton search={search} setSearch={setSearch} /> */}
        <HomePage />
        {/* <DataOfTerms /> */}
        <ResultPage />
        {/* <Terms terms={terms} search={search} /> */}
        {/* <ResourcesList token={token} /> */}
        {/* <AddNewTermBtn handleLoginClick={handleLoginClick} /> */}
        {/* <AddNewTerm token={token} showBtn={showBtn} /> */}
        {/* <ResourceAdd token={token} /> */}
        {/* <DeleteTerm token={token} /> */}
        {/* <UpdatingTheTerms token={token} setToken={setToken} /> */}
      </header>
    </div>
  );
}

export default App;
