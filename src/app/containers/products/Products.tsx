import { Box, Spinner, useToast } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'assets/styles/style';
import { useEffect, useState } from 'react';

import { ProductMenu } from 'app/components/ProductMenu/ProductMenu';
import { ProductsGallery } from 'app/components/ProductsGallery/ProductsGallery';
import { getProducts } from 'api/actions/products';
import { Product } from 'api/types/productsTypes';

export const Products = () => {
  const [productsData, setProductsData] = useState<Product[] | []>([]);
  const [filteredData, setFilteredData] = useState<Product[] | []>([]);
  // const [metaData, setMetaData] = useState<MetaData | {}>({});

  const [isLoading, setIsLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isPromo, setIsPromo] = useState(false);

  const toast = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        setProductsData(products.items);
        setFilteredData(products.items);
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

  useEffect(() => {
    let currentFilteredData = productsData;

    if (searchTerm !== '') {
      currentFilteredData = currentFilteredData.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (isActive) {
      currentFilteredData = currentFilteredData.filter((product) => product.active === true);
    }

    if (isPromo) {
      currentFilteredData = currentFilteredData.filter((product) => product.promo === true);
    }

    setFilteredData(currentFilteredData);
  }, [searchTerm, isActive, isPromo]);

  return (
    <ChakraProvider theme={theme}>
      <Box maxW={'100%'}>
        <ProductMenu setSearchTerm={setSearchTerm} setActiveFilter={setIsActive} setPromoFilter={setIsPromo} />
        {isLoading ? (
          <Spinner thickness="4px" speed="1.5s" emptyColor="gray.200" color="blue.500" size="xl" />
        ) : (
          <Box>
            <ProductsGallery products={filteredData} />
          </Box>
        )}
      </Box>
    </ChakraProvider>
  );
};
