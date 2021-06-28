import React, { useState } from "react";
import DataOfTerms from "./DataOfTerms";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // const resetInput = () =>
  // {
  //   setSearchTerm("")
  // }

  // const callSearchFunction = ( e ) =>
  // {
  //   e.preventDefault();
  //   setSearchTerm.SearchFile( searchTerm );
  //   resetInput();
  // }

  return (
    <div>
      <h1>CYF GLOSSARY PAGE</h1>
      <p>
        This Is Code Your Future Glossary Page. You Can find Terms And There
        Definition, Including Resources (Videos,Links and Images) For Further
        Learning.
      </p>
      <form onSubmit={<DataOfTerms />}>
        <input
          type="text"
          placeholder="Search Terms Here..."
          onChange={handleSearch}
          value={searchTerm}
        />
        {/* <button type="submit" onSubmit={callSearchFunction}>Search</button> */}
      </form>
    </div>
  );
};

export default SearchPage;
