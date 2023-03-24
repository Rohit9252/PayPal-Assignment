import React from 'react'
import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Card = ({id}) => {
  return (
    <Link to={`/coin/${id}`}>
    <VStack
      w={"52"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image
        src="www.google.com"
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1}>
        h
      </Heading>

      <Text noOfLines={1}>Hello</Text>
      <Text noOfLines={1}>Wroking</Text>
    </VStack>
  </Link>
  )
}

export default Card