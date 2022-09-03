import { Flex, Select, Image } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ActivityItem from "../components/Activity/ActivityItem";
import "../components/Activity/ActivityItem.css";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import { useDispatch } from "react-redux";
import * as action from "../Redux/action";

const ActivityList = () => {
	const todo = useSelector((store) => store.todo);
	const [render, setRender] = useState([]);
	const [sort, setSort] = useState("completed");
	const id = JSON.parse(localStorage.getItem("user"))._id;
	const dispatch = useDispatch();

	const [trig, setTrig] = useState(false);

	const handleTrig = () => {
		setTrig((prev) => !prev);
	};

	const handleDelete = async (e) => {
		await axios
			.delete(`http://localhost:5000/todo/${e._id}`)
			.then((r) => handleTrig())
			.catch((e) => console.log(e));
	};

	useEffect(() => {
		setSort("All tasks");
	}, [setSort]);

	useEffect(() => {
		sendRequest().then((data) => {
			dispatch(action.setTodo(data.todos));
		});
	}, [trig, dispatch]);

	const sendRequest = async () => {
		const res = await axios
			.get(`http://localhost:5000/todo/user/${id}`)
			.catch((err) => console.log(err));
		const data = await res.data;
		return data;
	};

	const handleChange = (e) => {
		setSort(e.target.value);
	};

	useEffect(() => {
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
	}, [sort, todo]);

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

				{render.length ? (
					render.map((ele) => (
						<ActivityItem
							task={ele}
							status={ele.status}
							handleDelete={handleDelete}
						/>
					))
				) : (
					<Image
						src="https://cdn.dribbble.com/users/634336/screenshots/2246883/_____.png"
						alt="empty"
					/>
				)}
			</div>
		</>
	);
};

export default ActivityList;
