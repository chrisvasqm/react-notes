import { Button } from '@chakra-ui/react';
import './App.css';
import NoteCard from './components/NoteCard';

function App() {
  return (
    <>
      <h1>Todos App</h1>
      <Button colorScheme='blue'>Click me!</Button>
      <NoteCard title='Title' body='Body' />
    </>
  );
}

export default App;
