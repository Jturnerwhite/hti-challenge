import React, { Component } from 'react';
import './case-overview.scss'

export default class CaseOverviewPage extends Component {
	render() {
		// Placeholder data to represent what might come from a store or an REST Api endpoint into the page
		const caseList = [
			{
				id: '12345',
				source: "John Hopscotch Medical",
				caseData: {}
			},
			{
				id: '2543453',
				source: "Girls City Medical",
				caseData: {}
			},
			{
				id: '124231-41755',
				source: "Functionist Medical",
				caseData: {}
			},
			{
				id: 'GH-124-BA12435',
				source: "ICH Health Medical",
				caseData: {}
			},
			{
				id: '2874934223 D 90u423u8 F1',
				source: "John Hopscotch Medical",
				caseData: {}
			},
			{
				id: '2112423346523324',
				source: "Girls City Medical",
				caseData: {}
			},
			{
				id: '12342343122135',
				source: "Functionist Medical",
				caseData: {}
			},
			{
				id: 'GH-124-BA1324342642685',
				source: "ICH Health Medical",
				caseData: {}
			},
			{
				id: 'GH-124-BA123152647756737457545',
				source: "ICH Health Medical",
				caseData: {}
			},
			{
				id: 'GH-1354-BA123152647756737457545',
				source: "ICH Health Medical",
				caseData: {}
			},
			{
				id: 'GH-1354-BA17545',
				source: "ICH Health Medical",
				caseData: {}
			},
		];

		return (
			<div className="case-overview">
				<h2>Case Overview</h2>
				<div className="case-demographics">Case demographics would appear here.</div>
				<div className="page-contents">
					<CaseList data={caseList}/>
					<div className="case-details">
						<p>Case details would appear here.</p>
					</div>
				</div>
			</div>
		);
	}
}

class CaseList extends Component {
	// Not a simple component, as there would be on-click functionality I'd wish to bind here.
	render() {
		const {data} = this.props;
		const caseListDisplay = data.map((row, index) => {
			return (
				<div key={index} className="case-list-item">
					<label>{row.id}</label>
					<label>{row.source}</label>
				</div>
			);
		})
		return (
			<div className="case-list">
				<h3>Case Data</h3>
				{caseListDisplay}
			</div>
		)
	}
}