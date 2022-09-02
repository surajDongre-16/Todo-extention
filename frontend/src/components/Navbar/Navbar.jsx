import React, { useState } from "react";
import "./stylesheets/navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
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
	Avatar,
	Text,
	Spacer,
} from "@chakra-ui/react";

import {
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	useDisclosure,
} from "@chakra-ui/react";

import AddTaskModal from "./AddTaskModal";

import { AiOutlineSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { MdToday } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import * as action from "../../Redux/action";



const Navbar = () => {
	  const dispatch = useDispatch();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [activeTab, setActiveTab] = useState("today");
	const handleClick = (str) => {
		setActiveTab(str);
		onClose();
	};

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
										handleClick("today");
									}}
									className={activeTab === "today" ? "active" : ""}
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
				<div className="hover">
					<HomeIcon />
				</div>
				<div>
					<SearchIcon />
					<input type="text" />
				</div>
			</div>
			<div>
				<div className="hover">
					<AddTaskModal/>
				</div>
				<div className="hover">
					<CheckCircleOutlineIcon />
				</div >
				<div className="hover">
					<NotificationsIcon />
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
							jk
						</MenuButton>
						<MenuList>
							<Box p="0 1rem" borderBottom="1px solid #f0f0f0">
								<Flex h="4rem" alignItems={"center"}>
									<Avatar
										name="Kola Tioluwani"
										src="https://bit.ly/tioluwani-kolawole"
									/>
									<Flex flexDirection={"column"} ml="1rem">
										<Text>Suraj</Text>
										<Text fontSize={"0.8rem"}>surajdongre8@gmail.com</Text>
									</Flex>
								</Flex>
							</Box>
							<MenuItem
								mt="1rem"
								onClick={(e) => {
									handleClick("today");
								}}
								className={activeTab === "today" ? "active" : ""}
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
								<FaRegCalendarAlt fontSize={"1.4rem"} color="brown" />
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
									handleClick("settings");
								}}
								className={activeTab === "settings" ? "active" : ""}
							>
								<AiOutlineSetting fontSize={"1.4rem"} color="#a8bfb8" />
								<Text ml="1rem">Settings</Text>
							</MenuItem>
							<MenuItem
								onClick={(e) => {
									localStorage.setItem("token","")
									localStorage.setItem("id","");
									 dispatch(action.switch_page("login"));
								}}
							>
								<FiLogOut fontSize={"1.4rem"} color="#a8bfb8" />
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
