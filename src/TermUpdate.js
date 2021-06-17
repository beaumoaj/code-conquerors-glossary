import React, { useState } from 'react';

const TermUpdate = () =>
{
  const [addTerm, setAddTerm] = useState( "" );
  const [updateTerm, setUpdateTerm] = useState( "" );
  const [deleteTerm, setDeleteTerm] = useState("");
    
  function handleUpdate( event )
    
  {
      event.preventDefault(event);
      fetch( "https://wm2-glossary.herokuapp.com/api/terms", {
        method: "POST",
        body: JSON.stringify({id, term, definition, language,})
      } )
      .then( ( response ) => response.json() )
      .then((data) => (data))  

    }


    return (
      <div>
        <input
          type="text"
          onChange={(event) => setAddTerm(event.target.value)}
        />

        <button type="submit" onClick={handleUpdate}>
          Add Terms
        </button>
        <button type="submit" onClick={handleUpdate}>
          Delete Terms
        </button>
        <button type="submit" onClick={handleUpdate}>
          Update Terms
        </button>
      </div>
    );
}

export default TermUpdate;