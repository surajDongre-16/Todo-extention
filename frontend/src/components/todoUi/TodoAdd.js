import React from 'react'
import { Stack, Input,Button,Spacer,Flex,Box,Select } from '@chakra-ui/react'

import { CalendarIcon } from '@chakra-ui/icons'


const TodoAdd = () => {
  return (
    <form >
    <Stack  w="400px"boxShadow=" rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px" mt={6} pb="4">
        <Input
        mt={5} 
        border="none"
        focusBorderColor='none'
        _placeholder={{ color: 'teal', fontWeight:"bold" }}
        type="text" 
        placeholder="Todo"
         />
          <Input
           border="none"
        mt={5} 
        focusBorderColor='none'
        _placeholder={{ color: 'purple', fontWeight:"bold" }}
        type="text" 
        placeholder="Description"
         />
         <Flex mt="2" >
     
        <Select w="120px" h="25px">
        <option>select</option>
          <option value="personal">personal</option>
          <option value="work">work</option>
        </Select>
         <CalendarIcon mt={1} ml="3"/>
         <Spacer />
         <Box pr="4">
         <Button  colorScheme="red"size='xs' >Add</Button>
         </Box>
           
         </Flex>
        
          </Stack>
       
   
    </form>
  )
}

export default TodoAdd

