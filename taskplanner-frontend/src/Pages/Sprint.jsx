import { Box, Flex } from '@chakra-ui/react'
import React ,{useState, useEffect} from 'react'
import Sidebar from './Sidebar/Sidebar'
import styles from "./Sidebar/Admin.module.css";
import { fetchApiGetWithToken } from '../helper';
import Card from '../Components/Card';



const Sprint = () => {

    const [sprint, setSprint] = useState([]);


    
    const getSprint = async () => {
        const response = await fetchApiGetWithToken("/users/sprint/allsprints");
        const data = await response.json();
        console.log(data);
        setSprint([...data]);
        console.log(sprint);
    }

    useEffect(() => {
        getSprint();
    }, []);



  return (
    <Box w={"100%"} py={"1%"} pl="1%" pr="1%" bg={"white"}>
    <Flex gap={"1%"}>
      <Box
        w={"20%"}
        h="90vh"
        border={"2px solid black"}
        bg={"black"}
        borderRadius={10}
      >
        <Sidebar />
      </Box>
      <Box w={"80%"} h="90vh" borderRadius={10}  bg="#edf3f8" className={styles.box1}>
            <h1>Welcome to Sprint plan</h1>
{/* 
            {
                sprint.map((item) => {
                    return <Card key={item._id} id={item._id} />
                })
            } */}

      </Box>
    </Flex>
  </Box>
  )
}

export default Sprint