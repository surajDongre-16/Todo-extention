import { Flex, Select, Image, Box } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ActivityItem from "../components/Activity/ActivityItem";
import "../components/Activity/ActivityItem.css";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import { useDispatch } from "react-redux";
import * as action from "../Redux/action";
import { Skeleton, SkeletonCircle } from "@chakra-ui/react";

const ActivityList = () => {
	const todo = useSelector((store) => store.todo);
	const [render, setRender] = useState([]);
	const [sort, setSort] = useState("completed");
	const id = JSON.parse(localStorage.getItem("user"))._id;
	const dispatch = useDispatch();
	const isLoading = useRef(true);
	const RenderBody = useRef(<></>);

	const [trig, setTrig] = useState(false);

	const handleTrig = () => {
		setTrig((prev) => !prev);
	};

	const handleDelete = async (e) => {
		await axios
			.delete(`https://calm-springs-45611.herokuapp.com/todo/${e._id}`)
			.then((r) => handleTrig())
			.catch((e) => console.log(e));
	};

	useEffect(() => {
		setSort("All tasks");
	}, [setSort]);

	useEffect(() => {
		setTimeout(() => {
			sendRequest().then((data) => {
				dispatch(action.setTodo(data.todos));
			});
			isLoading.current = false;
		}, 800);
	}, [trig, dispatch]);

	const sendRequest = async () => {
		const res = await axios
			.get(`https://calm-springs-45611.herokuapp.com/todo/user/${id}`)
			.catch((err) => console.log(err));
		const data = await res.data;
		return data;
	};

	const handleChange = (e) => {
		isLoading.current = true;
		setSort(e.target.value);
	};

	useEffect(() => {
		setTimeout(() => {
			isLoading.current = false;
			switch (sort) {
				case "All tasks":
					setRender(todo);
					break;
				case "completed":
					setRender(
						todo.filter((ele) => {
							return ele.status;
						})
					);
					break;

				case "pending":
					setRender(
						todo.filter((ele) => {
							return !ele.status;
						})
					);
					break;
				case "today": {
					let today = new Date();
					let curDate = today.getDate();
					setRender(
						todo.filter((ele) => {
							let date = Number(ele.date.split("/")[1]);
							return date == curDate;
						})
					);
					break;
				}
				case "upcoming":
					let today = new Date();
					let curDate = today.getDate();
					setRender(
						todo.filter((ele) => {
							let date = Number(ele.date.split("/")[1]);
							return date > curDate;
						})
					);
					break;
				default:
					break;
			}
		}, 500);
	}, [sort, todo]);

	if (isLoading.current) {
		RenderBody.current = [
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
			</Flex>,
		];
	} else if (!isLoading.current && render.length) {
		RenderBody.current = render.map((ele) => (
			<ActivityItem
				key={ele._id}
				task={ele}
				status={ele.status}
				handleDelete={handleDelete}
			/>
		));
	} else if (!isLoading.current && !render.length) {
		RenderBody.current = (
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
				style={{ width: "80%", margin: "auto", marginTop: "50px" }}
			>
				<Flex style={{ justifyContent: "space-between" }}>
					<h2 style={{ fontSize: "24px", fontWeight: "600" }}>Activity</h2>
					<Select w="160px" onChange={handleChange}>
						<option value="All tasks">All tasks</option>
						<option value="pending">Pending</option>
						<option value="completed">Completed</option>
						<option value="today">Today</option>
						<option value="upcoming">Upcoming</option>
					</Select>
				</Flex>
				<br />

				{RenderBody.current}
			</div>
		</>
	);
};

export default ActivityList;
