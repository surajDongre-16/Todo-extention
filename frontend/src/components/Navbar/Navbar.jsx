import React from "react";
import "./stylesheets/navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import TimelineIcon from '@mui/icons-material/Timeline';
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TodayIcon from "@mui/icons-material/Today";
import SearchIcon from "@mui/icons-material/Search";

import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
	DrawerHeader,
	Box,
	Flex,
	Text,
} from "@chakra-ui/react";

import {
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	useDisclosure,
} from "@chakra-ui/react";

import AddTaskModal from "./AddTaskModal";
import { FiLogOut } from "react-icons/fi";
import { MdToday } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../Redux/action";




const Navbar = ({setTrig}) => {
	  const dispatch = useDispatch();

	const { isOpen, onOpen, onClose } = useDisclosure();
	const handleClick = (str) => {
		dispatch(action.switch_page(str));
		onClose();
	};
  const activeTab=useSelector(store=>store.currentPage)

	const user=JSON.parse(localStorage.getItem("user"))
	const initials=user.name.split(" ")
	

	return (
    <div id="navbar">
      <div>
        <div className="hover">
          <MenuIcon onClick={onOpen} />
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />

            <DrawerContent>
              <DrawerHeader>Align Your Todo</DrawerHeader>
              <DrawerBody id="drawerChild">
                <div
                  onClick={(e) => {
                    handleClick("home");
                  }}
                  className={activeTab === "home" ? "active" : ""}
                >
                  <TodayIcon />
                  <p>Today</p>
                </div>
                <div
                  onClick={(e) => {
                    handleClick("upcoming");
                  }}
                  className={activeTab === "upcoming" ? "active" : ""}
                >
                  <CalendarMonthIcon />
                  <p>Upcoming</p>
                </div>
                <div
                  onClick={(e) => {
                    handleClick("completed");
                  }}
                  className={activeTab === "completed" ? "active" : ""}
                >
                  <CheckCircleOutlineIcon />
                  <p>Completed</p>
                </div>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
        <div className="hover" onClick={()=>handleClick("home")}>
          <HomeIcon />
        </div>
        <div>
          <SearchIcon cursor="pointer"/>
          <input type="text" />
        </div>
      </div>
      <div>
        <div className="hover">
          <AddTaskModal setTrig={setTrig} />
        </div>
        <div className="hover" onClick={()=>handleClick("activity")}>
          <TimelineIcon/>
        </div>
        <div className="hover" onClick={()=>handleClick("completed")}>
          <CheckCircleOutlineIcon/>
        </div>

        <div>
          <Menu>
            <MenuButton
              as={Button}
              borderRadius="50%"
              textAlign="center"
              height="28px"
              backgroundColor="white"
            >
              {initials[0][0]}
              {initials[initials.length - 1][0]}
            </MenuButton>
            <MenuList>
              <Box p="0 1rem" borderBottom="1px solid #f0f0f0">
                <Flex h="4rem" alignItems={"center"}>
                  <Flex
                    borderRadius="50%"
                    textAlign="center"
                    height="35px"
                    w="35px"
                    bg="blue.400"
                    color="white"
                    alignItems={"center"}
                    justifyContent="center"
                  >
                    {initials[0][0]}
                    {initials[initials.length - 1][0]}
                  </Flex>
                  <Flex
                    flexDirection={"column"}
                    ml="1rem"
                    bgGradient="linear(to-l, #7928CA,#FF0080)"
                    bgClip="text"
                  >
                    <Text>{user.name}</Text>
                    <Text fontSize={"0.8rem"}>{user.email}</Text>
                  </Flex>
                </Flex>
              </Box>
              <MenuItem
                mt="1rem"
                onClick={(e) => {
                  handleClick("home");
                }}
                className={activeTab === "home" ? "active" : ""}
              >
                <MdToday fontSize={"1.4rem"} color="purple" />
                <Text ml="1rem">Today</Text>
              </MenuItem>
              <MenuItem
                onClick={(e) => {
                  handleClick("upcoming");
                }}
                className={activeTab === "upcoming" ? "active" : ""}
              >
                <FaRegCalendarAlt fontSize={"1.4rem"} color="#5252a9" />
                <Text ml="1rem">Upcoming</Text>
              </MenuItem>
              <MenuItem
                onClick={(e) => {
                  handleClick("completed");
                }}
                className={activeTab === "completed" ? "active" : ""}
              >
                <BsCheckCircle fontSize={"1.4rem"} color="green" />
                <Text ml="1rem">Completed</Text>
              </MenuItem>
              
              <MenuItem
                onClick={(e) => {
                  localStorage.setItem("token", "");
                  localStorage.setItem("user", "");
                  dispatch(action.switch_page("login"));
                }}
              >
                <FiLogOut fontSize={"1.4rem"} color="red" />
                <Text ml="1rem">Logout</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
