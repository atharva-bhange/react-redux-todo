import React, { useRef } from "react";
import {
	Container,
	Button,
	InputGroup,
	FormControl,
	ListGroup,
	ListGroupItem,
} from "react-bootstrap";
import { connect } from "react-redux";

import "./App.css";
import { deleteTodo, markComplete, markIncomplete } from "action/";
import storeType from "types/storeType";
import AppPropType from "./AppPropType";

const App: React.FC<AppPropType> = ({
	completeTodo,
	incompleteTodo,
	deleteTodo,
	markComplete,
	markIncomplete,
}) => {
	const input = useRef<HTMLInputElement>(null);

	const renderList = (type: "Complete" | "Incomplete") => {
		const data = type === "Complete" ? completeTodo : incompleteTodo;
		return (
			<ListGroup variant="flush" className="m-2">
				<h4>{type}</h4>
				{data.map((todo, index) => (
					<ListGroupItem
						key={index}
						variant={type === "Complete" ? "success" : "danger"}
						style={{ display: "flex", justifyContent: "space-between" }}
						action
					>
						<div>{todo}</div>
						<div>
							<i
								className={`fas fa-${
									type === "Complete" ? "minus" : "check"
								} m-2`}
								onClick={() => {
									type === "Complete"
										? markIncomplete(todo)
										: markComplete(todo);
								}}
							/>
							<i
								className="fas fa-trash m-2"
								onClick={() => deleteTodo(todo)}
							/>
						</div>
					</ListGroupItem>
				))}
			</ListGroup>
		);
	};

	const addTodo = () => {
		if (input.current) {
			const newTodo = input.current.value;
			input.current.value = "";
			markIncomplete(newTodo);
		}
	};

	return (
		<Container>
			<InputGroup className="m-3">
				<FormControl placeholder="Todo" ref={input} />
				<InputGroup.Append>
					<Button variant="secondary" onClick={addTodo}>
						<i className="fas fa-plus mr-3"></i>
						Add
					</Button>
				</InputGroup.Append>
			</InputGroup>
			{renderList("Incomplete")}
			{renderList("Complete")}
		</Container>
	);
};

const mapStateToProps = (state: storeType) => {
	return {
		completeTodo: state.complete,
		incompleteTodo: state.incomplete,
	};
};

export default connect(mapStateToProps, {
	deleteTodo,
	markComplete,
	markIncomplete,
})(App);
