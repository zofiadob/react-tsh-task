import { Checkbox, Text } from '@chakra-ui/react';

interface props {
  text: string;
}

export function CustomCheckbox({ text }: props) {
  return (
    <Checkbox colorScheme="mainBlue" size="lg">
      <Text fontSize={'sm'}>{text}</Text>
    </Checkbox>
  );
}
