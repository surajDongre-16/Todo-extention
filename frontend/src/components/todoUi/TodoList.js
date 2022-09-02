import React from 'react'
import { HStack, VStack,Text, Flex,Checkbox,Box ,Label } from '@chakra-ui/react'
import { DeleteIcon, EditIcon} from '@chakra-ui/icons'
import Edit from './Edit'


const TodoList = ({todo}) => {

  console.log(todo)
  return (
    <VStack   >
    {todo?.map ((el)=>(
 <HStack  w="400px" h="auto" key={el._id} borderBottom="0.01px solid 	#D3D3D3" >
 <Flex p={3} w="400px"  justifyContent="space-around" >
  <Box h="auto" >
   
  <Checkbox size='sm' colorScheme='green' mt="-4px"  border="grey" fontWeight="bold" color="#36454F" >{el.title} <sapan style={{color:"teal"}}>({el.category})</sapan></Checkbox>
 <Text fontSize="14px" color="grey">{el.description}</Text>
  </Box>


 <Flex w="10px"  flexDirection="column" alignItems="center" gap={5} ml="auto">

 <DeleteIcon color="red.500"  />

 <Edit id={el.id}/>

 </Flex>
</Flex> 
</HStack> 
    ))}
        
      
    </VStack>
  )
}

export default TodoList