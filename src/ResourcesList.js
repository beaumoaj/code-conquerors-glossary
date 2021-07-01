import React, { useEffect, useState } from 'react';
 import { postData } from './postData'

function ResourcesList({ token }) {
    const [termid, setTermid] = useState(1);
    
     const [resources, setResources] = useState([]);
    const API = "https://wm2-glossary.herokuapp.com/api";
    function handleSubmit() {
       
        console.log({ "termid": 1 })
        postData(`${API}/term/resources`, { "termid": termid },token)


            .then((data) => {
                console.log(data);
                setResources(data)
            })
            .catch(function (error) {
                console.log(error);
            })

    }
    useEffect(()=>{handleSubmit()
    },[])
    return (
        <div>
              <div>{`The length of term ${resources.length}`}</div>
        </div>



    )
}
export default ResourcesList;