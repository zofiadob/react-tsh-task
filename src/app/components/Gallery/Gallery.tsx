import { Grid } from '@chakra-ui/react';

import { Product } from 'api/types/productsTypes';
import { ItemCard } from '../ItemCard/ItemCard';
import { EmptyCard } from '../ItemCard/EmptyCard';

interface Props {
  data: Product[];
}

export function Gallery({ data }: Props) {
  const isDataExist = data.length > 0;
  const columns = isDataExist ? { base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' } : { base: '1fr' };

  return (
    <Grid justifyContent={'center'} templateColumns={columns} gap={6} height={'100%'}>
      {isDataExist ? data.map((product) => <ItemCard key={product.id} data={product} />) : <EmptyCard />}
    </Grid>
  );
}
