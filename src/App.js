import React from "react"
import Searchbar from './Searchbar';
import './App.css';
import Data from "./listOfTerms";

function App() {
  return (
    <div className="App">
      <h1>Glossary</h1>
      <Searchbar/>
      {/* {listOfTerms.map} */}
    </div>

  );
}

export default App;
