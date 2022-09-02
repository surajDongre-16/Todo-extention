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
} from "@chakra-ui/react";
import AddIcon from "@mui/icons-material/Add";
import "./stylesheets/addtaskModal.css";
import AddLabel from "./AddLabel";
import AddTimer from "./AddTimer";
import CalendarComp from "./Calendar";
import axios from "axios";

const AddTaskModal = ({ setTrig }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setFormData] = useState({});
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
    let newData = {
      ...data,
      date: date.toISOString().split("T")[0],
      category: tag,
      user: JSON.parse(localStorage.getItem("user"))._id,
    };
    await axios
      .post("http://localhost:5000/todo/add", newData)
      .then((r) => console.log(r))
      .catch((e) => console.log(e));

    setTrig((prev) => !prev);
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
            />
            <textarea
              placeholder="Add a description to your todo"
              id="description"
              rows="4"
              cols="50"
              name="description"
              onChange={handleChange}
            ></textarea>

            <div>
              <CalendarComp onClick={(value) => setDate(value)} />

              <div>
                <AddLabel setTag={setTag} />
                <AddTimer />
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button size="sm" variant="ghost" mr={3} onClick={onClose}>
              Cancle
            </Button>
            <Button
              size="sm"
              colorScheme="red"
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
