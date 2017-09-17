import React from "react";
import { HashRouter, Route } from "react-router";
import Entry from "./Entry.js";
import Page404 from "./Page404.js"

class App extends React.Component {
	render() {
		return (
				<HashRouter>
						<Route path="/" component={Entry} />
						<Route path="*" component={Page404} />
				</HashRouter>
		);
	}
}

export default App;
