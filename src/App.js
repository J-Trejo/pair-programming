import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarGraph from './BarGraph';
import PieChart from './PieChart';
import Form from './Form';
import {Route, Link, Switch} from 'react-router-dom';

class App extends Component {
  	constructor(){
		super();
		this.state = {
			formData:[0],
			selectValue: '' 
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(data , month){
		
		this.setState({
		formData: data,
		selectValue: month
		});
	}

  	render() {
    	return (
			<div className="App">
					<div className="container-fluid">
							<nav className="navbar navbar-expand-lg navbar-light bg-light">
								<h1 className="navbar-brand"><img src="./icon.svg" alt="icon"/>Expense Tracker</h1>
								<Link className="nav-item" to="/"><a className="nav-link">Home</a></Link>
								<Link className="nav-item" to="/pieChart"><a className="nav-link">Pie Chart</a></Link>
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
							<h3>Forecast</h3>
						</div>
				</div>
			</div>
    	);
  	}
}

export default App;
