import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarGraph from './BarGraph';
import PieChart from './PieChart';
import Form from './Form';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      formData: {
        month: '',
        rent: '',
        utilities: '',
        transportation: '',
        groceries: '',
        entertainment: '',
        personalCare: '',
        healthCare: '',
        debtLoanPayments: '',
        savings: ''
      },
    }

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(data){
    let formDataCopy = Array.from(this.state.formData);
    formDataCopy.push(data);
    this.setState({
      formData: formDataCopy
    })
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <nav>
            <Link to="/pieChart"><h3>Pie Chart</h3></Link>
          </nav>
          <h2 className="mx-auto">Expense Tracker</h2>
          <div className="row">
            <Switch>
              <Route exact path="/" render={() =>

                <div>
                  <Form
                    handleSubmit={this.handleSubmit}
                  />
                  <BarGraph
                    formData={this.state.formData}
                  />
                </div>} />

              <Route path="/pieChart" render={() =>

                <PieChart
                  handleSubmit={this.handleSubmit}
                  formData={this.state.formData}
                />} />

            </Switch>
          </div>
        </div>
      </div>
      
     
    );
  }
}

export default App;
