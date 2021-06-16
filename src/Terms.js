import React from 'react';


 const Terms = ({ terms, search }) => {
    const filteredTerms = terms.filter((term) =>
        term.term.toLowerCase().includes(search.toLowerCase()
        ))
    return (
        <div className="Term">

            {filteredTerms.map((term) => (
                <div key={term.id}>
                    <h2>{term.term}</h2>
                    <p>{term.definition}</p></div>

            ))}


        </div>
    )
};

export default Terms;