import React from 'react'
import { HStack, VStack,Text, Flex,Checkbox,Box ,Label } from '@chakra-ui/react'
import { DeleteIcon, EditIcon} from '@chakra-ui/icons'
import Edit from './Edit'

const todo=[
  {
    "title":"todo ui",
    "des":"in todolist i have to add css more"
  },
  {
    "title":"project",
    "des":"fetch the data  from the backend and show in the component "
  }
]

const TodoList = () => {
  return (
    <VStack   >
    {todo.map((el,i)=>(
 <HStack  w="400px" h="auto" key={i} borderBottom="0.01px solid 	#D3D3D3" >
 <Flex p={3} w="400px"  justifyContent="space-around" >
  <Box h="auto" >
   
  <Checkbox size='sm' colorScheme='green' mt="-4px"  border="grey" fontWeight="bold" color="#36454F" >{el.title} <sapan style={{color:"teal"}}>(project)</sapan></Checkbox>
 <Text fontSize="14px" color="grey">{el.des}</Text>
  </Box>


 <Flex w="10px"  flexDirection="column" alignItems="center" gap={5} ml="auto">

 <DeleteIcon color="red.500"  />

 <Edit/>

 </Flex>
</Flex> 
</HStack> 
    ))}
        
      
    </VStack>
  )
}

export default TodoList