import { useState } from 'react';
import {
  Button,
  Container,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure
} from '@chakra-ui/react';
import NoteCard from './components/NoteCard';
import notesData from './data/notes.json';
import SearchBar from './components/SearchBar';
import NoteForm from './pages/NoteForm';

function App() {
  const [notes, setNotes] = useState(notesData);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleSearch(text: string) {
    setNotes(notes.filter(note => note.title.includes(text)));
  }

  function handleSave() {
    const newNote = {
      title: title,
      body: body
    };

    setNotes(notes => [...notes, newNote]);
  }

  return (
    <Container size={['md', 'sm']}>
      <Stack spacing={2} margin={2}>
        <HStack>
          <SearchBar onChange={text => handleSearch(text)} />
          <Button colorScheme='blue' onClick={onOpen}>
            New
          </Button>
        </HStack>

        {notes &&
          notes.map(note => <NoteCard key={note.title} title={note.title} body={note.body} />)}
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New note</ModalHeader>
          <ModalBody>
            <NoteForm
              onTitleChange={title => setTitle(title)}
              onBodyChange={body => setBody(body)}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme='blue'
              onClick={() => {
                handleSave();
                onClose();
              }}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}

export default App;
