import React, { Component } from "react";
import NoteCard from "../NoteCard";
import "./style.css";

class NoteList extends Component {

  render() {
    return (
      <ul className="note-list">
        {this.props.notes.map((note, index) => {
          return (
            <li className="note-list-item" key={index}>
              <NoteCard title={note.title} message={note.message}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;
