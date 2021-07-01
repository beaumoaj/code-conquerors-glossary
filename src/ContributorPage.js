import React from 'react'
import Login from './Login';
import AddNewTerm from './AddNewTerm';
import UpdatingTheTerms from './UpdatingTheTerms';
import AddNewTermBtn from './AddNewTermBtn';
import DeleteTerm from './DeleteTerm';
import ResourcesList from './ResourcesList';
import ResourceAdd from './ResourceAdd';
import ResourcesDelete from './ResourcesDelete';
import ResourcesUpdate from './ResourcesUpdate';
const ContributorPage = ({setToken, setOpen, open, token, showBtn, API, handleLoginClick})=>{
    return(
        <div>
            <h5>You must login to view the page at /contributor.</h5>
            <Login setToken={setToken} open={open} setOpen={setOpen} />
            <ResourcesList token={token} />
             <AddNewTermBtn handleLoginClick={handleLoginClick} /> 
             <AddNewTerm token={token} showBtn={showBtn} /> 
            <ResourceAdd token={token} API={API} />
            <DeleteTerm token={token} />
            <UpdatingTheTerms token={token} setToken={setToken} />
            <ResourcesDelete token={token} />
            <ResourcesUpdate token={token} setToken={setToken}/>
        </div>
    )
}
export default ContributorPage;