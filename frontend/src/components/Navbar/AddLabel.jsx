import React from "react";
import LabelIcon from "@mui/icons-material/Label";

import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
	DrawerHeader,
    useDisclosure,
} from "@chakra-ui/react";

const AddLabel = () => {
	return (
		<>
			<Menu>
				<MenuButton
					borderRadius="50%"
					textAlign="center"
					height="28px"
					backgroundColor="white"
				>
					<LabelIcon />
				</MenuButton>
				<MenuList>
					<MenuItem>+  Personal</MenuItem>
                    <MenuItem>+  work</MenuItem>
				</MenuList>
			</Menu>
		</>
	);
};

export default AddLabel;
