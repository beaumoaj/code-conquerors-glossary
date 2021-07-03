import React from 'react';
import AddNewTerm from './AddNewTerm';
import UpdatingTheTerms from './UpdatingTheTerms';
import AddNewTermBtn from './AddNewTermBtn';
import DeleteTerm from './DeleteTerm';
const TermPage = ({ setToken, token, showBtn, handleLoginClick })=>{
    return(
        <div>
            <AddNewTermBtn handleLoginClick={handleLoginClick} />
            <AddNewTerm token={token} showBtn={showBtn} />
            <DeleteTerm token={token} />
            <UpdatingTheTerms token={token} setToken={setToken} />
        </div>
    )
};
export default TermPage;
