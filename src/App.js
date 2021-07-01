
// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
// import SearchButton from "./SearchButton";
import {BrowserRouter, Link, Route, Switch, useParams} from "react-router-dom";


// import { terms } from "./data.js"
 import Terms from './Terms';
import Login from './Login';
import AddNewTerm from './AddNewTerm';
import UpdatingTheTerms from './UpdatingTheTerms';
import AddNewTermBtn from './AddNewTermBtn';
import DeleteTerm from './DeleteTerm';
// import ListOfTerms from './TermsTerm';
import ResourcesList from './ResourcesList';
import ResourceAdd from './ResourceAdd';
// import TermsTerm from './TermsTerm';
import HomePage from './HomePage';
import SingleTermPage from './SingleTermPage';
import ContributorPage from './ContributorPage';
// import ResultPage from "./ResultPage"
// import Popup from './Popup';



function App() {
  const API = "https://wm2-glossary.herokuapp.com/api";
  const [search, setSearch] = useState("");
  const [terms, setTerms] = useState([]);
  const [token, setToken] = useState("");
  const [showBtn, setShowBtn] = useState(true);
  const [open, setOpen] = useState(true);
  // const [res, setRes] = useState([]);

  const handleLoginClick = () => {
    
    setShowBtn((showBtn) => !showBtn)
  };

  // const [password, setPassword] = useState("");
  // useEffect(()=>{
  //   fetch("https://wm2-glossary.herokuapp.com/api/terms/term")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setTerms(data)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })

  // },[])
  
  useEffect(() => {
    fetch("https://wm2-glossary.herokuapp.com/api/terms/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
          setTerms(data)
      })
      .catch(function (error) {
        console.log(error);
      })

  }, []);


  return (
    <div className="wrapper">
      <header className="App-header">
        <div>{`The length of the list is ${terms.length}`}</div>
        <h1>Terms Definition</h1>
        <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/homePage">HomePage</Link></li>
            <li><Link to="/singleTermPage">SingleTermPage</Link></li>
              <li><Link to="/contributorPage">ContributorPage</Link></li>
               {/* <li><Link to="/homePage?type=termsTerm">TermsTerm HomePage</Link></li> */} 
              {/* <li><Link to="/whale?type=blue">Blue Whale</Link></li> */}
            
          </ul>
        </nav>
       
          <Switch>
            <Route path="/homePage">
              <HomePage terms={terms} search={search} setSearch={setSearch} />
            </Route> 
            <Route path="/singleTermPage/:id">
              <SingleTermPage />
           </Route> 
            <Route path="/contributorPage">
              <ContributorPage open={open} setOpen={setOpen} token={token} handleLoginClick={handleLoginClick} showBtn={showBtn} setToken={setToken} API={API}/>
            </Route>
          </Switch>
        </BrowserRouter>
        {/* <AddNewTermBtn handleLoginClick={handleLoginClick} /> */}
        {/* <Terms terms={terms} search={search} />  */}
        

        {/* <Login setToken={setToken} open={open} setOpen={setOpen} /> */}
        {/* <SearchButton search={search} setSearch={setSearch} />
         <TermsTerm /> 
        <Terms terms={terms} search={search} /> */}
        {/* <ResultPage /> */}
        
         {/* <ResourcesList token={token} />
         <AddNewTermBtn handleLoginClick={handleLoginClick} 
        <AddNewTerm token={token} showBtn={showBtn} />
        <ResourceAdd token={token} API={API} />
        <DeleteTerm token={token} />
        <UpdatingTheTerms token={token} setToken={setToken} /> */}
      </header>
    </div>
  );
}

export default App;
