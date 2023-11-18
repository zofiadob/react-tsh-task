import { Box, Spinner, useToast } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'assets/styles/style';
import { useEffect, useState } from 'react';

import { ProductMenu } from 'app/components/Product/ProductMenu/ProductMenu';
import { ProductsGallery } from 'app/components/Product/ProductsGallery/ProductsGallery';
import { getProducts } from 'api/actions/products';
import { Product, getRequestProps } from 'api/types/productsTypes';
import { PaginationBar } from 'app/components/PaginationBar/PaginationBar';

export const Products = () => {
  const [filteredData, setFilteredData] = useState<Product[] | []>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const productsPerPage = 8;

  const [isLoading, setIsLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isPromo, setIsPromo] = useState(false);

  const toast = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts({ limit: productsPerPage, page: currentPage });
        setFilteredData(products.items);
        setTotalPages(products.meta.totalPages);
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
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const queries: getRequestProps = {
          search: searchTerm,
          limit: productsPerPage,
          page: 1,
        };
        if (isActive) {
          queries.active = isActive;
        }
        if (isPromo) {
          queries.promo = isPromo;
        }

        const products = await getProducts(queries);
        setFilteredData(products.items);
        setCurrentPage(1);
        setTotalPages(products.meta.totalPages);
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
  }, [searchTerm, isActive, isPromo]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const queries: getRequestProps = {
          search: searchTerm,
          limit: productsPerPage,
          page: currentPage,
        };
        if (isActive) {
          queries.active = isActive;
        }
        if (isPromo) {
          queries.promo = isPromo;
        }

        const products = await getProducts(queries);
        setFilteredData(products.items);
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
  }, [currentPage]);

  return (
    <ChakraProvider theme={theme}>
      <Box maxW={'100%'}>
        <ProductMenu setSearchTerm={setSearchTerm} setActiveFilter={setIsActive} setPromoFilter={setIsPromo} />
        {isLoading ? (
          <Box position={'absolute'} left={'50%'} top={'50%'} transform={'translate(-50%, -50%)'}>
            <Spinner thickness="4px" speed="1.5s" emptyColor="mainGray.200" color="mainBlue.500" size="xl" />
          </Box>
        ) : (
          <Box>
            <ProductsGallery products={filteredData} />
            {totalPages > 0 && (
              <PaginationBar currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
            )}
          </Box>
        )}
      </Box>
    </ChakraProvider>
  );
};
