import React from "react";
import { render } from "react-dom";
import { HashRouter, Route, Switch } from 'react-router-dom';
import Entry from "./components/Entry.js";
import Page404 from "./components/Page404.js"
import './css/main.css';

const NoMatch = () => (
	<h1>This page seems to quite possibly not exist very much.  Sorry old chap!!</h1>
)

const App = (
			<HashRouter>
					<Switch>
					    <Route path="/" component={Entry} />
							<Route component={NoMatch}/>
					</Switch>
			</HashRouter>
		);

document.addEventListener('DOMContentLoaded', () =>
    render(App, document.getElementById('app'))
);
