
import React from 'react';
import { postData } from './postData';
const ResourcesDelete = ({ resourcesid, API, token, setResourcesid }) => {
   

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
        <div>
            <input type="number" name="resourcesid" onBlur={(e) => setResourcesid(e.target.value)} />
            <button onClick={(e) => resourcesDelete()}>Delete Resources</button>
        </div>
        
    )
}
export default ResourcesDelete;