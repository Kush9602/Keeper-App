import React, { useState } from "react";
import './css/TakeNote.css'
import TextArea from "./TextArea";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

function TakeNotes(props) {
    const [keepNote, setKeepNote] = useState({
        title: "",
        para: ""
    });
    const [isClicked, setIsClicked] = useState(false);
    const [textAreaHeight, setTextAreaHeight] = useState(30);

    function handleKeepNoteChange(event){
        const {name, value} = event.target;

        setKeepNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function handleAdd(){
        props.onAdd(keepNote);
        setKeepNote({
                title: "",
                para: ""
        });
        setTextAreaHeight(30);
    }

    function expandTitlebar(){
        setIsClicked(true);
    }

    function shrinkTextBox() {
        handleAdd();
        setTextAreaHeight(30);
        setIsClicked(false);
    }

    function handleKeyUp(evt){
        let newHeight = Math.max(Math.min(evt.target.scrollHeight, 1000), 30);
        if (newHeight !== textAreaHeight) {
            setTextAreaHeight(newHeight);
          }
    }

    function handleKeyDown(evt){
        // max
        // console.log(evt.target.scrollHeight);
        // let newHeight = Math.min(Math.max(evt.target.scrollHeight, 30), textAreaHeight);
        // if (newHeight !== textAreaHeight) {
        //     setTextAreaHeight(newHeight);
        // }
    }

    let textAreaStyle = {height: textAreaHeight};

    return (
        <div className="take-note-div" style={isClicked ? {padding:"19px"} : {padding:"6px"}}>

            {isClicked === true && <button 
                className="cancle-btn"
                onClick={shrinkTextBox}
                ><CancelRoundedIcon /></button> }

            {isClicked && <TextArea 
                name="title"
                onChange={handleKeepNoteChange}
                className="take-note-title"
                placeholder="Title"
                value={keepNote.title}
                rows="1"
            />}
            
            <TextArea 
                name="para"
                onChange={handleKeepNoteChange}
                onClick={expandTitlebar}
                className="take-note-para"
                placeholder="Take a note..."
                value={keepNote.para}
                keyUp={handleKeyUp}
                keyDown={handleKeyDown}
                style={textAreaStyle}
            />
            
            {isClicked && <Zoom in={true}>
                <Fab  size="small"
                onClick={handleAdd}
                className="add-button">
                    <AddIcon />
                </Fab>
            </Zoom>}

        </div>
    );
}

export default TakeNotes;