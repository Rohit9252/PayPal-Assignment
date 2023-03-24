import {
  Box,
  ButtonGroup,
  Flex,
  IconButton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./Sidebar/Admin.module.css";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
const Tasks = () => {
  const header = ["name", "created", "actions"];
  const data = [
    {
      name: "",
      created: "",
    },
    {
      name: "",
      created: "",
    },
    {
      name: "",
      created: "",
    },
    {
      name: "",
      created: "",
    },
  ];
  const color1 = useColorModeValue("gray.400", "gray.400");
  const color2 = useColorModeValue("gray.400", "gray.400");
  return (
    <Box w={"100%"}  py={"1%"} pl="1%" pr="1%"  >
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
        <Box w={"80%"} h="90vh" borderRadius={10} bg="#edf3f8" className={styles.box1}>
          <Flex
            w="full"
            bg="#edf3f8"
            _dark={{
              bg: "#3e3e3e",
            }}
            p={50}
            alignItems="center"
            justifyContent="center"
          >
            <Table
              w="full"
              bg="white"
              _dark={{
                bg: "gray.800",
              }}
              display={{
                base: "block",
                md: "table",
              }}
              sx={{
                "@media print": {
                  display: "table",
                },
              }}
            >
              <Thead
                display={{
                  base: "none",
                  md: "table-header-group",
                }}
                sx={{
                  "@media print": {
                    display: "table-header-group",
                  },
                }}
              >
                <Tr>
                  {header.map((x) => (
                    <Th key={x}>{x}</Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody
                display={{
                  base: "block",
                  lg: "table-row-group",
                }}
                sx={{
                  "@media print": {
                    display: "table-row-group",
                  },
                }}
              >
                {data.map((token, tid) => {
                  return (
                    <Tr
                      key={tid}
                      display={{
                        base: "grid",
                        md: "table-row",
                      }}
                      sx={{
                        "@media print": {
                          display: "table-row",
                        },
                        gridTemplateColumns:
                          "minmax(0px, 35%) minmax(0px, 65%)",
                        gridGap: "10px",
                      }}
                    >
                      {Object.keys(token).map((x) => {
                        return (
                          <React.Fragment key={`${tid}${x}`}>
                            <Td
                              display={{
                                base: "table-cell",
                                md: "none",
                              }}
                              sx={{
                                "@media print": {
                                  display: "none",
                                },
                                textTransform: "uppercase",
                                color: color1,
                                fontSize: "xs",
                                fontWeight: "bold",
                                letterSpacing: "wider",
                                fontFamily: "heading",
                              }}
                            >
                              {x}
                            </Td>
                            <Td
                              color={"gray.500"}
                              fontSize="md"
                              fontWeight="hairline"
                            >
                              {token[x]}
                            </Td>
                          </React.Fragment>
                        );
                      })}
                      <Td
                        display={{
                          base: "table-cell",
                          md: "none",
                        }}
                        sx={{
                          "@media print": {
                            display: "none",
                          },
                          textTransform: "uppercase",
                          color: color2,
                          fontSize: "xs",
                          fontWeight: "bold",
                          letterSpacing: "wider",
                          fontFamily: "heading",
                        }}
                      >
                        Actions
                      </Td>
                      <Td>
                        <ButtonGroup variant="solid" size="sm" spacing={3}>
                          <IconButton
                            colorScheme="blue"
                            icon={<BsBoxArrowUpRight />}
                            aria-label="Up"
                          />
                          <IconButton
                            colorScheme="green"
                            icon={<AiFillEdit />}
                            aria-label="Edit"
                          />
                          <IconButton
                            colorScheme="red"
                            variant="outline"
                            icon={<BsFillTrashFill />}
                            aria-label="Delete"
                          />
                        </ButtonGroup>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Tasks;
