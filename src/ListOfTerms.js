import React,{useEffect} from 'react';
// import { postData } from './postData'
function ListOfTerms({setRes, res, termid, definitions}){
    // const [id, setId] = useState([])
    useEffect(() => {
        const getTerm={
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "termid":1
            })
            };
        fetch("https://wm2-glossary.herokuapp.com/api/terms/term", getTerm)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                //   setRes(data)
            })
            .catch(function (error) {
                console.log(error);
            })
        
            

    }, []);
    
        
        
    
        
        return(
            <div>
                <header>List of Terms</header>
        <h1>{termid}</h1>
        <p>{definitions}</p>
        

                <ul>
       

                </ul>
            </div>
        )

};
export default ListOfTerms;