import { Box, Button, Flex, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React, {useState} from "react";
import { fetchApiWithToken } from "../helper";
import InitialFocus from "./modalTask";
import { errorMsg, successMsg } from "../alert";

const MainData = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)

    const [name, setName] = useState('');


    const handleSubmite = async (e) => {

      e.preventDefault();

      const sprint = {
        name: name,
      }

      const response = await fetchApiWithToken("/users/sprint/create", sprint);

     if(response.status === 201){
        successMsg();
        onClose();
     }else{
        errorMsg();
     }
     

    }

    // task

  return (
    <Box h="90vh" borderRadius={10}>
      <Flex gap={20} justifyContent="space-around" alignItems={"center"}>
      <Button colorScheme="blue" size="lg" onClick={onOpen}>
        Add Sprint
      </Button>
      <InitialFocus />
      </Flex>
      <Box>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent  border="1px solid blue" h={"40vh"}>
          <ModalHeader>Create An Sprint</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} mt={"5%"}>
            <FormControl>
              <FormLabel>Sprint name</FormLabel>
              <Input ref={initialRef} placeholder='Sprint name' 
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}
            onClick={handleSubmite}
            >
              Add It
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      </Box>
      <Image src="https://www.mountaingoatsoftware.com/uploads/blog/should-a-team-work-during-sprint-planning-1.png" alt="sprint" h={"86vh"} w="100%"/>
    </Box>
  );
};

export default MainData;
