import React from "react";
import "./style.css";

function NoteCard(){
    return (
      <section className="note-card">
        <header className="note-card-header">
          <h3 className="note-card-title">Title</h3>
        </header>
        <p className="note-card-text">Write your note</p>
      </section>
    );
}

export default NoteCard;
