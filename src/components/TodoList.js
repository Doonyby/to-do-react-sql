import React from "react";

class TodoList extends React.Component {
	constructor() {
		super()
		this.state= {
			data: ["this", "will", "be", "my", "data", "from", "my", "sql", "server"],
		}
	}
	render() {
		console.log(this.state.data);
		let myData = this.state.data.map((item, index) => {
			return <li key={index}>{item}</li>
		})
		return(
			<ul>{myData}</ul>
		);
	}
}

export default TodoList;
