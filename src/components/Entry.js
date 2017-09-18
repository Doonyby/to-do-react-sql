import React from "react";
import TodoInput from "./TodoInput.js";
import TodoList from "./TodoList.js";

class Entry extends React.Component {
	constructor() {
		super()
		this.state= {
			data: ["this", "will", "be", "my", "data", "from", "my", "sql", "server"],
		}
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}
	handleKeyPress(e) {
		if (e.key === 'Enter') {
			let newData = this.state.data;
			console.log(e.target.value);
			newData.push(e.target.value);
			this.setState({
				data: newData,
			});
			e.target.value="";
		}
	}
	render() {
		return(
			<div>
				<h1>My Todo List</h1>
				<TodoInput handleKeyPress={this.handleKeyPress}/>
				<TodoList list={this.state.data}/>
			</div>
		);
	}
}

export default Entry;
