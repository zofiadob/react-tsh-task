import { Button } from '@chakra-ui/react';

interface Props {
  text: string;
  variant: 'solid' | 'outline';
  isDisabled?: boolean;
  onClickFunc?: () => void;
}

export function CustomButton({ text, variant, isDisabled = false, onClickFunc }: Props) {
  return (
    <Button
      as="button"
      onClick={onClickFunc}
      w={'100%'}
      isDisabled={isDisabled}
      transition="all 0.2s ease"
      border="1px"
      borderColor="#4460F7"
      p=".5rem 1.5rem"
      borderRadius="0.25rem"
      fontSize="sm"
      fontWeight="600"
      bg={variant === 'solid' ? '#4460F7' : 'white'}
      color={variant === 'solid' ? 'white' : '#4460F7'}
      _hover={{
        borderColor: '#2140E8',
        color: variant === 'solid' ? 'white' : '#2140E8',
        bg: variant === 'solid' ? '#2140E8' : 'white',
      }}
      _active={{
        bg: variant === 'solid' ? '#4460F7' : 'mainGray.100',
        transform: 'scale(0.98)',
        borderColor: '#bec3c9',
      }}
      _disabled={{
        bg: variant === 'solid' ? 'mainGray.400' : 'white',
        borderColor: 'mainGray.400',
        color: variant === 'solid' ? 'white' : 'mainGray.400',
        cursor: 'not-allowed',
      }}
    >
      {text}
    </Button>
  );
}
