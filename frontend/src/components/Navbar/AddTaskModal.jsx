import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";
import AddIcon from "@mui/icons-material/Add";
import "./stylesheets/addtaskModal.css";
import AddLabel from "./AddLabel";
import AddTimer from "./AddTimer";
import CalendarComp from "./Calendar";
import axios from "axios";

const AddTaskModal = ({ setTrig }) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setFormData] = useState({ title: "", description: "" });
  const [date, setDate] = useState(null);
  const [tag, setTag] = useState(null);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (tag === null || date === null) {
      toast({
        title: "Please Select Both Tag and Date",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      let newData = {
        ...data,
        date: date.toLocaleDateString(),
        category: tag,
        user: JSON.parse(localStorage.getItem("user"))._id,
      };
      await axios
        .post("https://calm-springs-45611.herokuapp.com/todo/add", newData)
        .then((r) =>
          toast({
            title: "Your Task is added",
            status: "success",
            duration: 2000,
            isClosable: true,
          })
        )
        .catch((e) => console.log(e));

      setTrig((prev) => !prev);
    }
  };

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
              name="title"
              type="text"
              onChange={handleChange}
              value={data.title}
            />
            <textarea
              placeholder="Add a description to your todo"
              id="description"
              rows="4"
              cols="50"
              name="description"
              onChange={handleChange}
              value={data.description}
            ></textarea>

            <div>
              <CalendarComp onClick={(value) => setDate(value)} />
              {date && <Text color="green">{date.toLocaleDateString()}</Text>}
              <div>
                {tag && (
                  <Text color="purple" fontWeight={"bolder"}>
                    {tag}
                  </Text>
                )}
                <AddLabel setTag={setTag} />
                <AddTimer />
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button size="sm" mr={3} onClick={onClose} colorScheme="red">
              Cancle
            </Button>
            <Button
              size="sm"
              colorScheme="green"
              onClick={() => {
                handleSubmit();
                onClose();
              }}
            >
              Add task
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddTaskModal;
