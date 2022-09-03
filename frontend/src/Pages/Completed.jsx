import { Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActivityItem from "../components/Activity/ActivityItem";
import Navbar from "../components/Navbar/Navbar";
import * as action from "../Redux/action"

const Completed = () => {
	const todo = useSelector((store) => store.todo);
	let [completedTasks, setCompleted] = useState([]);
	const [trig, setTrig] = useState(false);
	const id = JSON.parse(localStorage.getItem("user"))._id;
	const dispatch = useDispatch();

	useEffect(() => {
		setCompleted(
			(todo.length &&
				todo.filter((ele) => {
					return ele.status === true;
				})) ||
				[]
		);
	}, [trig,todo]);

	const sendRequest = async () => {
		const res = await axios
			.get(`https://calm-springs-45611.herokuapp.com/todo/user/${id}`)
			.catch((err) => console.log(err));
		const data = await res.data;
		return data;
	};

	useEffect(() => {
		sendRequest().then((data) => {
			dispatch(action.setTodo(data.todos));
		});
	}, [trig, dispatch]);

	

	const handleTrig = () => {
		setTrig((prev) => !prev);
	};

	const handleDelete = async (e) => {
		await axios
			.delete(`https://calm-springs-45611.herokuapp.com/todo/${e._id}`)
			.then((r) => handleTrig())
			.catch((e) => console.log(e));
	};

	return (
		<>
			<Navbar />
			<div
				id="Activity"
				style={{ width: "80%", margin: "auto", marginTop: "40px" }}
			>
				<h2 style={{ fontSize: "24px", fontWeight: "600" }}>
					Completed Tasks ({completedTasks.length})
				</h2>
				<br />
				{completedTasks.length ? (
					completedTasks.map((ele) => (
						<ActivityItem
							handleDelete={handleDelete}
							key={ele._id}
							task={ele}
							status={ele.status}
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

export default Completed;
