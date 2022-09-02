import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ActivityItem from "../components/Activity/ActivityItem";
import Navbar from "../components/Navbar/Navbar";
import TodoList from "../components/todoUi/TodoList";

const Upcoming = () => {
	const today = new Date();
	const curDate = today.getDate();
	const [trig, setTrig] = useState(false);
	const id = JSON.parse(localStorage.getItem("user"))._id;

	const sendRequest = async () => {
		const res = await axios
			.get(`http://localhost:5000/todo/user/${id}`)
			.catch((err) => console.log(err));
		const data = await res.data;
		return data;
	};

	const todo = useSelector((store) => store.todo);
	const [upcominTasks, setupcomingTask] = useState(todo);

	useEffect(() => {
		setupcomingTask(
			todo.filter((ele) => {
				let date = Number(ele.date.split("-")[2]);
				console.log(date > curDate);
				return curDate <= date;
			}))
	},[todo])

	return (
		<>
			<Navbar />
			<div
				id="Activity"
				style={{ width: "80%", margin: "auto", marginTop: "40px" }}
			>
				<h2 style={{ fontSize: "24px", fontWeight: "600" }}>Upcoming Tasks ({upcominTasks.length})</h2>
				<br />
				{upcominTasks.length && upcominTasks.length ?
					upcominTasks.map((ele) => (
						<TodoList key={ele._id} todo={upcominTasks} setTrig={setTrig} />
					)):<p>There are no Upcoming Task assigned</p>}
			</div>
		</>
	);
};

export default Upcoming;
