import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import './App.css';
import NoteCard from './components/NoteCard';
import notesData from './resources/notes.json';
import { SearchIcon } from '@chakra-ui/icons';

function App() {
  const notes = notesData;

  if (notes.length == 0) return <p>No notes to show.</p>;

  return (
    <>
      <Stack spacing={2} margin={2}>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <SearchIcon color='gray.500' />
          </InputLeftElement>
          <Input placeholder='Search for...' />
        </InputGroup>

        {notes &&
          notes.map(note => <NoteCard key={note.title} title={note.title} body={note.body} />)}
      </Stack>
    </>
  );
}

export default App;
