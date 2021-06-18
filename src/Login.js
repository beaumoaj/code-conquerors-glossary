import React, { useState } from 'react';
// import { terms } from './data';
const Login = ({ setToken }) => {
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
            .then((data) => setToken(data.auth))
    }
    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Type Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    type="password"
                    value={password}
                    placeholder="password"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}
export default Login;