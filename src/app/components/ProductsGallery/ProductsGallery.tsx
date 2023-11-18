import { Box } from '@chakra-ui/react';

import { Product } from 'api/types/productsTypes';
import { Gallery } from '../Gallery/Gallery';

interface Props {
  products: Product[] | [];
}

export function ProductsGallery({ products }: Props) {
  return (
    <Box bg={'mainGray.50'} textAlign={'center'} w={'100%'} paddingX={{ base: '2rem', lg: '6rem' }} paddingY={'3.5rem'}>
      <Gallery data={products} />
    </Box>
  );
}
