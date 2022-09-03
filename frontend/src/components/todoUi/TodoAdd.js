import React, { useState } from "react";
import {
  Stack,
  Input,
  Button,
  Spacer,
  Flex,
  Box,
  Select,
  useToast,
} from "@chakra-ui/react";

import CalendarComp from "../Navbar/Calendar";

import axios from "axios";

const TodoAdd = ({ setTrig }) => {
  const toast = useToast();
  const [data, setFormData] = useState({ title: "", description: "" });
  const [date, setDate] = useState(null);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (date === null) {
      toast({
        title: "Please Select Date",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      let newData = {
        ...data,
        date: date.toLocaleDateString(),
        user: JSON.parse(localStorage.getItem("user"))._id,
      };

      await axios
        .post("https://calm-springs-45611.herokuapp.com/todo/add", newData)
        .then((r) =>
          toast({
            title: "Your Task is added",
            status: "success",
            duration: 2000,
            isClosable: true,
          })
        )
        .catch((e) => console.log(e));

      setTrig((prev) => !prev);
      setFormData({
        title: "",
        description: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack
        w="400px"
        boxShadow=" rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px"
        mt={6}
        pb="4"
      >
        <Input
          mt={5}
          border="none"
          focusBorderColor="none"
          _placeholder={{ color: "teal", fontWeight: "bold" }}
          type="text"
          name="title"
          placeholder="Todo"
          onChange={handleChange}
          value={data.title}
        />
        <Input
          border="none"
          mt={5}
          focusBorderColor="none"
          _placeholder={{ color: "purple", fontWeight: "bold" }}
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange}
          value={data.description}
        />
        <Flex mt="2">
          <Select
            w="120px"
            h="2.5rem"
            name="category"
            type="text"
            ml={2}
            onChange={handleChange}
          >
            <option>select</option>
            <option value="personal">personal</option>
            <option value="work">work</option>
          </Select>
          <Box ml="1rem">
            <CalendarComp onClick={(value) => setDate(value)} />
          </Box>
          <Spacer />
          <Box pr="4">
            <Button colorScheme="red" size="md" type="submit">
              Add
            </Button>
          </Box>
        </Flex>
      </Stack>
    </form>
  );
};

export default TodoAdd;
