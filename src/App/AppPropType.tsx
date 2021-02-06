import { complete, incomplete } from "types/storeType";
import {
	deleteTodoActionCreator,
	markCompleteActionCreator,
	markIncompleteActionCreator,
} from "types/actionCreatorTypes";

interface AppPropType {
	completeTodo: complete;
	incompleteTodo: incomplete;
	deleteTodo: deleteTodoActionCreator;
	markComplete: markCompleteActionCreator;
	markIncomplete: markIncompleteActionCreator;
}

export default AppPropType;
