import React,{useState, useEffect} from 'react';
import ResourcesList from './ResourcesList';
import ResourceAdd from './ResourceAdd';
import ResourcesDelete from './ResourcesDelete';
import ResourcesUpdate from './ResourcesUpdate';
import { useParams } from "react-router-dom";
import YoutubeEmbed from "./YoutubeEmbed";

const ResourcesPage=({token, API, setToken,terms, search})=>{
    // let { id } = useParams();
    // const [term, setTerm] = useState({});
    // //  function handleSubmit(e) {
    // //     e.preventDefault();
    // // }
    // useEffect(() => {

    //     const getTerm = {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             "termid": id,
    //         })
    //     };
    //     fetch("https://wm2-glossary.herokuapp.com/api/terms/term", getTerm)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setTerm(data)
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })



    // }, []);
    // function embed(resource) {
    //     let item;
    //     if (resource.type === "web") {
    //         item = <li key={resource.resid}><a href={resource.link}
    //             target="_blank" rel="noreferrer">{resource.link}</a></li>;
    //     } else {
    //         item = <YoutubeEmbed embedUrl={resource.link} />;
    //     }
    //     return item;
    // }

    return(
        <div>
            {/* <h2>{term.term}</h2>
            <p>{term.definition}</p>
            <ul>
                {
                    term.resources ? (

                        term.resources.map((resource) => {

                            console.log(term.resources)
                            return (<li key={resource.resid}>
                                {embed(resource)}</li>)

                        })
                    )
                    : <h4>{}</h4>
                }
            </ul> */}
            <ResourcesList token={token} />
            <ResourceAdd token={token} API={API} />
            <ResourcesDelete token={token} />
            <ResourcesUpdate token={token} setToken={setToken} />
        </div>
    )

}
export default ResourcesPage;