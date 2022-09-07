
import React from "react";
import {
  VStack,
  Text,
  Button,
  Fade,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

const TodoMain = ({ isLoading,LoadingInterface,todo, setTrig }) => {
 
  const { isOpen, onToggle } = useDisclosure();
  return (
    <VStack p={5}>
      <Text
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip="text"
        fontSize="3xl"
        fontWeight="extrabold"
      >
        Today
      </Text>

      {isLoading.current?LoadingInterface.current:<TodoList todo={todo} setTrig={setTrig} />}

      <Box height="70px" paddingTop={5}>
        <Button onClick={onToggle} bg="white" color="red">
          + Add task
        </Button>
        <Fade in={isOpen}>
          <TodoAdd setTrig={setTrig} />
        </Fade>
      </Box>
    </VStack>
  );
};

export default TodoMain;
