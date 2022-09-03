import React from "react";
import {
	HStack,
	VStack,
	Text,
	Flex,
	Checkbox,
	Box,
	Image,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import Edit from "./Edit";
import axios from "axios";

const TodoList = ({ todo , setTrig }) => {
	const handleTrig = () => {
		setTrig((prev) => !prev);
	};
	// console.log(todo, "cehcked");
	const handleCheckBox = async (e) => {
		let newData = {
			...e,
			status: !e.status,
		};
		// console.log(newData)
		await axios
			.put(`https://calm-springs-45611.herokuapp.com/todo/update/${e._id}`, newData)
			.then((r) => {
				// console.log(r)
				handleTrig();
			})

			.catch((e) => console.log(e));
	};

	const handleDelete = async (e) => {
		await axios
			.delete(`https://calm-springs-45611.herokuapp.com/todo/${e._id}`)
			.then((r) => handleTrig())
			.catch((e) => console.log(e));
	};

	return (
		<VStack>
			{todo.length ? (
				todo.map((el) => (
					<>
						{!el.status ? (
							<>
								<HStack
									w="400px"
									h="auto"
									key={el._id}
									borderBottom="0.01px solid 	#D3D3D3"
								>
									<Flex p={3} w="400px" justifyContent="space-around">
										<Box h="auto">
											<Checkbox
												isChecked={el.status}
												size="md"
												colorScheme="green"
												mt="-4px"
												border="grey"
												fontWeight="bold"
												color="#36454F"
												onChange={(e) => handleCheckBox(el)}
											>
												{el.title}{" "}
												<span style={{ color: "teal" }}>({el.category})</span>
											</Checkbox>
											<Text fontSize="14px" color="grey">
												{el.description}
											</Text>
										</Box>

										<Flex
											w="10px"
											flexDirection="column"
											alignItems="center"
											gap={5}
											ml="auto"
										>
											<DeleteIcon
												color="red.500"
												onClick={(e) => handleDelete(el)}
											/>

											<Edit todo={el} onClick={handleTrig} />
										</Flex>
									</Flex>
								</HStack>
							</>
						) : (
							""
						)}
					</>
				))
			) : (
				<Image
					src="https://cdn.dribbble.com/users/634336/screenshots/2246883/_____.png"
					alt="empty"
				/>
			)}
		</VStack>
	);
};

export default TodoList;
