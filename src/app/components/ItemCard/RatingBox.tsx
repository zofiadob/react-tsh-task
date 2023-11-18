import { Flex, Image } from '@chakra-ui/react';

import fullStar from '../../../assets/images/star_full.svg';
import emptyStar from '../../../assets/images/star_shape.svg';

interface Props {
  rating: number;
}

export function RatingBox({ rating }: Props) {
  const imageArray = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <Flex gap={2} minH={'13px'}>
      {imageArray.map((rate) => (
        <Image key={rate} src={rate <= rating ? fullStar : emptyStar} />
      ))}
    </Flex>
  );
}
