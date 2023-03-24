import { Box, Flex, chakra, Text, Grid } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./Sidebar/Admin.module.css";
import { fetchApiGetWithToken } from "../helper";
import Card from "../Components/Card";
import axios from "axios";
import { Link } from "react-router-dom";


const Sprint = () => {
  const [sprint, setSprint] = useState([]);

  const getSprint = async () => {
    try {
      const response = await fetchApiGetWithToken("/users/sprint/allsprints");
      const data = await response.json();
      setSprint(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(sprint);
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
        <Box
          w={"80%"}
          h="90vh"
          borderRadius={10}
          bg="#edf3f8"
          className={styles.box1}
        >
          <Text textAlign={"center"} fontWeight="bold" fontSize={22} color="teal" textDecoration="underline">Welcome to Sprint plan</Text>
          <Box className={styles.main_box}>
            {sprint.map((el, i) => {
              return (
                <Link to={`/sprint/${el._id}`}>
                  <Flex
                    key={i}
                    className={styles.main_box2}
                    bg="#edf3f8"
                    _dark={{
                      bg: "#3e3e3e",
                    }}
                    p={50}
                    w="100%"
                  >
                    <Flex
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      w="sm"
                      mx="auto"
                    >
                      <Box
                        bg="gray.300"
                        h={32}
                        w="200px"
                        rounded="lg"
                        shadow="md"
                        bgSize="cover"
                        bgPos="center"
                        style={{
                          backgroundImage:
                            "url(https://www.uid.com/assets/uploads/inContent/News_Design-Sprint_2_780_eng.jpg)",
                        }}
                      ></Box>

                      <Box
                        w={{
                          base: "150px",
                          md: "150px",
                        }}
                        bg="white"
                        _dark={{
                          bg: "gray.800",
                        }}
                        mt={-10}
                        shadow="lg"
                        rounded="lg"
                        overflow="hidden"
                      >
                        <chakra.h3
                          py={2}
                          textAlign="center"
                          fontWeight="bold"
                          textTransform="uppercase"
                          color="gray.800"
                          _dark={{
                            color: "white",
                          }}
                          letterSpacing={1}
                        >
                          {el.name}
                        </chakra.h3>

                        <Flex
                          alignItems="center"
                          justifyContent="center"
                          py={2}
                          px={3}
                          bg="gray.200"
                          _dark={{
                            bg: "gray.700",
                          }}
                        >
                          <chakra.button
                            bg="gray.800"
                            fontSize="xs"
                            fontWeight="bold"
                            color="white"
                            px={2}
                            py={1}
                            rounded="lg"
                            textTransform="uppercase"
                            _hover={{
                              bg: "gray.700",
                              _dark: {
                                bg: "gray.600",
                              },
                            }}
                            _focus={{
                              bg: "gray.700",
                              _dark: {
                                bg: "gray.600",
                              },
                              outline: "none",
                            }}
                          >
                            View Detail's
                          </chakra.button>
                        </Flex>
                      </Box>
                    </Flex>
                  </Flex>
                </Link>

              );
            })}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Sprint;
