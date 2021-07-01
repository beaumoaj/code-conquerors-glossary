import React,{useState, useEffect} from 'react';
import { useParams } from "react-router-dom";


const SingleTermPage =()=>{
    let { id } = useParams();
    const [term, setTerm] = useState({});
    useEffect(() => {
        const getTerm = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "termid": id,
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
    

    return(
        <div>
            {/* <h5>{term.termid}</h5> */}
            <h5>{term.term}</h5>
            <p>{term.definition}</p>
            <ul></ul>
            
        </div>
    )
};
export default SingleTermPage;