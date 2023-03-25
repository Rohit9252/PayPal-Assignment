import "./sprint.css";
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { fetchApiGetWithToken } from "../helper";
import { Box, Button, Flex, FormControl, FormLabel, Image, Input, Modal, Select, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { fetchApiWithToken } from "../helper";
import InitialFocus from "./modalTask";
import { errorMsg, successMsg } from "../alert";
import Backdrop from "./Backdrop";
import Cookies from "js-cookie";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import MainData from "./MainData";


const SprintDetails = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const [task, setTask] = useState([]);
    const parm = useParams();


    const [status, setStatus] = useState({
        taskid: "",
        status: ""
    });



    const handleSubmite = async (e) => {

        console.log(status);

        const token = Cookies.get('token');

        const response = await fetch("https://task-planner-txcg.onrender.com/api/users/task/status", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(status),
        });

      if(response.status === 200){
        
          successMsg("Status Updated");

      }else{
            errorMsg("Something went wrong");
      }
    }
    const getSprint = async () => {
        try {
            const response = await fetchApiGetWithToken("/users/sprint/" + parm.id);
            const data = await response.json();
            setTask(data);
        } catch (error) {
            console.log(error.message);
        }
    };
    // console.log(task);
    useEffect(() => {
        getSprint();
    }, []);

    return (
        <Box m={10}>
            <InitialFocus sprintid={parm.id} />

            <table className="container">
                <thead>
                    <tr>
                        <th><h1>Task Name</h1></th>
                        <th><h1>Type</h1></th>
                        <th><h1>Status</h1></th>
                        <th><h1>Add Status</h1></th>
                        <th><h1>Assigne</h1></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        task.map((el, i) => {
                            return (
                                <tr key={i} >
                                    <td>{el.name}</td>
                                    <td>{el.type}</td>
                                    <td>{el.status == "done" ? (
                                        <Button 
                                            alignSelf={"center"}
                                        colorScheme="green" size="lg">Completed</Button>
                                    ): el.status == "in Progress" ?  (


                                        <Button colorScheme="red" size="lg">In Progress</Button>
                                    ):(
                                        <Button colorScheme="yellow" size="lg">To Do</Button>
                                    )}
                                    
                                    
                                    </td>
                                    <td>

                                        {
                                            el.status == "done" ? (
                                                <Button colorScheme="green" size="lg">Completed</Button>
                                            ) :(
                                                <>
                                                
                                                <Button colorScheme="blue" size="lg" onClick={() => {
                                                    setStatus({
                                                        taskid: el._id,
                                                        status: ""
                                                    })
                                                    onOpen()
        
                                                }}
        
                                                >
                                                    Add Status
                                                </Button>
                                                <Modal
                                                    initialFocusRef={initialRef}
                                                    isOpen={isOpen}
                                                    onClose={onClose}
                                                >
                                                    <ModalOverlay />
                                                    <ModalContent border="1px solid blue" h={"40vh"}>
                                                        <ModalHeader>Add Status to Task</ModalHeader>
                                                        <ModalCloseButton />
                                                        <ModalBody pb={6} mt={"5%"}>
                                                            <FormControl>
                                                                <FormLabel>Status Detail</FormLabel>
                                                                <Select placeholder='Select option'
                                                                    value={status.status}
                                                                    onChange={(e) => {
                                                                        setStatus({ ...status, status: e.target.value });
                                                                    }}
                                                                >
                                                                    <option value='todo'>To Do</option>
                                                                    <option value='in progress'>In progress</option>
                                                                    <option value='done'>Done</option>
                                                                </Select>
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
                                                </>
                                             

                                            )
                                        }

                                        
                                    </td>
                                    {

                                        el?.assignee?.name ? (
                                            <td>{el?.assignee?.name}</td>
                                        ) : (
                                            <td>
                                                <Backdrop taskid={el._id} />

                                            </td>
                                        )


                                    }
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

        </Box>

    )
}

export default SprintDetails