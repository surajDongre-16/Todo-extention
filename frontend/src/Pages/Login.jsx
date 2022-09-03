import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import * as action from "../Redux/action";
const Login = () => {
	// const curPage = useSelector((store) => store.currentPage);
	const [data, setFormData] = useState({});
	//   console.log(curPage);
	const dispatch = useDispatch();
	const handleChange = (e) => {
		let { name, value } = e.target;
		setFormData({
			...data,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("https://calm-springs-45611.herokuapp.com/user/login", data)
			.then((res) => {
				delete res.data.existinguser.password;
				// console.log(res, "data");
				localStorage.setItem("user", JSON.stringify(res.data.existinguser));
				localStorage.setItem("token", res.data.token);
				dispatch(action.switch_page("home"));
			})
			.catch((err) => console.log("Error during signup", err));
		// dispatch(action.switch_page("login"));
	};

	return (
		<Box
			display={"flex"}
			flexDirection="column"
			h="25rem"
			justifyContent={"space-around"}
			mt="5rem"
		>
			<Heading as="h3" size="lg" textAlign={"center"} color="blue.400">
				Login
			</Heading>

			<Button w="26rem" m="3rem auto 0" colorScheme={"gray"}>
				<Box
					display={"flex"}
					w="12rem"
					justifyContent={"space-between"}
					alignItems="center"
				>
					<FcGoogle size="1.5rem" />
					<Text> Continue with Google</Text>
				</Box>
			</Button>

			<form onSubmit={handleSubmit} style={{ width: "26rem", margin: "auto" }}>
				<Input
					isRequired
					name="email"
					type="email"
					placeholder="Enter your email"
					onChange={handleChange}
					mt="2rem"
				/>
				<Input
					isRequired
					name="password"
					type="password"
					placeholder="Enter your password"
					onChange={handleChange}
					mt="2rem"
				/>
				<Input
					type="submit"
					mt="2rem"
					color={"white"}
					fontWeight="bolder"
					fontSize={"1.2rem"}
					bg="blue.400"
					cursor={"pointer"}
				/>
			</form>
			<Box>
				<Text display={"flex"} justifyContent="center">
					If you are a new to app then
					<Text
						ml="0.5rem"
						color="blue.500"
						textDecor={"underline"}
						cursor="pointer"
						onClick={() => dispatch(action.switch_page("signup"))}
					>
						Signup here
					</Text>
				</Text>
			</Box>
		</Box>
	);
};

export default Login;
