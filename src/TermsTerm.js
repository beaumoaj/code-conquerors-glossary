import React, { useEffect, useState } from 'react';
import YoutubeEmbed from "./YoutubeEmbed";
// import { postData } from './postData'
function TermsTerm() {
    const [term, setTerm] = useState({});
    // const [resources, setResources] = useState("");
    useEffect(() => {
        const getTerm = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "termid": 27,
            })
        };
        fetch("https://wm2-glossary.herokuapp.com/api/terms/term", getTerm)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTerm(data)
            })
            .catch(function (error) {
                console.log(error);
            })



    }, []);

    function embed(resource) {
        let item;
        if (resource.type === "web") {
            item = <li key={resource.resid}>{resource.link}</li>;
        } else {
            item = <YoutubeEmbed embedUrl={resource.link} />;
        }
        return item;
    }
    return (
        <div>
            <header>List of Terms</header>
            <h1>{term.term}</h1>
            <p>{term.definition}</p>

            <ul>
                {
                    term.resources ? (

                        term.resources.map((resource) => {

                            console.log(term.resources)
                            return (<li key={resource.resid}>{embed(resource)}</li>)

                        })
                    )
                        : <h3>There are no resources</h3>
                }
            </ul>
        </div>
    )

};
export default TermsTerm;