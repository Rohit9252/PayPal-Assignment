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
import React, { useState } from "react";
import Cookies from "js-cookie";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


export default function InitialFocus({ sprintid }) {

  const [task, setTask] = useState({

    name: "",
    type: "",
    sprint: sprintid,

  })


  const handleSubmite = async (e) => {

    console.log(task);

    const token = Cookies.get("token");

    const response = await fetch("http://localhost:5000/api/users/task/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify(task),

    });


    console.log(response);

    if (response.status === 201) {
      toast.success("Task Created", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Internal Server error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });


    }


  }

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
              <Input ref={initialRef} placeholder="Task Title...."
                value={task.name}
                onChange={(e) => {
                  setTask({ ...task, name: e.target.value });
                }}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Task Type</FormLabel>
              <Select placeholder="Choose a type...?"
                value={task.type}
                onChange={(e) => {
                  setTask({ ...task, type: e.target.value });
                }}
              >
                <option value="bug">bug</option>
                <option value="feature">feature</option>
                <option value="story">story</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Sprint Id</FormLabel>
              <Input placeholder="Enter Sprint It" value={sprintid} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}
              onClick={handleSubmite}
            >
              Add Task
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
