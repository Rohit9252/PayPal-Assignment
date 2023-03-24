import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  // Select,
} from "@chakra-ui/react";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import 'react-toastify/dist/ReactToastify.css';
import { fetchApi } from "../helper";
import { errorMsg, successMsg } from "../alert";






const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });


  const handleSignup = async (e) => {
    const signupUser = {
      name: user.firstname + " " + user.lastname,
      email: user.email,
      password: user.password,
    }

    const response = await fetchApi("/users/register", signupUser);

    console.log(response);

    if (response.status === 201) {
      // const data = await response.json();
      successMsg();
      navigate("/login");
    } else {
      errorMsg();
    }
  }

  return (
    <Flex
      minH={"90vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text"
                    onChange={(e) => setUser({ ...user, firstname: e.target.value })}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text"
                    onChange={(e) => setUser({ ...user, lastname: e.target.value })}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={() => { handleSignup() }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={2}>
              <Text align={"center"}>
                Already a user? <Link to="/login"><Text color="red">Login</Text></Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Signup;
