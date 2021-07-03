import React, { useState } from 'react';

const DeleteTerm = ({ token }) => {
    const [termIds, setTermIds] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        // console.log(JSON.stringify({ "termid": termIds }))
        fetch("https://wm2-glossary.herokuapp.com/api/terms/delete", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ "termid": termIds }),
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

        <div className="update">
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="TYPE ID"

                    onChange={(event) => setTermIds(event.target.value)}
                />
                {/* <button type="submit" onClick={(e)=>setTermIds()}>DELETE</button> */}
                  <button type="submit" onClick={(e)=>{if(window.confirm("Are you sure you wish to delete this term?"))setTermIds(e)}}>DELETE</button> 
            </form>
        </div>
    )
}
export default DeleteTerm;