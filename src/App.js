import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarGraph from './BarGraph';
import PieChart from './PieChart';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h2 className="mx-auto">Expense Tracker</h2>
          <div className="row">

            
            <div className="col-lg-6">
          <Form />
            </div>
        
            <div className="col-lg-6">
          <BarGraph />
          </div>
          </div>
          <div className="col">
            <PieChart />
          </div>


        </div>
      </div>
     
    );
  }
}

export default App;
