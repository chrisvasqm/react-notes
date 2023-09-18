import { useState } from 'react';
import { Button, HStack, Stack } from '@chakra-ui/react';
import NoteCard from './components/NoteCard';
import notesData from './resources/notes.json';
import SearchBar from './components/SearchBar';

function App() {
  const [notes, setNotes] = useState(notesData);

  function handleSearch(text: string) {
    setNotes(notes.filter(note => note.title.includes(text)));
  }

  function handleNew() {
    const newNote = {
      title: 'New title',
      body: 'New body'
    };

    setNotes(notes => [...notes, newNote]);
  }

  return (
    <>
      <Stack spacing={2} margin={2}>
        <HStack>
          <SearchBar onChange={text => handleSearch(text)} />
          <Button colorScheme='blue' onClick={handleNew}>
            New
          </Button>
        </HStack>

        {notes &&
          notes.map(note => <NoteCard key={note.title} title={note.title} body={note.body} />)}
      </Stack>
    </>
  );
}

export default App;
