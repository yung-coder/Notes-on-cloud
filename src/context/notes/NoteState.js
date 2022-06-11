import { useState } from "react";
import NoteContext from "./noteContext";

const Notestate = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // get all notes
  const getNotes = async () => {
    //api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //add a note
  const addnote = async (title, description, tag) => {
    //api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json();
    setNotes(notes.concat(note));
  };

  // delet a note
  const deletNote = async (id) => {
    //api call
    const response = await fetch(`${host}/api/notes/deletnote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
    });
    const json = await response.json();
    console.log(json);

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //Edit a note
  const editnote = async (id, title, description, tag) => {
    //Api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    let NewNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < notes.length; index++) {
      const element = NewNotes[index];
      if (element._id === id) {
        NewNotes[index].title = title;
        NewNotes[index].description = description;
        NewNotes[index].tag = tag;
        break;
      }
    }
    setNotes(NewNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addnote, deletNote, editnote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default Notestate;
