import { Button } from '@chakra-ui/react';
import './App.css';
import NoteCard from './components/NoteCard';
import notesData from './resources/notes.json';

function App() {
  const notes = notesData;

  if (notes.length == 0) return <p>No notes to show.</p>;

  return (
    <>
      <h1>Todos App</h1>
      <Button colorScheme='blue'>Click me!</Button>

      {notes &&
        notes.map(note => <NoteCard key={note.title} title={note.title} body={note.body} />)}
    </>
  );
}

export default App;
