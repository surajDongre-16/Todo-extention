import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const CalendarComp = ({ onClick }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, onChange] = useState(new Date());

  const handleDate = (d) => {
    onClick(d);
  };

  return (
    <>
      <Button onClick={onOpen}>
        <CalendarMonthIcon />
        <Text ml="0.5rem">Today</Text>
      </Button>

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Calendar</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Calendar
              onChange={(event) =>{
                handleDate(event)
                onChange(event)
                onClose()
            }}
              value={value}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CalendarComp;
