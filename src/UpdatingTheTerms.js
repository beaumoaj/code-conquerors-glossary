import React, { useState } from 'react';
export default function UpdatingTheTerms({ token }) {
    const [termId, setTermId] = useState("");
    const [terms, setTerms] = useState("");
    const [definitions, setDefinitions] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        console.log(JSON.stringify({ "termid": termId, "terms": terms, "definition": definitions}))
        fetch("https://wm2-glossary.herokuapp.com/api/terms/update",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ "termid": termId, "term": terms, "definition": definitions }),
            })
            .then((response) => response.json())
            .then((data) => console.log(data))



    }
    return (
        <div className="update">
            <form onSubmit={handleSubmit}>

                <label>
                    <h3>Terms</h3>
                    <input type="text" value={terms} onChange={(e) => setTerms(e.target.value)} />
                </label>
                <label>
                    <h3>Definition</h3>
                    <input type="text" value={definitions} onChange={(e) => setDefinitions(e.target.value)} />
                </label>
                <label>
                    <h3>TermId</h3>
                    <input type="text" value={termId} onChange={(e) => setTermId(e.target.value)} />
                </label>

                <button type="submit">UPDATE BUTTON</button>

            </form>
        </div>
    )

}