import React from "react";
import TodoInput from "./TodoInput.js";
import TodoList from "./TodoList.js";

class Entry extends React.Component {
	render() {
		return(
			<div>
				<h1>My Todo List</h1>
				<TodoInput />
				<TodoList />
			</div>
		);
	}
}

export default Entry;
