import { Box, Spinner, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { getProducts } from 'api/actions/products';
import { Product } from 'api/types/productsTypes';
import { Gallery } from '../Gallery/Gallery';

export function ProductsGallery() {
  const [productsData, setProductsData] = useState<Product[] | []>([]);
  // const [metaData, setMetaData] = useState<MetaData | {}>({});
  const [isLoading, setIsLoading] = useState(true);

  const toast = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        setProductsData(products.items);
        // setMetaData(data.meta);
        setIsLoading(false);
      } catch (error) {
        toast({
          title: `${error}`,
          description: 'Something went wrong. Try again later.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Box bg={'mainGray.50'} textAlign={'center'} w={'100%'} paddingX={{ base: '2rem', lg: '6rem' }} paddingY={'3.5rem'}>
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
