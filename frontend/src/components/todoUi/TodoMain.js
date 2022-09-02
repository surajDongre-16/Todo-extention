import React from 'react'
import {  VStack,Text,Button,Fade, useDisclosure,Box } from "@chakra-ui/react"
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'


const TodoMain = () => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <VStack p={5} >

    <Text bgGradient="linear(to-l, #7928CA,#FF0080)"
      bgClip="text"
      fontSize="3xl"
      fontWeight="extrabold">
      Today
    </Text>
   <TodoList/>
 <Box height="70px" paddingTop={5}>
 <Button onClick={onToggle} bg="white" color="red" >+ Add task</Button>
      <Fade in={isOpen}>
      <TodoAdd/>
      </Fade>
 </Box>
  

 
    </VStack>
  )
}

export default TodoMain