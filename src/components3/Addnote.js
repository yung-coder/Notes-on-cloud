import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Notes from "./Notes";
const Addnote = (props) => {
  const context = useContext(noteContext);
  // eslint-disable-next-line
  const { addnote } = context;

  const [note, setnote] = useState({
    title: "",
    description: "",
    tag: "Defalut",
  });
  const handleclick = (e) => {
    e.preventDefault();
    addnote(note.title, note.description, note.tag);
    setnote({ title: "", description: "", tag: "" });
    props.showAlert("Added  succesfully","success");
  };
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className=" inputcont my-4">
      <h1 className="headnote">Add a note</h1>
      <form className="forminputwala">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Title
          </label>
          <input
            type="text"
            class="form-control notecontrol"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onChange}
            minLength={5}
            required
            value={note.title}
          />
        </div>
        <div class="mb-3">
          <label htmlfor="description" class="form-label">
            Description
          </label>
          <input
            type="text"
            class="form-control notecontrol"
            id="description"
            name="description"
            onChange={onChange}
            minLength={5}
            required
            value={note.description}
          />
        </div>
        <div class="mb-3">
          <label htmlfor="tag" class="form-label">
            Tag
          </label>
          <input
            type="text"
            class="form-control notecontrol"
            id="tag"
            name="tag"
            onChange={onChange}
            minLength={5}
            required
            value={note.tag}
          />
        </div>
        <button
          disabled={note.title.length < 5 || note.description.length < 5}
          type="submit"
          class="btn btn-primary addnote"
          onClick={handleclick}
        >
          Addnote
        </button>
      </form>
    </div>
  );
};

export default Addnote;
