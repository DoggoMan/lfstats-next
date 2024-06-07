import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { MVPData } from "../types/MVPData";

interface Props {
  mvp: number;
  mvpDetails: MVPData;
}

export default function MVPModal({ mvp, mvpDetails }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button bg={"blue.300"} onClick={onOpen}>
        {mvp.toFixed(2)}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>MVP Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{mvp}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue.300" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
