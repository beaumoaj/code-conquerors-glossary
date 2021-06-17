import React, {useState} from 'react';
import './App.css';
import SearchFile from './SearchFile';
// import TermUpdate from './TermUpdate';
import terms from './listOfTerms';
import DataOfTerms from './DataOfTerms';


function App()
{
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <div>{`the length of the list is ${ terms.length }`}</div>
      <SearchFile searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      {/* <TermUpdate /> */}
      <DataOfTerms searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
