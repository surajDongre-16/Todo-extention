import React from "react";
import LabelIcon from "@mui/icons-material/Label";

import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
	DrawerHeader,
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
					<div style={{marginBottom:"10px",padding:"0px 20px"}}>
						<input style={{paddingLeft:"20px",marginRight:"20px"}} type="text" placeholder="Add a label to the task" />
                        <Button disabled={true} size="sm" colorScheme="red">Add Label</Button>
					</div>
				</MenuList>
			</Menu>
		</>
	);
};

export default AddLabel;
