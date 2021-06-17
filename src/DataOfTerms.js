import React from "react";
import terms from "./listOfTerms";
import TermUpdate from "./TermUpdate";

const DataOfTerms = ({searchTerm}) =>
{
    const filteredTerms = terms.filter( ( term )=>term.term.toLowerCase().includes(searchTerm.toLowerCase()))
    return (
      <div>
        <TermUpdate />
        {filteredTerms.map((term) => (
          <li key={term.id}>
            {term.term}
            {term.definition}
          </li>
        ))}
      </div>
    );
}

export default DataOfTerms;