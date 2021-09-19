import React, { useState, useEffect } from "react";
import Note from "./Note";
import firebase from "../util/firebase";
import './css/PrintNote.css';

function PrintNotes(props) {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
      const noteRef = firebase.database().ref("Note");
      noteRef.on('value', (snapshot) =>{
        const note = snapshot.val();
        let noteList = [];
        for(let id in note){
          noteList.push({ id, ...note[id]});
        }
        setNotes(noteList);  
      });
    }, []);


    return (
        <div className="keep-note-div">
        {notes.map((noteObj) => {
        return (
          <Note
              key={noteObj.id}
              id={noteObj.id}
              heading={noteObj.title}
              paragraph={noteObj.para}
              onDelete={props.onDelete}
              onUpdate={props.onUpdate}
            />
        )
      })}
      </div>
    );
}

export default PrintNotes;