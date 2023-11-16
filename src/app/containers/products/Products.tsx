import { Box } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'assets/styles/style';

import { ProductMenu } from 'app/components/ProductMenu/ProductMenu';

export const Products = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box maxW={'100%'} marginX={{ base: '2rem', lg: '6rem' }} marginY={{ base: '2rem' }}>
        <ProductMenu />
      </Box>
    </ChakraProvider>
  );
};
