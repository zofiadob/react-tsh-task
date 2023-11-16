import { Box } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'assets/styles/style';

import { ProductMenu } from 'app/components/ProductMenu/ProductMenu';
import { ProductsGallery } from 'app/components/ProductsGallery/ProductsGallery';

export const Products = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box maxW={'100%'}>
        <ProductMenu />
        <ProductsGallery />
      </Box>
    </ChakraProvider>
  );
};
