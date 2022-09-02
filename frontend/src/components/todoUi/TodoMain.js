import React, { useState } from 'react'
import {  VStack,Text,Button,Fade, useDisclosure,Box } from "@chakra-ui/react"
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'
import { useEffect } from 'react'
import axios from "axios"


const TodoMain = () => {
const id=JSON.parse(localStorage.getItem('user'))._id;
console.log(id)
 const [todos,setTodos] = useState()
const [trig,setTrig]=useState(false)


const sendRequest = async()=>{
 const res= await axios
 .get(`http://localhost:5000/todo/user/${id}`)
 .catch(err=>console.log(err))
 const data =await res.data
 return data
}


useEffect(()=>{
 
  sendRequest().then(data=>setTodos(data.todos))
},[])



  const { isOpen, onToggle } = useDisclosure()
  return (
    <VStack p={5} >

    <Text bgGradient="linear(to-l, #7928CA,#FF0080)"
      bgClip="text"
      fontSize="3xl"
      fontWeight="extrabold">
      Today
    </Text>

 <TodoList todo={todos}/>

  
 <Box height="70px" paddingTop={5}>
 <Button onClick={onToggle} bg="white" color="red" >+ Add task</Button>
      <Fade in={isOpen}>
      <TodoAdd setTrig={setTrig} />
      </Fade>
 </Box>
  

 
    </VStack>
  )
}

export default TodoMain