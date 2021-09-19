import React from "react";
import './css/App.css';
import Header from "./Header";
import TakeNotes from "./TakeNote";
import Notes from "./PrintNotes";
import firebase from "../util/firebase";

function App() {

  function addNote(newNote) {
    const title = newNote.title.trim();
    const para = newNote.para.trim();
    if(para.length !== 0 || title.length !== 0){
      const noteRef = firebase.database().ref("Note");
      const Note = {
        title,
        para
      }
      noteRef.push(Note);
    }
  }

  function deleteNote(id) {
    const noteRef = firebase.database().ref("Note").child(id);
    noteRef.remove();
  }

  function updateNote(note) {
    const noteRef = firebase.database().ref("Note").child(note.id);
    noteRef.update({
      title: note.title,
      para: note.para,
    });
  }

  return (
    <div className="App">
      <Header />

      <TakeNotes 
        onAdd={addNote}
      />

      <Notes 
        onDelete={deleteNote}
        onUpdate={updateNote}
      />

    </div>
  );
}

export default App;
