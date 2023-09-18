import { useState } from 'react';
import { Stack } from '@chakra-ui/react';
import NoteCard from './components/NoteCard';
import notesData from './resources/notes.json';
import SearchBar from './components/SearchBar';

function App() {
  const [notes, setNotes] = useState(notesData);

  function handleSearch(text: string) {
    setNotes(notes.filter(note => note.title.includes(text)));
  }

  return (
    <>
      <Stack spacing={2} margin={2}>
        <SearchBar onChange={text => handleSearch(text)} />

        {notes &&
          notes.map(note => <NoteCard key={note.title} title={note.title} body={note.body} />)}
      </Stack>
    </>
  );
}

export default App;
