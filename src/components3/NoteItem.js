
import noteContext from "../context/notes/noteContext";
import React, { useContext } from "react";
const NoteItem = (props) => {
  const context = useContext(noteContext);
  const {deletNote}=context;
  const { note, updateNote} = props;
  return (
    <div className="col-md-3 cards">
      <div className="card my-3">
        <div className="card-body my-3">
         <i class="fa-solid fa-bolt"></i><span><h5 className="card-title">{note.title}</h5></span>
          <p className="card-text">{note.description}</p>
          <i className="fa-solid fa-trash mx-2" onClick={()=>{deletNote(note._id);props.showAlert("Deleted succesfully","success");}}></i>
          <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note);}}></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
