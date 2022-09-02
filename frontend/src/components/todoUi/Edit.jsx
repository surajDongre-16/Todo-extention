import  FocusLock from "react-focus-lock"
import React  from "react";
import {  EditIcon} from '@chakra-ui/icons'
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
  } from '@chakra-ui/react'

// 1. Create a text input component
const TextInput = React.forwardRef(() => {
    return (
      <FormControl>
        <FormLabel>Task</FormLabel>
        <Input  />
        <FormLabel>Description</FormLabel>
        <Input  />
      </FormControl>
    )
  })
  
  // 2. Create the form
  const Form = ({ onCancel }) => {
    return (
      <Stack spacing={4}>
      
        <TextInput  />
        <ButtonGroup display='flex' justifyContent='flex-end'>
          <Button variant='outline' onClick={onCancel}>
            Cancel
          </Button>
          <Button  colorScheme='red'>
            Save
          </Button>
        </ButtonGroup>
      </Stack>
    )
  }
  
  // 3. Create the Popover
  // Ensure you set `closeOnBlur` prop to false so it doesn't close on outside click
  const Edit = () => {
    const { onOpen, onClose, isOpen } = useDisclosure()
  
  
    return (
      <>
      
        <Popover
          isOpen={isOpen}
        
          onOpen={onOpen}
          onClose={onClose}
          placement='bottom'
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <IconButton  mt="-2" size='sm' icon={<EditIcon />} />
          </PopoverTrigger>
          <PopoverContent p={5}>
            <FocusLock returnFocus persistentFocus={false}>
              <PopoverArrow />
              <PopoverCloseButton />
              <Form  onCancel={onClose} />
            </FocusLock>
          </PopoverContent>
        </Popover>
      </>
    )
  }
  
 export default Edit