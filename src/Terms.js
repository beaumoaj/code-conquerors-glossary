import React from 'react';


const Terms = ({terms})=>{
    //    const terms=[];
    return(
    <div className="Term">
            
            {terms.map((term) => (
                <div key={term.id}>
                    <h2>{term.term}</h2>
                    <p>{term.definition}</p></div>
            
        ))}
        

</div>
    )
};

export default Terms;