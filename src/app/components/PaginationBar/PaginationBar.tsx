import { Box, Flex, Text } from '@chakra-ui/react';

import { TranslationValue } from 'ui/translation/Translation';

interface Props {
  currentPage: number;
  setCurrentPage: (newCurrent: number) => void;
  totalPages: number;
}

export function PaginationBar({ currentPage, setCurrentPage, totalPages }: Props) {
  let pagesArray: Array<number | string> = [1];

  if (totalPages < 6) {
    pagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);
  } else {
    if (currentPage < totalPages - 5) {
      pagesArray = [currentPage, currentPage + 1, currentPage + 2, '...', totalPages - 2, totalPages - 1, totalPages];
    } else {
      pagesArray = Array.from({ length: 6 }, (_, index) => totalPages - index).reverse();
    }
  }

  const handlePageChange = (page: number | string) => {
    if (typeof page !== 'string') {
      setCurrentPage(page);
    }
  };

  return (
    <Flex justifyContent={'center'} gap={8} marginBottom={14}>
      <Box>
        <Text
          color={'mainGray.400'}
          _hover={{
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
          onClick={() => setCurrentPage(1)}
        >
          {TranslationValue({ id: 'first' })}
        </Text>
      </Box>
      <Flex gap={4}>
        {pagesArray.map((page) => (
          <Text
            key={page}
            color={page === currentPage ? 'mainBlue.500' : 'mainGray.800'}
            onClick={() => handlePageChange(page)}
            _hover={{
              textDecoration: page !== '...' && 'underline',
              cursor: page !== '...' && 'pointer',
            }}
          >
            {page}
          </Text>
        ))}
      </Flex>
      <Box>
        <Text
          _hover={{
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
          onClick={() => setCurrentPage(totalPages)}
        >
          {TranslationValue({ id: 'last' })}
        </Text>
      </Box>
    </Flex>
  );
}
