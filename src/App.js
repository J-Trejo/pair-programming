import React, { Component } from 'react';
import './App.css';
import './styles.css';
import BarGraph from './BarGraph';
import PieChart from './PieChart';
import Form from './Form';
// import CircularProgress from './CircularProgress';
import CircularProgressbar from 'react-circular-progressbar';
import {Route, Link, Switch} from 'react-router-dom';

class App extends Component {
  	constructor(){
		super();
		this.state = {
			formData:[0],
			selectValue: '',
			debt:3000,
			savings:4000,
			debtPerc:0,
			savingPer:0
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.goalsUpdated = this.goalsUpdated.bind(this);
	}

	handleSubmit(data , month){
		this.setState({
			formData: data,
			selectValue: month,
			
		});
	    
	}

	//One way of checking if the state was updated. We Pass an anonimous arrow function calling the funstion that does the calculations
	// handleSubmit(data, month) {
	// 	this.setState({
	// 		formData: data,
	// 		selectValue: month,

	// 	}, () => this.goalsUpdated());

	// }
	//Another way of checking if the state was updated
	componentDidUpdate(prevProps, prevState){
		//we check if the state has been updated, then we do all the calculations
		if (prevState.formData !== this.state.formData){
			this.goalsUpdated();
		}
	}
	goalsUpdated(){
		// All the caluculations to update the goals
		//These take the initial state so our initial values are not empty or NaN
		//Then take the value after the form submission and update the state.
		let newSavings = this.state.savings + this.state.formData[8];
		let newDebt = this.state.debt - this.state.formData[7];
		let newSavPerc = this.state.savingPer + (this.state.formData[8] / this.state.savings) * 100;
		let newDebtPerc = this.state.debtPerc + (this.state.formData[7] / this.state.debt) * 100;
		
		this.setState({
			savings: newSavings,
			debt: newDebt,
			savingPer: newSavPerc,
			debtPerc: newDebtPerc
		});
	}

	render() {
		

    	return (
			<div className="App">
				<div className="container-fluid">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<h1 className="navbar-brand"><img src="./icon.svg" alt="icon"/>Expense Tracker</h1>
						<Link className="nav-item" to="/"><a className="nav-link">Home</a></Link>
						<Link className="nav-item" to="/pieChart"><a className="nav-link">Expense Breakdown</a></Link>
					</nav>
					<div className="row">
						<Switch>
							<Route exact path="/" render={() =>
								<div>
									<Form handleSubmit={this.handleSubmit} formData={this.state.formData}/>
									<BarGraph formData={this.state.formData} selectValue={this.state.selectValue}/>
								</div>} />
							<Route path="/pieChart" render={() => <PieChart formData={this.state.formData} selectValue={this.state.selectValue}/>} />
						</Switch>
					</div>
					<hr/>
						<div>
							<h3>Goals</h3>
							<div className="goal">
							<h5 classname="monthTitle">Month: {this.state.selectValue}</h5>
								<p>
										Rent: {this.state.formData[0]}<br /> 
										Utilities: {this.state.formData[1]}<br /> 
										Transportation: {this.state.formData[2]}<br /> 
										Groceries: {this.state.formData[3]}<br /> 
										Entertainment: {this.state.formData[4]}<br /> 
										Personal Care: {this.state.formData[5]}<br /> 
										Health Care: {this.state.formData[6]}<br /> 
										Debt/Loan Payments: {this.state.formData[7]}<br /> 
										Savings: {this.state.formData[8]}<br /> 
										<hr />
										<strong>TOTAL: {this.state.formData.reduce(function (a, b) { return a + b })}</strong>
								</p>
							</div>
						<div className="goal">
							<h5 className="goalText">Saving Goal: <strong>4000</strong></h5>
							<hr />
							<div className='circle mx-auto'>
								<CircularProgressbar className="percentage" percentage={this.state.savingPer} /> 
							</div>
						</div>
						<div className="goal">
							<h5 className="goalText">Debt: <strong>{this.state.debt}</strong></h5>
							<hr/>
							<div className='circle mx-auto'>
								<CircularProgressbar className="percentage" percentage={this.state.debtPerc} /> 
							</div>	
									
						</div>
					</div>
				</div>
			</div>
			
    	);
  	}
}

export default App;
