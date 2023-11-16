import { Button, Flex, Box, Stack } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';

import { SearchBar } from '../SearchBar/SearchBar';
import { TranslationValue } from 'ui/translation/Translation';
import { CustomCheckbox } from '../CustomCheckbox/CustomCheckbox';
import CustomButton from '../CustomButton/CustomButton';

export function ProductMenu() {
  const loginButtonText = TranslationValue({ id: 'log_in' });
  const checkboxActiveText = TranslationValue({ id: 'active' });
  const checkboxPromoText = TranslationValue({ id: 'promo' });

  const loginButtonLargeViewport = useBreakpointValue({
    base: 'none',
    md: 'inline',
  });

  const loginButtonSmalleViewport = useBreakpointValue({
    base: 'inline',
    md: 'none',
  });

  return (
    <Flex flexWrap={'wrap'} alignItems={'center'}>
      <Flex justifyContent={'space-between'} w={{ base: '100%', md: 'auto' }}>
        <Box p="4" pl={{ base: 0, md: 4 }} marginRight={{ base: '.5rem', lg: '6rem' }}>
          <ChakraLink as={ReactRouterLink} to="/" fontSize={'2xl'} fontWeight={600}>
            join.tsh.io
          </ChakraLink>
        </Box>
        <Box p="4" pr={{ base: 0, md: 4 }} display={loginButtonSmalleViewport}>
          <Button variant={'outline'}>{loginButtonText}</Button>
        </Box>
      </Flex>
      <Box flex="3">
        <Flex w={'100%'} flexWrap={'wrap'} rowGap={'1.5rem'}>
          <SearchBar />
          <Stack spacing={8} direction="row">
            <CustomCheckbox text={checkboxActiveText} />
            <CustomCheckbox text={checkboxPromoText} />
          </Stack>
        </Flex>
      </Box>
      <Box flex="1" display={loginButtonLargeViewport}>
        <Flex justifyContent={'right'}>
          <Box p="4">
            <CustomButton variant="solid" text={loginButtonText} />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
