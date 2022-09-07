import { Box, Flex, Skeleton, SkeletonCircle } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import TodoMain from "../components/todoUi/TodoMain";
import * as action from "../Redux/action";

const Home = () => {
	const id = JSON.parse(localStorage.getItem("user"))._id;

	const [todos, setTodos] = useState();
	const [trig, setTrig] = useState(false);
	const dispatch = useDispatch();
	const isLoading = useRef(true);
	const todo = useSelector((store) => store.todo);
	const LoadingInterface=useRef(
		[
			<Flex>
				<SkeletonCircle size="14" />
				<Box style={{ marginLeft: "30px", marginTop: "6px" }}>
					<Skeleton width="250px" height="14px"></Skeleton>
					<Skeleton marginTop="14px" width="80px" height="14px"></Skeleton>
				</Box>
			</Flex>,
			<>
				<br />
			</>,
			<Flex>
				<SkeletonCircle size="14" />
				<Box style={{ marginLeft: "30px", marginTop: "6px" }}>
					<Skeleton width="250px" height="14px"></Skeleton>
					<Skeleton marginTop="14px" width="80px" height="14px"></Skeleton>
				</Box>
			</Flex>
		]
	)

	const sendRequest = async () => {
		const res = await axios
			.get(`https://calm-springs-45611.herokuapp.com/todo/user/${id}`)
			.catch((err) => console.log(err));
		const data = await res.data;
		return data;
	};

	useEffect(() => {
		isLoading.current = true;
		sendRequest().then((data) => {
			setTodos(data.todos);
			dispatch(action.setTodo(data.todos));
		});
	}, [trig]);

	useEffect(() => {
		let today = new Date();
		let curDate = today.getDate();
		if(!todo.length) return
		setTimeout(() => {
			setTodos(
				todo.filter((ele) => {
					let date = Number(ele.date.split("/")[1]);
					return date == curDate && ele.status === false;
				})
			);
			isLoading.current = false;
		}, 1000);
	}, [todo]);

	return (
		<div id="home">
			<Navbar setTrig={setTrig} />
			<TodoMain LoadingInterface={LoadingInterface} isLoading={isLoading}  todo={todos} setTrig={setTrig} />
		</div>
	);
};

export default Home;
