import { Checkbox, Text } from '@chakra-ui/react';

interface Props {
  text: string;
  setCheckboxValue: (value: boolean) => void;
}

export function CustomCheckbox({ text, setCheckboxValue }: Props) {
  const handleCheckboxChange = (e: React.FormEvent<HTMLInputElement>) => setCheckboxValue(e.currentTarget.checked);

  return (
    <Checkbox onChange={handleCheckboxChange} colorScheme="mainBlue" size="lg">
      <Text fontSize={'sm'}>{text}</Text>
    </Checkbox>
  );
}
