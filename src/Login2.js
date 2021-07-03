import React, { useState } from 'react';
 import { Redirect, Route, useHistory, useLocation } from "react-router-dom";
 import HomePage from './HomePage';
// import Popup from './Popup';
// import { terms } from './data';
// const history = useHistory();
// const location = useLocation();
const Login = ({ setToken }) => {
    const [open, setOpen] = useState(true);
    let loggin;
    // const {`token:  {"/resourcesPage"}} = location;
    // history.push("/resourcesPage")
    
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("https://wm2-glossary.herokuapp.com/api/contributor/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password, }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setToken(data.auth)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    
   
    
    // <Route exact path="/">
    //     { loggin? <Redirect to="/resourcesPage" /> :
    //     <HomePage />}
    // </Route>
    return open ?(
        
        <div className="modal-wrapper">
            <div className="form-box solid" >
            <div className="modal-box">Contributor Login</div>
          
           
            <form onSubmit={handleSubmit}>
                <label>Username</label><br></br>
                <input
                    type="email"
                   
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}className="login-box"
                /><br></br>
                <label>Password</label><br></br>
                <input
                    type="password"
                    value={password}
                   
                    onChange={(event) => setPassword(event.target.value)}className="login-box"
                /><br></br>
                <button type="submit" className="submit-btn">SUBMIT</button>
                <button onClick={(e) => { e.preventDefault();setOpen(false)}}>X</button>   
              </form> 
              </div>
            </div>   
    ) : <button onClick={() => setOpen(true)} className="open-btn">LOGIN</button>;

};
export default Login;