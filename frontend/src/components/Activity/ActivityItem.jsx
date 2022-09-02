import { fontSize } from "@mui/system";
import React from "react";
import "./ActivityItem.css";

const ActivityItem = ({ task, status }) => {
	return (
		<>
			<div className="activityItem">
				<div className={status ? "completed" : "pending"}>jk</div>
				<div style={{ marginLeft: "30px" }}>
					<h4 style={{ fontSize: "18px", fontWeight: "600" }}>
						{task.title + " "}
						<span style={{ fontSize: "14px", fontWeight: "400",color:"teal" }}>
							({task.category})
						</span>
					</h4>
					<p style={{ fontSize: "12px", overflow: "hidden" }}>
						{task.description}
					</p>
				</div>
			</div>
		</>
	);
};

export default ActivityItem;
