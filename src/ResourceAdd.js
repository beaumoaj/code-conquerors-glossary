
import React, { useState } from 'react';
import { postData } from './postData'
const ResourceAdd = ({ API, token}) =>{
    const [links, setLinks] = useState("");
    const [linktypes, setLinktypes] = useState();
    const [termid, setTermid] = useState(1);
    function handleSubmit(e) {
        e.preventDefault();
    }

    function resourceAdd(){
        postData(`${API}/terms/resources/add`,{ "termid": termid, "link":links, 
    "linktype":linktypes}, token)

            .then(data => {
                console.log(data)
            })
            .catch(function (error) {
                console.log(error);
            })

    }


    return(
        <div className="resources">
            <form onSubmit={handleSubmit}>
                <h3>Resource Add</h3><br></br>Term Id:
            <input type="text" name="termid" onBlur={(e) => setTermid(e.target.value)} />
                
            
            <br></br>
            <label>Link:
            <input type="url" name="url" onChange={(e)=>setLinks(e.target.value)}/>
                </label>
                <br></br>
                <label>Link Type
            <input type="text" name="type" onChange={(e) => setLinktypes(e.target.value)} />
            </label>
            <button onClick={(e) => resourceAdd()}>Add Resources</button>
            </form>
        </div>
    )


}
export default ResourceAdd;

