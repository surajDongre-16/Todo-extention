import React from "react";
import Navbar from "../components/Navbar/Navbar";
import TodoMain from "../components/todoUi/TodoMain";
import ActivityList from './ActivityList'

const Home = () => {
	return (
		<div id="home">
			<Navbar />
			{/* <TodoMain/> */}
			<ActivityList/>

		</div>
			
	);
};

export default Home;
