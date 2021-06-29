// import logo from './logo.svg';
import React from "react";
import "./App.css";
import ReviewerPage from "./ReviewerPage";
import HomePage from "./HomePage";
// import SingleTerm from "./SingleTerm";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>CYF GLOSSARY PAGE</h1>
          <p>
            This Is Code Your Future Glossary Page. You Can find Terms And There
            Definition, Including Resources (Videos,Links and Images) For
            Further Learning.
          </p>
        </header>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ReviewerPage">Reviewer</Link>
              </li>
              <li>{/* <Link to="/SingleTerm">SinglePage</Link> */}</li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/ReviewerPage">
              <ReviewerPage />
            </Route>
            {/* <Route path="/SingleTerm">
            <SingleTerm />
          </Route> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}


export default App;
