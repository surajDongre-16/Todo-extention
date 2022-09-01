import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import * as action from "../Redux/action";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
const Signup = () => {
//   const curPage = useSelector((store) => store.currentPage);
  const [data, setFormData] = useState({});
  //   console.log(curPage);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data, "data");
	dispatch(action.switch_page("login"))
  };
  return (
    <>
      {/* <div
        onClick={() => {
          dispatch(action.switch_page("home"));
        }}
      >
        Signup
      </div> */}

      <Box
        display={"flex"}
        flexDirection="column"
        h="25rem"
		mt='5rem'
        justifyContent={"space-around"}
      >
        <Heading as="h3" size="lg" textAlign={'center'} color='blue.400' >
          Signup
        </Heading>
        <Button w="26rem" m="auto" colorScheme={"gray"}>
          <Box
            display={"flex"}
            w="12rem"
            justifyContent={"space-between"}
            alignItems="center"
          >
            <FcGoogle size="1.5rem" />
            <Text> Continue with Google</Text>
          </Box>
        </Button>

        <form
          onSubmit={handleSubmit}
          style={{ width: "26rem", margin: "auto" }}
        >
          <Input
            name="name"
            type="name"
            placeholder="Enter your name"
            onChange={handleChange}
          />
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={handleChange}
            mt="2rem"
          />
          <Input
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={handleChange}
            mt="2rem"
          />
          <Input
            type="submit"
            mt="2rem"
            color={"white"}
            fontWeight="bolder"
            fontSize={"1.2rem"}
            bg="blue.400"
            cursor={"pointer"}
          />
        </form>
      </Box>
    </>
  );
};

export default Signup;
