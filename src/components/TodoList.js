import React from "react";

export default function TodoList(props) {
		console.log(props.list);
		let myData = props.list.map((item, index) => {
			return <li key={index}>{item}</li>
		})
		return(
			<ul>{myData}</ul>
		);
}
