 import React from 'react';
import TermsTerm from './TermsTerm';
import SearchButton from "./SearchButton";
import Terms from './Terms';


 
 const HomePage=({search, setSearch, terms})=>{
    return(
        <div>
            {/* <SearchButton search={search} setSearch={setSearch} /> */}
            
                 {/* <TermsTerm />    */}
                <Terms terms={terms} search={search} /> 
        </div>
    )
};
export default HomePage;