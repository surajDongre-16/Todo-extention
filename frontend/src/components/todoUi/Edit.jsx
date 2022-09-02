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
  PopoverAnchor,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";

// 1. Create a text input component
// const TextInput = React.forwardRef(() => {
//     return (
//       <FormControl>
//         <FormLabel>Task</FormLabel>
//         <Input  />
//         <FormLabel>Description</FormLabel>
//         <Input  />
//       </FormControl>
//     )
//   })

// 2. Create the form
const Form = ({ onCancel,todo }) => {

  const [data, setFormData] = useState(null);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit=()=>{
    // console.log(data)
    for(let key in data){
      if(!data[key]){
        delete data[key]
      }
    }
    console.log(data)
    axios.put("http://localhost:5000/todo/user")
  }

  return (
    <Stack spacing={4}>
      <FormControl>
        <FormLabel>Task</FormLabel>
        <Input name="title" onChange={handleChange} />
        <FormLabel>Description</FormLabel>
        <Input name="description" onChange={handleChange} />
      </FormControl>
      <ButtonGroup display="flex" justifyContent="flex-end">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button colorScheme="red" onClick={handleSubmit}>
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

// 3. Create the Popover
// Ensure you set `closeOnBlur` prop to false so it doesn't close on outside click
const Edit = ({id,title ,description}) => {
  // console.log(id,"edit",todo)
  const { onOpen, onClose, isOpen } = useDisclosure();

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
            <Form onCancel={onClose} id={id} />
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Edit;
