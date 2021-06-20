import React from 'react';
function AddNewTermBtn({handleLoginClick}){
    const handleClick = ()=>{
        handleLoginClick()

    }
    return(
        <div className="termBtn">
            <div>
            
                <span onClick={handleClick} className="icon">ADD NEW TERM</span>
            </div>
            

        </div>
    )
}
export default AddNewTermBtn;