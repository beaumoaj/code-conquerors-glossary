import React, { useState } from 'react';
// import Popup from './Popup';
// import { terms } from './data';
const Login = ({ setToken, setOpen, open }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
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
    ) : <button onClick={() => setOpen(true)} className="open-btn">OPEN</button>;

};
export default Login;