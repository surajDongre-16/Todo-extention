import { Box, Button, Heading, Input, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

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
    axios
      .post("http://localhost:5000/user/signup", data)
      .then((res) => {
        // console.log(res);

        dispatch(action.switch_page("login"));
      })
      .catch((err) => console.log("Error during signup", err));
  };

  const handleGoogle = () => {
    fetch("http://localhost:5000/user/auth/google")
    .then((res)=>console.log(res))  
	// .then((res) => {
    //     console.log(res, "google");
    //     // dispatch(action.switch_page("home"));
    //   })
      .catch((err) => console.log("Error during signup", err));
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
        mt="5rem"
        justifyContent={"space-around"}
      >
        <Heading as="h3" size="lg" textAlign={"center"} color="blue.400">
          Signup
        </Heading>
        <Button w="26rem" m="auto" colorScheme={"gray"} onClick={handleGoogle}>
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
        <Box>
          <Text display={"flex"} justifyContent="center">
            If you are already an user{" "}
            <Text
              ml="0.5rem"
              color="blue.500"
              textDecor={"underline"}
              cursor="pointer"
			  onClick={()=>dispatch(action.switch_page("login"))}
            >
              Login here
            </Text>
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
