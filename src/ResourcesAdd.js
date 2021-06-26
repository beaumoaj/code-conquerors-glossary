import React, { useEffect, useState } from 'react';
 import { postData } from './postData'

function ResourcesAdd({ token }) {
    const [termid, setTermid] = useState(1);
     const [res, setRes] = useState([]);
    const API = "https://wm2-glossary.herokuapp.com/api";
    function handleSubmit() {
       
        console.log({ "termid": 1 })
        postData(`${API}/term/resources`, { "termid": 1 },token)


            .then((data) => {
                console.log(data);
                setRes(data)
            })
            .catch(function (error) {
                console.log(error);
            })

    }
    useEffect(()=>{handleSubmit()
    },[])
    return (
        <div>
              <div>{`The length of term ${res.length}`}</div>
        </div>



    )
}
export default ResourcesAdd;