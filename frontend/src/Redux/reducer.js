import * as actionType from "./actionType";

const data=localStorage.getItem("user") || null

const initialState = {
	currentPage: data ? "home" : "signup",
	todo:[]
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	console.log(payload)

	switch (type) {
		case actionType.Switch_page:
			

			return {
				...state,
				currentPage:payload
			};

		case actionType.set_todo:
			return{
				...state,
				todo:payload
			}

		default:
			return state;
	}
};
