import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./assets/App.css";
import './assets/index.css';

function App() {
  return (
    <div className="content"> 
      <NoteForm />
      <NoteList />
    </div>
  );
}

export default App;
