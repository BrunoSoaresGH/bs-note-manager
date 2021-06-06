import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./assets/App.css";
import "./assets/index.css";
import { Component } from "react";

class App extends Component {

  constructor(){
    super();

    this.state = {
      notes: []
    };
  }

  createNote(title, message){
    const newNote = {title, message}
    const newNotesArray = [...this.state.notes, newNote]
    const newState = {
      notes: newNotesArray
    }
    this.setState(newState)
  }

  render() {
    return (
      <div className="content">
        <NoteForm createNote={this.createNote.bind(this)}/>
        <NoteList notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
