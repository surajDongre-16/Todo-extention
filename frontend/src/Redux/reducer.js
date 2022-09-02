import * as actionType from "./actionType";

const data=localStorage.getItem("user") || null

const initialState = {
	currentPage: data ? "home" : "signup"
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case actionType.Switch_page:
			

			return {
				...state,
				currentPage:payload
			};

		default:
			return state;
	}
};
