import React from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
} from "@chakra-ui/react";
import AddIcon from "@mui/icons-material/Add";
import "./stylesheets/addtaskModal.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddLabel from "./AddLabel";
import AddTimer from "./AddTimer";
import CalendarComp from "./Calendar";


const AddTaskModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

  const [date,setDate]=React.useState(null)

	return (
    <>
      <AddIcon onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton marginTop="6px" marginRight="10px" />
          <ModalBody id="addTodoModal">
            <input
              placeholder="Add todo for e.g.,Buy gift tommorow at 6pm"
              type="text"
            />
            <textarea
              placeholder="Add a description to your todo"
              id="description"
              rows="4"
              cols="50"
            ></textarea>

            <div>
              <CalendarComp onClick={(value)=>setDate(value)}/>

              <div>
                <AddLabel />
                <AddTimer />
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button size="sm" variant="ghost" mr={3} onClick={onClose}>
              Cancle
            </Button>
            <Button size="sm" disabled={true} colorScheme="red">
              Add task
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddTaskModal;
