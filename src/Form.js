import React from 'react';

class Form extends React.Component{
    constructor(){
        super();
        this.state = { selectValue: 'Select Month'}
        this.collectData = this.collectData.bind(this);
        this.selecthandle = this.selecthandle.bind(this);
    }

    selecthandle(){
        
        const month = this.refs.selectMonth.value;
        
        this.props.monthSubmit(month);
    }    
   
    collectData(event){
        event.preventDefault();
        let htmlFormData = []
        const data = htmlFormData = [
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
       //console.log(data);
     
        this.props.handleSubmit(data);
    }

    render(){
        return(
                <div className="form-group">
                    <h4>Submit your Expenses</h4>
                    <select onChange={this.selecthandle} className="form-control" ref="selectMonth" aria-describedby="month">
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
                            <input type="text" ref="rentInput" placeholder="$0.00" />
                        </span>
                        <span className="expenseInput">
                            <label htmlFor="utilitiesInput">Utilities: </label>
                            <input type="text" ref="utilitiesInput" placeholder="$0.00" />
                        </span>
                        <span className="expenseInput">
                            <label htmlFor="transportationInput">Transportation: </label>
                            <input type="text" ref="transportationInput" placeholder="$0.00" />
                        </span>
                        <span className="expenseInput">
                            <label htmlFor="groceriesInput">Groceries: </label>
                            <input type="text" ref="groceriesInput" placeholder="$0.00" />
                        </span>
                        <span className="expenseInput">
                            <label htmlFor="entertainmentInput">Entertainment: </label>
                            <input type="text" ref="entertainmentInput" placeholder="$0.00" />
                        </span>
                        <span className="expenseInput">
                            <label htmlFor="personalCareInput">Personal Care: </label>
                            <input type="text" ref="personalCareInput" placeholder="$0.00" />
                        </span>
                        <span className="expenseInput">
                            <label htmlFor="healthCareInput">Health Care: </label>
                            <input type="text" ref="healthCareInput" placeholder="$0.00" />
                        </span>
                        <span className="expenseInput">
                            <label htmlFor="debtInput">Debt/Loan Payments: </label>
                            <input type="text" ref="debtInput" placeholder="$0.00" />
                        </span>
                        <span className="expenseInput">
                            <label htmlFor="savingsInput">Savings: </label>
                            <input type="text" ref="savingsInput" placeholder="$0.00" />
                        </span>
                    <h5 className="float-left"> Total Expenses: $ </h5>
                    <h5>Value</h5>
                    
                    <button type="submit" className="btn ">Submit</button>
                </form>
            </div> 
            
        );
    }
}
export default Form;