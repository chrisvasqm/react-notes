import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

function SearchBar() {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents='none'>
        <SearchIcon color='gray.500' />
      </InputLeftElement>
      <Input placeholder='Search for...' />
    </InputGroup>
  );
}

export default SearchBar;
