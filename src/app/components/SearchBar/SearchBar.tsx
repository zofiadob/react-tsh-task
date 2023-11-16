import { InputGroup, Input, InputRightElement, Image, Stack, Flex } from '@chakra-ui/react';

import searchIcon from '../../../assets/images/search.svg';
import { TranslationValue } from 'ui/translation/Translation';
import { CustomCheckbox } from '../CustomCheckbox/CustomCheckbox';

export function SearchBar() {
  const placeholder = TranslationValue({ id: 'product_searchbar_placeholder' });
  const checkboxActiveText = TranslationValue({ id: 'active' });
  const checkboxPromoText = TranslationValue({ id: 'promo' });

  return (
    <Flex w={'100%'} flexWrap={'wrap'} rowGap={'1.5rem'}>
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
        />
        <InputRightElement>
          <Image src={searchIcon} alt="search-icon" padding={'0.65rem'} />
        </InputRightElement>
      </InputGroup>
      <Stack spacing={8} direction="row">
        <CustomCheckbox text={checkboxActiveText} />
        <CustomCheckbox text={checkboxPromoText} />
      </Stack>
    </Flex>
  );
}
