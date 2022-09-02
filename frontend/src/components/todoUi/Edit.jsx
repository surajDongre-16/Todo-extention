import FocusLock from "react-focus-lock";
import React, { useState } from "react";
import { EditIcon } from "@chakra-ui/icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  ButtonGroup,
  PopoverCloseButton,
  IconButton,
  PopoverArrow,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";

const Form = ({ onCancel, todo, trig }) => {
  // console.log(todo,"formtodo")

  const [data, setFormData] = useState(null);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    // console.log(data)
    for (let key in data) {
      if (!data[key]) {
        delete data[key];
      }
    }
    // console.log(todo._id, "id");
    await axios
      .put(`http://localhost:5000/todo/update/${todo._id}`, data)
      .then((r) => {
        trig();
      })
      .catch((e) => console.log(e));
  };

  return (
    <Stack spacing={4}>
      <FormControl>
        <FormLabel>Task</FormLabel>
        <Input name="title" placeholder={todo.title} onChange={handleChange} />
        <FormLabel>Description</FormLabel>
        <Input
          name="description"
          placeholder={todo.description}
          onChange={handleChange}
        />
      </FormControl>
      <ButtonGroup display="flex" justifyContent="flex-end">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          colorScheme="red"
          onClick={() => {
            handleSubmit();
            onCancel();
          }}
        >
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

const Edit = ({ todo, onClick }) => {

  // console.log(id,"edit",todo)
  const { onOpen, onClose, isOpen } = useDisclosure();
  const trig = () => {
    onClick();
  };
  return (
    <>
      <Popover
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        placement="bottom"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton mt="-2" size="sm" icon={<EditIcon />} />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Form onCancel={onClose} todo={todo} trig={trig} />
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Edit;
