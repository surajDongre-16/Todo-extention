import React from "react";
import LabelIcon from "@mui/icons-material/Label";

import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from "@chakra-ui/react";

const AddLabel = ({setTag}) => {
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
					<MenuItem onClick={()=>setTag("personal")} >+  Personal</MenuItem>
                    <MenuItem onClick={()=>setTag("work")}>+  work</MenuItem>
				</MenuList>
			</Menu>
		</>
	);
};

export default AddLabel;
