import React from "react";

class Entry extends React.Component {
	constructor() {
		super()
		this.state= {
			data: ["this", "will", "be", "my", "data", "from", "my", "sql", "server"],
		}
	}
	render() {
		console.log(props.data);
		return(
			<div>
				<h1>Hello World!!</h1>
			</div>
		);
	}
}

export default Entry;
