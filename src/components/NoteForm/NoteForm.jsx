import React from "react";
import "./style.css";

function NoteForm() {

  const constructor = () => {
    this.title = ""
  }
  
  const titleChangeHandler = event => {
    this.title = event.target.value;
  }

    return (
      <form className="note-form">
        <input
          type="text"
          placeholder="Type the note title"
          className="note-form-input"
          onChange={titleChangeHandler.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Write your note"
          className="note-form-input"
        />
        <button className="note-form-input note-form-submit">
          Create note
        </button>
      </form>
    );
}

export default NoteForm;
