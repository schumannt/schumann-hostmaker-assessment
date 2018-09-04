import React, { Component } from 'react';
import logo from './hostmaker-logo.svg';
import './App.css';
import Table from './user-table';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} alt="hostmaker logo" className="App-logo" />
				</header>
				<div className="App-content">
                    <Table/>
				</div>
			</div>
		);
	}
}

