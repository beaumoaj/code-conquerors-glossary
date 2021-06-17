import React from 'react';

const SearchFile = ({searchTerm, setSearchTerm}) =>
{
  // const [searchTerm, setSearchTerm] = useState( "" );
  
  const handleSearch = ( e ) => {
    setSearchTerm(e.target.value)
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
        <form>
          <input
            type="text"
            placeholder="Search Terms"
            onChange={handleSearch}
            value={searchTerm}
          />
          {/* <button type="submit" onSubmit={callSearchFunction}>Search</button> */}
        </form>
      </div>
    );
};

export default SearchFile;