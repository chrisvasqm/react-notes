import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

interface Props {
  onChange: (text: string) => void;
}

function SearchBar({ onChange }: Props) {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents='none'>
        <SearchIcon color='gray.500' />
      </InputLeftElement>
      <Input placeholder='Search for...' onChange={e => onChange(e.target.value)} />
    </InputGroup>
  );
}

export default SearchBar;
