
import React, { useState } from 'react';
import { postData } from './postData';
const ResourcesDelete = ({  API, token }) => {
    const[resourcesid, setResourcesid]=useState("");
   

    function resourcesDelete() {
        postData(`${API}/term/resources/delete`, {
            "resourcesid": resourcesid,
        }, token)

            .then(data => {
                console.log(data)
            })
            .catch(function (error) {
                console.log(error);
            })
    };
    return(
        <div className="resources">
            <h3>Delete Resources</h3>
            <input type="number" name="resourcesid" onBlur={(e) => setResourcesid(e.target.value)} />
            <button onClick={(e) => resourcesDelete()}>Delete Resources</button>
        </div>
        
    )
}
export default ResourcesDelete;