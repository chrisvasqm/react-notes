import { Stack } from '@chakra-ui/react';
import NoteCard from './components/NoteCard';
import notesData from './resources/notes.json';
import SearchBar from './components/SearchBar';

function App() {
  const notes = notesData;

  if (notes.length == 0) return <p>No notes to show.</p>;

  return (
    <>
      <Stack spacing={2} margin={2}>
        <SearchBar />
        {notes &&
          notes.map(note => <NoteCard key={note.title} title={note.title} body={note.body} />)}
      </Stack>
    </>
  );
}

export default App;
