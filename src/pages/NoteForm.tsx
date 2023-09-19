import { FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

interface Props {
  onTitleChange: (title: string) => void;
  onBodyChange: (body: string) => void;
}

function NoteForm({ onTitleChange, onBodyChange }: Props) {
  return (
    <VStack spacing={2}>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input type='text' onChange={e => onTitleChange(e.target.value)} />
      </FormControl>

      <FormControl>
        <FormLabel>Body</FormLabel>
        <Input type='text' onChange={e => onBodyChange(e.target.value)} />
      </FormControl>
    </VStack>
  );
}

export default NoteForm;
