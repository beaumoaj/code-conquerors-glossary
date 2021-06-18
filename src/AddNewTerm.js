import React, { useEffect, useState } from 'react';
// import { terms } from './data';
const AddNewTerm = ({ token }) => {
    const [newTerm, setNewTerm] = useState("");
    const [definitions, setDefinitions] = useState("");

    // const[languages, setLanguages]= useState("");
    function handleSubmit(e) {
        e.preventDefault();
        console.log(JSON.stringify({ "term": newTerm, "definition": definitions, "userid": 1 }));

        fetch("https://wm2-glossary.herokuapp.com/api/terms/add",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ "term": newTerm, "definition": definitions, "userid": 1 }),
            })
            .then((response) => response.json())
            .then((data) => console.log(data))


    }

    return (
        <div className="NewTerm">
            <form onSubmit={handleSubmit}>
                <label>
                    <h5>Term</h5>
                    <input type="text" value={newTerm} onChange={(e) => setNewTerm(e.target.value)} />
                </label>
                <label>
                    <h5>Definition</h5>
                    <input type="text"
                        value={definitions}
                        onChange={(e) => setDefinitions(e.target.value)}
                    />
                </label>
                {/* <label>
                    <h5>languages</h5>
                    <input type=""
                        value={definitions}
                        onChange={(e) => setLanguages(e.target.value)}
                    />
                </label> */}
                <button type="submit">Add New Term</button>
            </form>

        </div>
    )

}
export default AddNewTerm;