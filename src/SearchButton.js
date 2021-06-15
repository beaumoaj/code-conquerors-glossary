import React,{useState} from 'react';

export default function SearchButton(){
    const[terms, setTerms]= useState("");
    function handleSubmit(e){
        e.preventDefault()
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" 
            value={terms}
            onChange={(e)=>setTerms(e.target.value)} 
            placeholder="Type words"/>
            <button type="submit">Submit Button</button>
            </form>
        </div>
    )
}