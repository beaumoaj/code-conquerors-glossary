import React,{useEffect} from 'react';
// import { postData } from './postData'
function ListOfTerms({setRes, res}){
    // const [id, setId] = useState([])
    useEffect(() => {
        const getTerm={
            method: "POST",
            body:{
                "termid":1
            }
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
                
                <ul>
        {/* {termid.map(term => <li key={term.id}>{term.term}</li>)} */}

                </ul>
            </div>
        )

};
export default ListOfTerms;