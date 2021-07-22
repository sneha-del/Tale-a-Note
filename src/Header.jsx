import React from 'react';
import note from './images/note.png';

const Header=()=>{
    return(
        <>
      <div className="header">
          <img src={note} alt='note'/>
          {/* <h1>NOTES APP</h1> */}
      </div>
        </>
    );
}
export default Header;