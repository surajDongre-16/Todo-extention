import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../Redux/action";

const Signup = () => {
	const curPage = useSelector((store) => store.currentPage);
	console.log(curPage);
	const dispatch = useDispatch();

	return (
		<div
			onClick={() => {
				dispatch(action.switch_page("home"));
			}}
		>
			Signup
		</div>
	);
};

export default Signup;
