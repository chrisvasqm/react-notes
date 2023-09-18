import { Stack } from '@chakra-ui/react';
import NoteCard from './components/NoteCard';
import notesData from './resources/notes.json';
import SearchBar from './components/SearchBar';
import { useState } from 'react';

function App() {
  const notes = notesData;
  const [searchText, setSearchText] = useState('');

  if (notes.length == 0) return <p>No notes to show.</p>;

  function handleSearch(text: string) {
    console.log(text);
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
