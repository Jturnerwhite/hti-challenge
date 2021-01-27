import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CaseOverview from './pages/case-overview';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					HTI - Challenge
				</header>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));