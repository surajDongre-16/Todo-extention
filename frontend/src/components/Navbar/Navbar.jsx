import React from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TodayIcon from "@mui/icons-material/Today";

import {
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	useDisclosure,
} from "@chakra-ui/react";

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<div id="navbar">
			<div>
				<div>
					<MenuIcon onClick={onOpen} />
					<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
						<DrawerOverlay />
						<DrawerContent>
							<DrawerBody id="drawerChild">
								<div className="active">
									<TodayIcon />
									<p>Today</p>
								</div>
								<div>
									<CalendarMonthIcon />
									<p>upcoming</p>
								</div>
							</DrawerBody>
						</DrawerContent>
					</Drawer>
				</div>
				<div>
					<HomeIcon />
				</div>
				<div>
					<input type="text" />
				</div>
			</div>
			<div>
				<div>
					<AddIcon />
				</div>
				<div>
					<TimelapseIcon />
				</div>
				<div>
					<HelpOutlineIcon />
				</div>
				<div>
					<NotificationsIcon />
				</div>
        <div>
          jk
        </div>
			</div>
		</div>
	);
};

export default Navbar;
