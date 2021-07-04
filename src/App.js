// import logo from './logo.svg';
import React from "react";
import "./App.css";
// import ContributorPage from "./ContributorPage";
import HomePage from "./HomePage";
import ResultTerms from "./ResultTerms";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header></header> */}
        <div>

          <Nav />
          
          {/* <h1>CYF GLOSSARY PAGE</h1> */}

          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ReviewerPage">Reviewer</Link>
              </li>
            </ul>
          </nav> */}

          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            {/* <Route path="/ContributorPage"> */}
            {/* <ContributorPage /> */}
            {/* </Route> */}
            <Route
              path="/ResultTerms"
              render={(props) => <ResultTerms {...props} />}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
