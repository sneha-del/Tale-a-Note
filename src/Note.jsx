import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
const Note=(props)=>{
    const deleteNode=()=>{
props.deleteItem(props.id);
    };
    return(
<>
<div className="note">
    <h1>{props.title}</h1>
    <br/>
    <h3>{props.content}</h3>
    {/* <p>This is a content</p> */}
    <Button onClick={deleteNode}>
    <DeleteIcon className="deleteIcon"/>
    </Button>
    <hr></hr>
</div>
</>
    );
}
export default Note;