import { fontSize } from "@mui/system";
import React from "react";
import "./ActivityItem.css";

const ActivityItem = () => {
	const status = false;

	return (
		<>
			<div className="activityItem">
				<div className={status ? "completed" : "pending"}>jk</div>
				<div style={{ marginLeft: "30px" }}>
					<h4 style={{ fontSize: "18px", fontWeight: "600" }}>
						Title here{" "}
						<span style={{ fontSize: "14px", fontWeight: "400" }}>
							(Tag here)
						</span>
					</h4>
					<p style={{ fontSize: "14px", overflow: "hidden" }}>
						Description here{" "}
					</p>
				</div>
			</div>
			<div className="activityItem">
				<div className={status ? "completed" : "pending"}>jk</div>
				<div style={{ marginLeft: "30px" }}>
					<h4 style={{ fontSize: "18px", fontWeight: "600" }}>
						Title here{" "}
						<span style={{ fontSize: "14px", fontWeight: "400" }}>
							(Tag here)
						</span>
					</h4>
					<p style={{ fontSize: "14px", overflow: "hidden" }}>
						Description here{" "}
					</p>
				</div>
			</div>
		</>
	);
};

export default ActivityItem;
