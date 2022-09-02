import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ActivityItem from "../components/Activity/ActivityItem";
import Navbar from "../components/Navbar/Navbar";

const Completed = () => {
	const todo = useSelector((store) => store.todo);

	const completedTasks =
		(todo.length &&
			todo.filter((ele) => {
				return ele.status === true;
			})) ||
		[];

	return (
		<>
			<Navbar />
			<div
				id="Activity"
				style={{ width: "80%", margin: "auto", marginTop: "40px" }}
			>
				<h2 style={{ fontSize: "24px", fontWeight: "600" }}>Completed Tasks ({completedTasks.length})</h2>
                <br />
                {completedTasks.length ? completedTasks.map(ele=><ActivityItem key={ele._id} task={ele} status={ele.status}/>):<p>Some Tasks yet to be completed</p>}
			</div>
			
		</>
	);
};

export default Completed;
