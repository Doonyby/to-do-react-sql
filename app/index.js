import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from "react-router";

import Entry from './component/Entry';

class App extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={Entry} />
			</Router>
		);
	}
}

render(<App />, document.getElementById('app'));