import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CaseOverviewPage from './pages/case-overview/case-overview';
//import './index.css';
import './base.scss';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					HTI - Challenge
				</header>
				<CaseOverviewPage/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));