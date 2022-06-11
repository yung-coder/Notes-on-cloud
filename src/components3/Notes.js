import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Addnote from "./Addnote";
import NoteItem from "./NoteItem";
import {useNavigate } from "react-router-dom";
const Notes = (props) => {
  const context = useContext(noteContext);
  // eslint-disable-next-line
  let navigate=useNavigate();
  const { notes, getNotes, editnote } = context;
  useEffect(() => {
    if(localStorage.getItem('token'))
    {
      getNotes();
    }
    else{
      navigate("/login");
    }
  }, []);
  const ref = useRef(null);
  const refclose = useRef(null);
  const [note, setnote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "Defalut",
  });
  const updateNote = (cuurentNote) => {
    ref.current.click();
    setnote({
      id: cuurentNote._id,
      etitle: cuurentNote.title,
      edescription: cuurentNote.description,
      etag: cuurentNote.tag,
    });
  };
  const handleclick = (e) => {
    console.log("updating note", note);
    editnote(note.id, note.etitle, note.edescription, note.etag);
    refclose.current.click();
    props.showAlert("Updated succesfully","success");
  };
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Addnote showAlert={props.showAlert}/>
      <button
        style={{ display: "none" }}
        ref={ref}
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        class="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content  modalbg">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Title
                  </label>
                  <input
                    type="etext"
                    class="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                    value={note.etitle}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label htmlfor="edescription" class="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label htmlfor="etag" class="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refclose}
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleclick}
                disabled={
                  note.etitle.length < 5 || note.edescription.length < 5
                }
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
      <h1 className="headyournotes">Your Notes</h1>
        <div className="contanier mx-2">
          {notes.length === 0 && "No notes to display"}
        </div>
        {notes.map((note) => {
          return <NoteItem updateNote={updateNote} note={note} showAlert={props.showAlert}/>;
        })}
      </div>
    </>
  );
};

export default Notes;
