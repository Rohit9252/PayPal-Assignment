import React, { useState, useEffect } from 'react'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Select
} from '@chakra-ui/react'
import { fetchApiGetWithToken, fetchApiWithToken } from '../helper';
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { errorMsg, successMsg } from "../alert";




const Backdrop = ({ taskid }) => {

  console.log("task id is ", taskid);

  const [users, setUsers] = useState([]);

  const [id, setId] = useState(null);


  const getUsers = async () => {
    try {
      const response = await fetchApiGetWithToken("/users/alluser");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(users);
  useEffect(() => {
    getUsers();
  }, []);


  const handleSubmite = async (e) => {

    const assignedata = {
      taskid: taskid,
      userid: id
    }

    console.log(assignedata);


    const token = Cookies.get('token');


    const response = await fetchApiWithToken("/users/task/assignee", assignedata);


    if (response.status === 200) {

        successMsg("Task Assigned")

    } else {


      errorMsg("Something went wrong")

    }

  }





  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )

  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  return (
    <>

      <Button
        ml='4'
        onClick={() => {
          setOverlay(<OverlayTwo />)
          onOpen()
        }}
      >
        Assgigne Task
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {
              users.length > 0 ? (
                <>
                  <Select placeholder='Select option'
                    onChange={(e) => {
                      setId(e.target.value)
                      console.log(id)
                    }}
                  >

                    {
                      users.map((user) => (
                        <option key={user._id} value={user._id}>{user.name}</option>
                      ))
                    }

                  </Select>

                  <ModalFooter>
                    <Button colorScheme='blue' mr={3}
                      onClick={handleSubmite}
                    >
                      Add It
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </>


              ) : (
                <h1>No User Found </h1>
              )
            }
          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  )
}

export default Backdrop


