import { Image, Modal, ModalBody, ModalContent, ModalOverlay, Stack, Text } from '@chakra-ui/react';

import closeIcon from '../../../../assets/images/close.svg';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  header: string;
  description: string;
  image: string;
}

export function ProductModal({ isOpen, onClose, header, description, image }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
      <ModalOverlay bg={'mainGray.750'} opacity={'0.9'} />
      <ModalContent margin={'auto 1.5rem'}>
        <Image src={image} borderRadius={'0.5rem 0.5rem 0 0'} w={'100%'} maxH={'20rem'} objectFit={'cover'} />
        <Image src={closeIcon} position={'absolute'} right={5} top={5} cursor={'pointer'} onClick={onClose} />
        <ModalBody margin={'0.5rem 1rem 2rem 0.5rem'}>
          <Stack spacing={2}>
            <Text fontSize={'2xl'}>{header}</Text>
            <Text fontSize={'lg'} color={'mainGray.400'} lineHeight={6}>
              {description}
            </Text>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
