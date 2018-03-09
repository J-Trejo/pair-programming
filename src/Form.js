import React from 'react';

class Form extends React.Component{
    constructor(){
        super();
        this.state = { 
            value:null
            
        };
        this.collectData = this.collectData.bind(this);
    }

    collectData(event){
        event.preventDefault();
        const month = this.refs.selectMonth.value;
        const data = [
            Number(this.refs.rentInput.value),
            Number(this.refs.utilitiesInput.value),
            Number(this.refs.transportationInput.value),
            Number(this.refs.groceriesInput.value),
            Number(this.refs.entertainmentInput.value),
            Number(this.refs.personalCareInput.value),
            Number(this.refs.healthCareInput.value),
            Number(this.refs.debtInput.value),
            Number(this.refs.savingsInput.value),
        ];
       console.log(data);
        
        this.refs.rentInput.value = '';
        this.refs.utilitiesInput.value = '';
        this.refs.transportationInput.value = '';
        this.refs.groceriesInput.value = '';
        this.refs.entertainmentInput.value ='';
        this.refs.personalCareInput.value ='';
        this.refs.healthCareInput.value ='';
        this.refs.debtInput.value = '';
        this.refs.savingsInput.value ='';
        this.refs.selectMonth.value = 'Select Month';
    
        this.props.handleSubmit(data , month);
    }

    render(){
        return(
                <div className="form-group">
                    <h4>Submit your Expenses</h4>
                    <select onSubmit={this.collectData} className="form-control" ref="selectMonth" aria-describedby="month">
                        <option value="Select Month">Select Month</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>   
                    <form onSubmit={this.collectData}>
                    
                        <span className="expenseInput">
                            <label htmlFor="rentInput">Rent: </label>
                            <input type="number" ref="rentInput" value={this.state.value} placeholder="$0.00" />
                        </span>
                        <span className="expenseInput">
                            <label htmlFor="utilitiesInput">Utilities: </label>
                        <input type="number" ref="utilitiesInput" value={this.state.value} placeholder="$0.00" />
                        </span>
                        <span className="expenseInput">
                            <label htmlFor="transportationInput">Transportation: </label>
                        <input type="number" ref="transportationInput" value={this.state.value} placeholder="$0.00" />
                        </span>
                        <span className="expenseInput">
                            <label htmlFor="groceriesInput">Groceries: </label>
                            <input type="number" ref="groceriesInput" placeholder="$0.00" />
                        </span>
                        <span className="expenseInput">
                            <label htmlFor="entertainmentInput">Entertainment: </label>
                            <input type="number" ref="entertainmentInput" placeholder="$0.00" />
                        </span>
                        <span className="expenseInput">
                            <label htmlFor="personalCareInput">Personal Care: </label>
                            <input type="number" ref="personalCareInput" placeholder="$0.00" />
                        </span>
                        <span className="expenseInput">
                            <label htmlFor="healthCareInput">Health Care: </label>
                            <input type="number" ref="healthCareInput" placeholder="$0.00" />
                        </span>
                        <span className="expenseInput">
                            <label htmlFor="debtInput">Debt/Loan Payments: </label>
                            <input type="number" ref="debtInput" placeholder="$0.00" />
                        </span>
                        <span className="expenseInput">
                            <label htmlFor="savingsInput">Savings: </label>
                            <input type="number" ref="savingsInput" placeholder="$0.00" />
                        </span>
                    <hr />    
                    <div className="total">    
                    <h5 className="float-left"> Total Expenses: $ </h5>
                    <h5>{this.props.formData.reduce(function(a,b){return a+b})}</h5>
                    </div>
                    <button type="number" className="btn ">Submit</button>
                </form>
            </div> 
            
        );
    }
}
export default Form;