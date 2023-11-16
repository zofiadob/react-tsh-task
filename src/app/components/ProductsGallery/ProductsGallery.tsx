import { Box, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { getProducts } from 'api/actions/products';
import { Product } from 'api/types/productsTypes';
import { Gallery } from '../Gallery/Gallery';

export function ProductsGallery() {
  const [productsData, setProductsData] = useState<Product[] | []>([]);
  // const [metaData, setMetaData] = useState<MetaData | {}>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProductsData(data.items);
      // setMetaData(data.meta);
      setIsLoading(false);
    });
  }, []);

  return (
    <Box bg={'mainGray.50'} w={'100%'} paddingX={{ base: '2rem', lg: '6rem' }} paddingY={'3.5rem'}>
      {isLoading ? (
        <Spinner thickness="4px" speed="1.5s" emptyColor="gray.200" color="blue.500" size="xl" />
      ) : (
        <Box>
          <Gallery data={productsData} />
        </Box>
      )}
    </Box>
  );
}
