import { Flex, Select } from "@chakra-ui/react";
import React from "react";
import ActivityItem from "../components/Activity/ActivityItem";

const ActivityList = () => {
	return (
		<div style={{width:"80%",margin:"auto",marginTop:"50px"}}>
			<Flex style={{justifyContent:"space-between"}}>
				<h2 style={{fontSize:"24px",fontWeight:"600"}}>Activity</h2>
				<Select w="160px">
					<option value="completed">Completed</option>
					<option value="today">Today</option>
					<option value="upcoming">Upcoming</option>
				</Select>
			</Flex>
			<br />
			<ActivityItem/>
		</div>
	);
};

export default ActivityList;
