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
} from "@chakra-ui/react";

import {
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	useDisclosure,
} from "@chakra-ui/react";
import AddTaskModal from "./AddTaskModal";

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [activeTab, setActiveTab] = useState("today");
	const handleClick = (str) => {
		setActiveTab(str);
		onClose();
	};

	return (
		<div id="navbar">
			<div>
				<div>
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
				<div>
					<HomeIcon />
				</div>
				<div>
					<SearchIcon />
					<input type="text" />
				</div>
			</div>
			<div>
				<div>
					<AddTaskModal />
				</div>
				<div>
					<CheckCircleOutlineIcon />
				</div>
				<div>
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
							<MenuItem>Download</MenuItem>
							<MenuItem>Create a Copy</MenuItem>
							<MenuItem>Mark as Draft</MenuItem>
							<MenuItem>Delete</MenuItem>
							<MenuItem>Attend a Workshop</MenuItem>
						</MenuList>
					</Menu>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
