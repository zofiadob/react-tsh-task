import { Box, Card, CardBody, Image, Stack, Text } from '@chakra-ui/react';

import { Product } from 'api/types/productsTypes';
import { CustomButton } from '../CustomButton/CustomButton';
import { TranslationValue } from 'ui/translation/Translation';

import { RatingBox } from './RatingBox';

interface Props {
  data: Product;
}

export function ItemCard({ data }: Props) {
  return (
    <Card maxW="100%">
      <CardBody padding={0} position={'relative'}>
        {data.promo && (
          <Box
            minW={'4.5rem'}
            bg={'mainYellow'}
            position={'absolute'}
            color={'white'}
            textAlign={'center'}
            px={'1rem'}
            top={'1rem'}
            zIndex={'2'}
          >
            {TranslationValue({ id: 'promo' })}
          </Box>
        )}
        <Image
          src={data.image}
          alt="Green double couch with wooden legs"
          filter={data.active ? 'auto' : 'grayscale(100%)'}
          opacity={data.active ? '100%' : '50%'}
          w={'100%'}
          maxH={'13rem'}
          objectFit={'cover'}
          borderRadius=".5rem .5rem 0 0"
        />
        <Stack mt="4" spacing="2" px={4}>
          <Text size="lg">{data.name}</Text>
          <Text fontSize="sm" lineHeight="1rem" color="mainGray.400">
            {data.description}
          </Text>
        </Stack>
      </CardBody>
      <Box px={4} mt={'2rem'}>
        <RatingBox rating={data.rating} />
      </Box>
      <Box w={'100%'} padding={'1rem 1rem 1.5rem 1rem'}>
        <CustomButton
          text={data.active ? TranslationValue({ id: 'show_details' }) : TranslationValue({ id: 'unavailable' })}
          variant="solid"
          isDisabled={!data.active}
        />
      </Box>
    </Card>
  );
}
