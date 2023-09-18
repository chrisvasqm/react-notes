import { FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

function NoteForm() {
  return (
    <VStack spacing={2}>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input type='text' />
      </FormControl>

      <FormControl>
        <FormLabel>Body</FormLabel>
        <Input type='text' />
      </FormControl>
    </VStack>
  );
}

export default NoteForm;
