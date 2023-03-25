import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import MainData from './MainData'
import Sidebar from './Sidebar/Sidebar'

const AdminPanel = () => {
  return (
    <Box w={"100%"} py={"1%"} pl="1%" pr="1%" bg={"white"}>
      <Flex gap={"1%"}>
        <Box w={"100%"} h="90vh" borderRadius={10}>
          <MainData />
        </Box>
      </Flex>
    </Box>
  )
}

export default AdminPanel