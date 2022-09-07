import { Box, Flex, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActivityItem from "../components/Activity/ActivityItem";
import Navbar from "../components/Navbar/Navbar";
import * as action from "../Redux/action";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const Completed = () => {
	const todo = useSelector((store) => store.todo);
	let [completedTasks, setCompleted] = useState([]);
	const [trig, setTrig] = useState(false);
	const id = JSON.parse(localStorage.getItem("user"))._id;
	const dispatch = useDispatch();
	const isLoading = useRef(true);
	const CompletedBody = useRef(<></>);

	useEffect(() => {
		const id = setTimeout(() => {
			sendRequest().then((data) => {
				dispatch(action.setTodo(data.todos));
			});
			isLoading.current = false;
		}, 700);
	}, [trig, dispatch]);

	useEffect(() => {
		setCompleted(
			todo.filter((ele) => {
				return ele.status === true;
			}) || []
		);
	}, [todo]);

	const sendRequest = async () => {
		const res = await axios
			.get(`https://calm-springs-45611.herokuapp.com/todo/user/${id}`)
			.catch((err) => console.log(err));
		const data = await res.data;
		return data;
	};

	const handleTrig = () => {
		setTrig((prev) => !prev);
	};

	const handleDelete = async (e) => {
		isLoading.current=true
		await axios
			.delete(`https://calm-springs-45611.herokuapp.com/todo/${e._id}`)
			.then((r) => handleTrig())
			.catch((e) => console.log(e));
	};

	if (isLoading.current) {
		CompletedBody.current = [
			<Flex>
				<SkeletonCircle size="14" />
				<Box style={{ marginLeft: "30px", marginTop: "6px" }}>
					<Skeleton width="250px" height="14px"></Skeleton>
					<Skeleton marginTop="14px" width="80px" height="14px"></Skeleton>
				</Box>
			</Flex>,<><br /></>,
			<Flex>
				<SkeletonCircle size="14" />
				<Box style={{ marginLeft: "30px", marginTop: "6px" }}>
					<Skeleton width="250px" height="14px"></Skeleton>
					<Skeleton marginTop="14px" width="80px" height="14px"></Skeleton>
				</Box>

			</Flex>
		];
	} else if (!isLoading.current && completedTasks.length) {
		CompletedBody.current = completedTasks.map((ele) => (
			<ActivityItem
				handleDelete={handleDelete}
				key={ele._id}
				task={ele}
				status={ele.status}
			/>
		));
	} else if (!isLoading.current && !completedTasks.length) {
		CompletedBody.current = (
			<Image
				src="https://cdn.dribbble.com/users/634336/screenshots/2246883/_____.png"
				alt="empty"
			/>
		);
	}

	return (
		<>
			<Navbar />
			<div
				id="Activity"
				style={{ width: "80%", margin: "auto", marginTop: "40px" }}
			>
				{/* Heading for completed task page*/}
				<h2 style={{ fontSize: "24px", fontWeight: "600" }}>
					Completed Tasks ({completedTasks.length})
				</h2>
				<br />

				{/* completed task list starts here */}

				{CompletedBody.current}
			</div>
		</>
	);
};

export default Completed;
