import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
export default function InitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);

  return (
    <>
      <Button colorScheme="teal" size="lg" onClick={onOpen}>
        Add Tasks
      </Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Tasks</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Task Title</FormLabel>
              <Input ref={initialRef} placeholder="Task Title...." />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Task Type</FormLabel>
              <Select placeholder="Choose a type...?">
                <option value="bug">bug</option>
                <option value="feature">feature</option>
                <option value="story">story</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Sprint Id</FormLabel>
              <Input placeholder="Enter Sprint It" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Add Task
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
