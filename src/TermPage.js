import React from 'react';
import AddNewTerm from './AddNewTerm';
import UpdatingTheTerms from './UpdatingTheTerms';

import DeleteTerm from './DeleteTerm';
const TermPage = ({ setToken, token, showBtn, handleLoginClick })=>{
    return(
        <div>
            <AddNewTerm token={token} showBtn={showBtn} />
            <DeleteTerm token={token} />
            <UpdatingTheTerms token={token} setToken={setToken} />
        </div>
    )
};
export default TermPage;
