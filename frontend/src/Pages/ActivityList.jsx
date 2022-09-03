import { Flex, Select } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ActivityItem from "../components/Activity/ActivityItem";
import "../components/Activity/ActivityItem.css";
import Navbar from "../components/Navbar/Navbar";

const ActivityList = () => {
	const todo = useSelector((store) => store.todo);
	const [render, setRender] = useState(todo);
	const [sort, setSort] = useState("completed");

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
			case "today":{
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
		
	}, [sort]);

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
						<option value="completed">Completed</option>
						<option value="pending">Pending</option>
						<option value="today">Today</option>
						<option value="upcoming">Upcoming</option>
					</Select>
				</Flex>
				<br />

				{render.map((ele) => (
					<ActivityItem task={ele} status={ele.status} />
				))}
			</div>
		</>
	);
};

export default ActivityList;
