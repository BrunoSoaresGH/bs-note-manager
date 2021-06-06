import React, { Component } from "react";
import "./style.css";

class NoteForm extends Component {
  
  constructor(props) {
    super(props);
    this.title = "";
    this.message = "";
  }

  handleTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  handleMessage(event){
    event.stopPropagation();
    this.message = event.target.value;
  }

  createNote(event){
      event.preventDefault();
      event.stopPropagation();
      this.props.createNote(this.title, this.message);
  }

  render() {
    return (
      <form className="note-form"
            onSubmit={this.createNote.bind(this)}>
        <input
          type="text"
          placeholder="Type the note title"
          className="note-form-input"
          onChange={this.handleTitle.bind(this)}
        />
        <textarea
          rows={10}
          placeholder="Write your note"
          className="note-form-input"
          onChange={this.handleMessage.bind(this)}
        />
        <button className="note-form-input note-form-submit">
          Create note
        </button>
      </form>
    );
  }
}

export default NoteForm;
