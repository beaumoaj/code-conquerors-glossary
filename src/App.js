// import logo from './logo.svg';
import './App.css';
import SearchButton from './SearchButton';
  import {terms} from "./data.js"
import Terms from './Terms';



function App() {
  return (
    <div className="App">
      <header className="App-header">
  <div>{`The length of the list is ${terms.length}`}</div>
        <h1>Terms Definition</h1>
        <SearchButton />
        <Terms terms={terms}/>
        
        
      </header>
    </div>
  );
}

export default App;
