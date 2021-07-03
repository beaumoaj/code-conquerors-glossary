import React, { Fragment } from 'react';
import Login from './Login';



import { Redirect, Route, useParams } from 'react-router-dom';
import HomePage from './HomePage';
const ContributorPage = ({setToken, open, setOpen})=>{
    // const {userid}=useParams()
    return(
        
        <div className="page">
            <h5>You must login to view the page at /contributor.</h5>
            {/* <Login setToken={setToken} open={open} setOpen={setOpen} /> */}

            
            
            {/* {userid !== "" ? <Redirect to="/"/> : null}
            <Route component={HomePage} /> */}
            </div>
        
    )
}
export default ContributorPage;