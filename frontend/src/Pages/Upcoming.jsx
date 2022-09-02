import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ActivityItem from "../components/Activity/ActivityItem";
import Navbar from "../components/Navbar/Navbar";
import TodoList from "../components/todoUi/TodoList";

const Upcoming = () => {
	const todo = useSelector((store) => store.todo);
	// const today = new Date()
	const today = new Date().toLocaleDateString().split("/").join("");
	// const curDate = today.getDate();
	const [trig, setTrig] = useState(false);
	// const id = JSON.parse(localStorage.getItem("user"))._id;

	// const sendRequest = async () => {
	// 	const res = await axios
	// 		.get(`http://localhost:5000/todo/user/${id}`)
	// 		.catch((err) => console.log(err));
	// 	const data = await res.data;
	// 	return data;
	// };
	// console.log(today,"today")

    // let x = todo.filter((ele) => Number(ele.date.split("/").join("")) > Number(today))
    //   .map((item) => console.log(item, "item"));
// 	const [ageke, setageke] = useState(
//   );
// console.log(x,"next")
// 	console.log(today, "ajka");
	const [upcominTasks, setupcomingTask] = useState(
    todo.filter((ele) => Number(ele.date.split("/").join("")) > Number(today))
  );
	// console.log(upcominTasks,"ageka")
	useEffect(()=>{
		setupcomingTask(todo.filter((ele) => Number(ele.date.split("/").join("")) > Number(today)))
	},[todo])

	return (
		<>
			<Navbar />
			<div
				id="Activity"
				style={{ width: "80%", margin: "auto", marginTop: "40px" }}
			>
				<h2 style={{ fontSize: "24px", fontWeight: "600" }}>
					Upcoming Tasks ({upcominTasks.length})
				</h2>
				<br />
				{upcominTasks.length ? (
					upcominTasks.map((ele, indx) => {
						if (indx) {
							return [];
						}
						return <TodoList key={ele._id} todo={upcominTasks} setTrig={setTrig} />;
					})
				) : (
					<p>There are no Upcoming Task assigned</p>
				)}
			</div>
		</>
	);
};

export default Upcoming;
