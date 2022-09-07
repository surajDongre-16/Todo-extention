import React from "react";
import "./ActivityItem.css";
import { DeleteIcon } from "@chakra-ui/icons";


const ActivityItem = ({ task, status, handleDelete }) => {
	const name = JSON.parse(localStorage.getItem("user")).name;
	const Name = name.split(" ");
	

	return (
		<>
			<div className="activityItem">
				<div className={status ? "completed" : "pending"}>
					{Name[0][0]}
					{Name[Name.length - 1][0]}
				</div>
				<div style={{ display: "flex", justifyContent: "space-around" }}>
					<div style={{ marginLeft: "30px", width: "250px" }}>
						<h4 style={{ fontSize: "16px", fontWeight: "600" }}>
							{task.title + " "}
							<span
								style={{ fontSize: "14px", fontWeight: "400", color: "teal" }}
							>
								({task.category})
							</span>
						</h4>
						<p style={{ fontSize: "12px", overflow: "hidden" }}>
							{task.description}
						</p>
					</div>
					<div style={{ marginLeft: "auto", color: "red" }}>
						<DeleteIcon fontSize="20px" cursor="pointer"  onClick={(e)=> handleDelete(task)}/>
					</div>
				</div>
			</div>
		</>
	);
};

export default ActivityItem;
