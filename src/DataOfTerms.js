import React from "react";
import terms from "./listOfTerms";


const DataOfTerms = () =>
{
    

    return (
      <div className="Data">
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
      </div>
    );
}     

export default DataOfTerms;