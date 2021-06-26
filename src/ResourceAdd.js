// POST / terms / resources / add will insert a new resource for a specific term.Parameters are termid, link, linktype(video or web), language(AUTH)

import React, { useState } from 'react';
import { postData } from './postData'
const ResourceAdd = ({termid, API, token, setTermid}) =>{
    const [links, setLinks] = useState("");
    const [linktypes, setLinktypes] = useState();

    function resourceAdd(){
        postData(`${API}/term/resources/add`,{ "termid": termid, "link":links, 
    "linktypes":linktypes}, token)

            .then(data => {
                console.log(data)
            })
            .catch(function (error) {
                console.log(error);
            })

    }
    return(
        <div>
            <input type="text" name="termid" onBlur={(e) => setTermid(e.target.value)} />
            <input type="url" name="url" onChange={(e)=>setLinks(e.target.value)} />
            <a href="url"/>
            <button onClick={(e) => resourceAdd()}>Add Resources</button>
        </div>
    )


}
export default ResourceAdd;

