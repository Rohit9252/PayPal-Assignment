import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import styles from "./Admin.module.css";
import { BsFillArrowRightSquareFill, BsListTask } from "react-icons/bs";
const navMenu = [
  {
    icon: <BsFillArrowRightSquareFill size={22} />,
    label: "Add New",
    ref: "/dash",
  },
  {
    icon: <BsListTask size={22}/>,
    label: "All Sprint",
    ref: "/sprint",
  },
  {
    icon: <BsListTask size={22}/>,
    label: "All Task's",
    ref: "/tasks",
  },
];

const Sidebar = () => {
  const toast = useToast();
  const handleLogout = () => {
    toast({
      title: "Logged Out successfully",
      description: "Redirecting To The Home",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    window.location.replace("/");
  };
  return (
    <>
      <Box borderRadius={10}>
        <Box mt={"5%"}>
          {navMenu &&
            navMenu.map((el, i) => (
              <Box
                key={i}
                mt="20%"
                w={"90%"}
                ml={"5%"}
                mr={"5%"}
                className={styles.admin_bar}
              >
                <Link to={el.ref}>
                  <Flex gap={10} pl={"10%"} alignItems="center">
                    <Box color={"#a08615"} >{el.icon}</Box>
                    <Text fontSize={20} color="#f8e68a" fontWeight={"bold"}>
                      {el.label}
                    </Text>
                  </Flex>
                </Link>
              </Box>
            ))}
          <Button
            mt={"20%"}
            fontSize={20}
            className={styles.admin_bar}
            color="#f8e68a"
            w={"90%"}
            ml={"5%"}
            mr={"5%"}
            onClick={handleLogout}
            fontWeight={"bold"}
            bg={"black"}
            _hover={{ bg: "teal", color: "black" }}
          >
            <LogoutIcon />
            Logout
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
