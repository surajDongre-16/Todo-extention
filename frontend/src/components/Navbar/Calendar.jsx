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
const CalendarComp = ({ onClick,date }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, onChange] = useState(new Date());

  const handleDate = (d) => {
    onClick(d);
  };

  return (
    <>
      <Button onClick={onOpen}>
        <CalendarMonthIcon style={{color:"green"}}/>
        <Text color="green" ml="0.5rem">{date.toLocaleDateString()!==(new Date()).toLocaleDateString()?date.toLocaleDateString():"Today"}</Text>
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
              onChange={(event) => {
                onChange(event);
                handleDate(event);
                onClose();
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
