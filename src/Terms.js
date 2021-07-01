import React from 'react';
import YoutubeEmbed from "./YoutubeEmbed";
import { useHistory } from 'react-router-dom';


const Terms = ({ terms, search, resources }) => {
    const filteredTerms = terms.filter((term) =>
        term.term.toLowerCase().includes(search.toLowerCase()
        ))
    function embed(resource) {
        console.log(resources);
        let item;
        if (resource.type === "web") {
            item = <li key={resource.resid}>{resource.link}</li>;
        } else {
            item = <YoutubeEmbed embedUrl={resource.link} />;
        }
        return item;
    }
    const history = useHistory();

    const handleClick = (id) => {
        history.push(`/singleTermPage/${id}`);
    }
    return (
        <div className="Terms">
            {filteredTerms.map((term) => (

                <div key={term.id}>
                    <h2 className="container" onClick={()=>handleClick(term.id)}>{term.term}</h2>
                        <p>{term.definition}</p>
                         {term.resources ? ( 
                        
                    term.resources.map((resource) =>
                        <li key={resource.resid}> 
                         
                            <h3>{resource.link}</h3>  
                            {embed(resource.web)}</li>)
                         ) 
                         :
                         <h3>There are no resources</h3>
                         }      
                </div>
            ))}
        </div>
    )
};

export default Terms;