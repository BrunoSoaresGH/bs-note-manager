import React from "react";
import NoteCard from "../NoteCard";
import "./style.css"

function NoteList() {
  return (
    <ul className="note-list">
      {Array.of("Work", "Work", "Study").map((category, index) => {
        return (
          <li className="note-list-item" key={index}>
            <div>{category}</div>
            <NoteCard />
          </li>
        );
      })}
    </ul>
  );
}

export default NoteList;
