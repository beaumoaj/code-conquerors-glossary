import React, { useState } from 'react';
const AddNewTerm = ({ token, showBtn }) => {
    const [newTerm, setNewTerm] = useState("");
    const [definitions, setDefinitions] = useState("");


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
            .then((data) => {
                console.log(data)
            })
            .catch(function (error) {
                console.log(error);
            })


    }

    return (
        <div className="AddTerm">
            <div className={`${showBtn ? "active" : ""} show`}>
                <form onSubmit={handleSubmit}>
                    <label>
                        <h5>Term</h5>

                        <textarea value={newTerm} onChange={(e) => setNewTerm(e.target.value)} />

                    </label>
                    <label>
                        <h5>Definition</h5>
                        <textarea value={definitions}
                            onChange={( e ) => setDefinitions( e.target.value )} />
                    </label>
            
                    <input type="submit" value="Submit" />
                </form>

            </div>
        </div>
    )

}
export default AddNewTerm;