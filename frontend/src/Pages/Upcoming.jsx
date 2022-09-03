import { Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActivityItem from "../components/Activity/ActivityItem";
import Navbar from "../components/Navbar/Navbar";
import TodoList from "../components/todoUi/TodoList";
import * as action from "../Redux/action";

const Upcoming = () => {
	const todo = useSelector((store) => store.todo);
	const id = JSON.parse(localStorage.getItem("user"))._id;

	const today = new Date().toLocaleDateString().split("/").join("");

	const [trig, setTrig] = useState(false);
	const dispatch = useDispatch();

	const [upcominTasks, setupcomingTask] = useState(
		todo.filter((ele) => Number(ele.date.split("/").join("")) > Number(today))
	);

	const sendRequest = async () => {
		const res = await axios
			.get(`http://localhost:5000/todo/user/${id}`)
			.catch((err) => console.log(err));
		const data = await res.data;
		return data;
	};

	useEffect(() => {
		sendRequest().then((data) => {
			dispatch(action.setTodo(data.todos));
		});
	}, [trig, dispatch]);

	useEffect(() => {
		setupcomingTask(
			todo.filter((ele) => Number(ele.date.split("/").join("")) > Number(today))
		);
	}, [todo, today]);

	return (
		<>
			<Navbar />
			<div
				id="Activity"
				style={{ width: "80%", margin: "auto", marginTop: "40px" }}
			>
				{upcominTasks.length > 0 ? (
					<h2 style={{ fontSize: "24px", fontWeight: "600" }}>
						Upcoming Tasks ({upcominTasks.length})
					</h2>
				) : (
					""
				)}
				<br />
				{upcominTasks.length ? (
					upcominTasks.map((ele, indx) => {
						if (indx) {
							return [];
						}
						return (
							<TodoList key={ele._id} todo={upcominTasks} setTrig={setTrig} />
						);
					})
				) : (
					<>
						{/* <p>There are no Upcoming Task assigned</p> */}
						<Image
							src="https://c.tenor.com/JBdfqjaxCsIAAAAi/head-empty-fuwa.gif"
							alt="empty"
						/>
					</>
				)}
			</div>
		</>
	);
};

export default Upcoming;
