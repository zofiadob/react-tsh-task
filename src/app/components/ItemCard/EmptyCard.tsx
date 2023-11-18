import { Card, Flex, Grid, Image, Stack, Text } from '@chakra-ui/react';

import noProductIcon from '../../../assets/images/product.svg';
import { TranslationValue } from 'ui/translation/Translation';

export function EmptyCard() {
  return (
    <Card maxW="100%" margin={'0 auto'} w={{ base: '100%', lg: '37.5rem' }} h={'21.5rem'}>
      <Flex alignItems={'center'} h={'100%'}>
        <Grid templateRows={'repeat(2,1fr)'} margin={'auto'}>
          <Image src={noProductIcon} alt="Green double couch with wooden legs" borderRadius="lg" margin={'auto'} />
          <Stack textAlign={'center'} spacing={'0'} mt={'.7rem'} mx={'1rem'}>
            <Text fontSize="lg" color="mainGray.800">
              {TranslationValue({ id: 'empty_products_header' })}
            </Text>
            <Text fontSize="sm" color={'mainGray.400'}>
              {TranslationValue({ id: 'there_are_no_products' })}
            </Text>
          </Stack>
        </Grid>
      </Flex>
    </Card>
  );
}
