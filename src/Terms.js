import React from 'react';


const Terms = ({ terms, search }) => {
    const filteredTerms = terms.filter((term) =>
        term.term.toLowerCase().includes(search.toLowerCase()
        ))
    return (
        <div className="Terms">

            {filteredTerms.map((term) => (
                <div key={term.id}>
                    <h2 className="container">{term.term}
                        <p>{term.definition}</p>
                    </h2>
                </div>


            ))}


        </div>
    )
};

export default Terms;