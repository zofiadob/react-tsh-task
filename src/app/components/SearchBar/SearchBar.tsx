import { InputGroup, Input, InputRightElement, Image } from '@chakra-ui/react';

import searchIcon from '../../../assets/images/search.svg';
import { TranslationValue } from 'ui/translation/Translation';

interface Props {
  setSearchTerm: (searchTerm: string) => void;
}

export function SearchBar({ setSearchTerm }: Props) {
  const placeholder = TranslationValue({ id: 'product_searchbar_placeholder' });

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => setSearchTerm(e.currentTarget.value);

  return (
    <InputGroup
      marginRight={{ base: 0, md: '1.5rem' }}
      w={{ base: '100%', md: '40%', lg: '50%' }}
      borderColor={'mainGrey.200'}
    >
      <Input
        maxW={'100%'}
        minW={'150px'}
        placeholder={placeholder}
        _placeholder={{ color: 'black', fontSize: 'sm' }}
        onChange={handleInputChange}
      />
      <InputRightElement>
        <Image src={searchIcon} alt="search-icon" padding={'0.65rem'} />
      </InputRightElement>
    </InputGroup>
  );
}
