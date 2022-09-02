import React from 'react'
import { HStack, VStack,Text, Flex,Checkbox  } from '@chakra-ui/react'
import { DeleteIcon, EditIcon} from '@chakra-ui/icons'
import Edit from './Edit'

const todo=["work","project"]

const TodoList = () => {
  return (
    <VStack   >
    {todo.map((el,i)=>(
 <HStack spacing="20px" w="400px" key={i} borderBottom="0.01px solid 	#D3D3D3" >
 <Flex p={3} w="300px" h="50px" justifyContent="space-between" >
 <Text>{el}</Text>

 <Flex w="10px" >
 <Checkbox size='sm' colorScheme='green' mt="-4px" mr="2" border="grey"></Checkbox>
 <DeleteIcon color="red.500" mr="2" />

 <Edit/>

 </Flex>
</Flex> 
</HStack> 
    ))}
        
      
    </VStack>
  )
}

export default TodoList