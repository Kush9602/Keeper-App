import React, { useState } from "react";
import Button from "./Button";
import './css/Note.css';
import DeleteIcon from '@mui/icons-material/Delete';    

function Note(props){
    const [note, setNote] = useState({
        title: props.heading,
        para: props.paragraph,
        id: props.id,
    });
    
    function handleDelete() {
        props.onDelete(props.id);
    }

    function handleChange(event) {
        const value = event.target.textContent;
        const [name] = event.target;
        console.log(name + " " + value);

        // setNote(preNote => {
        //     return {
        //         ...preNote,
        //         [name]: value,
        //     }
        // });
        // return props.onUpdate(note);
    };

    return (
        <span className="note-div" id={note.id}>
            <h1 contentEditable={true} 
                suppressContentEditableWarning={true} 
                name="title" 
                onInput={handleChange} 
                >{props.title}</h1>

            <p contentEditable  
                suppressContentEditableWarning={true} 
                name="para" 
                onInput={handleChange} 
                >{props.paragraph}</p>

            <Button
                className="note-delete-btn" 
                onClick={handleDelete}
                name={<DeleteIcon />}
            />
        </span>
    );
}

export default Note;