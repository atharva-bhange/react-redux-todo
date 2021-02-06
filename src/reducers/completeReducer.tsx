import { Reducer } from "redux";

import { complete } from "types/storeType";
import {
	markCompleteAction,
	deleteTodoAction,
	markIncompleteAction,
} from "types/actionsType";

const initialState: complete = [];

const completeReducer: Reducer<
	complete,
	markCompleteAction | deleteTodoAction | markIncompleteAction
> = (state = initialState, action) => {
	switch (action.type) {
		case "MARK_COMPLETE":
			return [...state, action.todo];
		case "MARK_INCOMPLETE":
		case "DELETE_TODO":
			return [...state.filter((todo) => todo !== action.todo)];
		default:
			return [...state];
	}
};

export default completeReducer;
