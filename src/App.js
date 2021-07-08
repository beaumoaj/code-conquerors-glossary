

import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch,} from "react-router-dom";
import ResourcesPage from "./ResourcesPage"
import Terms from './Terms';
import SingleTermPage from './SingleTermPage';
import ContributorPage from './ContributorPage';
import TermPage from './TermPage';

function App() {
  // const userid="";
  const API = "https://wm2-glossary.herokuapp.com/api";
  const [search, setSearch] = useState("");
  const [terms, setTerms] = useState([]);
  const [token, setToken] = useState("");
  const [showBtn, setShowBtn] = useState(true);
   const [open, setOpen] = useState(true);
  
  const handleLoginClick = () => {

    setShowBtn((showBtn) => !showBtn)
  };

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
    <div className="wrapper" id="main">
      <BrowserRouter>
        
        <Switch>

          <Route exact path="/singleTermPage/:id" component={SingleTermPage}>
            <SingleTermPage setToken={setToken} token={token} />
          </Route>

          <Route exact path="/contributorPage">
            <ContributorPage
              open={open}
              setOpen={setOpen}
              token={token}
              handleLoginClick={handleLoginClick}
              showBtn={showBtn}
              setToken={setToken}
              API={API}
            />
          </Route>

          <Route exact path="/resourcesPage">
            <ResourcesPage API={API} token={token} setToken={setToken} />
          </Route>

          <Route exact path="/termPage">
            <TermPage
              setToken={setToken}
              token={token}
              showBtn={showBtn}
              handleLoginClick={handleLoginClick}
            />
          </Route>

          <Route exact path="/">
            <Terms
              terms={terms}
              search={search}
              setSearch={setSearch}
              setToken={setToken}
              handleLoginClick={handleLoginClick}
              showBtn={showBtn}
              token={token}
            />
          </Route>

        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
