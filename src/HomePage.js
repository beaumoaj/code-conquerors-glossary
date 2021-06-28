import React,{useState} from "react";
import terms from "./Data";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // const handleSearch = (e) => {
  //   setSearchTerm(e.target.value);
  // };

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
    
        <input
          type="text"
          placeholder="Search Terms Here..."
          onChange={event => {setSearchTerm(event.target.value)}}
        />
      {terms.filter( ( term ) =>
      {
        if ( searchTerm == "" )
        {
          return term
        } else if ( term.term.toLowerCase().includes( searchTerm.toLowerCase() ) ){
          return term
        }
        })
        .map( ( term ) =>
      {
        return (
          <div key={term.id}>
            <h4>{term.term}</h4>
            <p>{term.definition}</p>
            {term.link && (
              <a href={term.link} target="_blank" rel="noreferrer">
                Further Reading
              </a>
            )}
          </div>
        );
      })}
            
          {/* <div className="Data">
         {terms.map((term) => (
          <li className="term" key={term.id}>
            <p>{term.term}</p>
            <p>{term.definition}</p>
            {term.link && (
              <a href={term.link} target="_blank" rel="noreferrer">
                Further Reading
              </a>
            )}
          </li>
        ))}
      </div> */}
        
        {/* <button type="submit" onSubmit={callSearchFunction}>Search</button> */}
    
    
    </div>
  );
};

export default HomePage;
