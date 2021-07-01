
import React, { useState } from 'react';
import { postData } from './postData';
const ResourcesUpdate = ({ termid, API, token, links, linktypes, setTermid, setLinks, setLinktypes})=>{
    const [resourcesid, setResourcesid] = useState("");

    function resourcesUpdate() {
        postData(`${API}/term/resources/update`, { "resourcesid":resourcesid, 
            "termid": termid, "link": links,
            "linktype": linktypes
        }, token)

            .then(data => {
                console.log(data)
            })
            .catch(function (error) {
                console.log(error);
            })
        };

        return (
            <div>
                <input type="number" name="resourcesid" onBlur={(e)=> setResourcesid(e.target.value)}/>
                <input type="text" name="termid" onBlur={(e) => setTermid(e.target.value)} />
                <input type="url" name="url" onChange={(e) => setLinks(e.target.value)} />
                <input type="url" name="URL" onChange={(e)=>setLinktypes(e.target.value)}/>
                <button onClick={(e) => resourcesUpdate()}>Update Resources</button>
            </div>
        )

} 


export default ResourcesUpdate;