import React from "react";

export default function TodoInput(props) {
	return(
		<input type="text" onKeyPress={props.handleKeyPress} />
	);
}
