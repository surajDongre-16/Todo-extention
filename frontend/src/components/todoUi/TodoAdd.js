import React, { useState } from "react";
import {
  Stack,
  Input,
  Button,
  Spacer,
  Flex,
  Box,
  Select,
} from "@chakra-ui/react";

import { CalendarIcon } from "@chakra-ui/icons";
import CalendarComp from "../Navbar/Calendar";
import { useDispatch } from "react-redux";
import axios from "axios";

const TodoAdd = ({ setTrig }) => {
  const [data, setFormData] = useState({});
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
    await setFormData({
      ...data,
      date: date.toISOString().split("T")[0],
      user: JSON.parse(localStorage.getItem("user"))._id,
    });

    await axios
      .post("http://localhost:5000/todo/add", data)
      .then((r) => console.log(r))
      .catch((e) => console.log(e));

    setTrig((prev) => !prev);
    //  console.log(date.toISOString().split("T")[0]);
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
        />
        <Flex mt="2">
          <Select
            w="120px"
            h="2.5rem"
            name="category"
            type="text"
            onChange={handleChange}
          >
            <option>select</option>
            <option value="personal">personal</option>
            <option value="work">work</option>
          </Select>
          {/* <CalendarIcon mt={1} ml="3"/> */}
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
