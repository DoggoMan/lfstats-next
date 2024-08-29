import {
  Button,
  Icon,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { BsArrowsAngleExpand, BsFillArrowUpCircleFill } from "react-icons/bs";
import { MVPData } from "../types/MVPData";
import { ArrowUpIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface Props {
  mvp: number;
  mvpDetails: MVPData;
}

export default function MVPModal({ mvp, mvpDetails }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text color={"blue.500"} onClick={onOpen} cursor={"pointer"}>
        {mvp.toFixed(2)} <Icon as={BsArrowsAngleExpand} />
      </Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>MVP Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Table>
              <Tbody>
                {Object.entries(mvpDetails).map((key, value) => {
                  let color = "black";
                  if (key[1].value > 0) color = "green";
                  else if (key[1].value < 0) color = "red";
                  else return;

                  return (
                    <Tr key={value} color={color}>
                      <Td>
                        <Icon as={ChevronRightIcon} />
                        {key[1].name}
                      </Td>
                      <Td align="right">{key[1].value}</Td>
                    </Tr>
                  );
                })}
                <Tr>
                  <Td color="blue.500">Total:</Td>
                  <Td color="blue.500">{mvp.toFixed(2)}</Td>
                </Tr>
              </Tbody>
            </Table>
          </ModalBody>
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
