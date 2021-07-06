 import React from 'react';
//  import TermsTerm from './TermsTerm';
//  import SearchButton from "./SearchButton";
 import Terms from './Terms';
 import AddNewTermBtn from "./AddNewTermBtn";


const HomePage = ({ search, setSearch, terms, handleLoginClick, token }) => {
  return (
    <div className="home">
      {/* <SearchButton search={search} setSearch={setSearch} /> */}

      {/* <TermsTerm />    */}
      <Terms terms={terms} search={search} />
      {/* <AddNewTermBtn/> */}
      {token ?(<AddNewTermBtn handleLoginClick={handleLoginClick}/>) : null}
    </div>
  );
};
export default HomePage;