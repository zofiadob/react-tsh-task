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
    <Card maxW="sm">
      <CardBody padding={0}>
        {data.promo && (
          <Box
            minW={'4.5rem'}
            bg={'mainYellow'}
            position={'absolute'}
            color={'white'}
            textAlign={'center'}
            px={'1rem'}
            top={'1rem'}
          >
            {TranslationValue({ id: 'promo' })}
          </Box>
        )}
        <Image
          src={data.image}
          alt="Green double couch with wooden legs"
          w={'100%'}
          maxH={'13rem'}
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
        <CustomButton text={TranslationValue({ id: 'show_details' })} variant="solid" />
      </Box>
    </Card>
  );
}
