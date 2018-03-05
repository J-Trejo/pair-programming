import React from 'react';

class Form extends React.Component{
    constructor(){
        super();
        this.state = {selectValue: ''}
        this.collectData = this.collectData.bind(this);
    }

    collectData(event){
        event.preventDefault();
        //const data = new FormData(event.target);
    //     let formData = {}
    //     const data = formData = {
    //         month: this.setState({selectValue: event.target.value}), 
    //         rent: this.refs.rentInput.value,
    //         utilities: this.refs.utilitiesInput.value,
    //         transportation: this.refs.transportationInput.value,
    //         groceries: this.refs.groceriesInput.value,
    //         entertainment: this.refs.entertainmentInput.value,
    //         personalCare: this.refs.personalCareInput.value,
    //         healthCare: this.refs.healthCareInput.value,
    //         debtLoanPayments: this.refs.debtInput.value,
    //         savings: this.refs.savingsInput.value,
    //   }

        let formData = []
        const data = formData = [
            this.setState({ selectValue: event.target.value }),
            this.refs.rentInput.value,
            this.refs.utilitiesInput.value,
            this.refs.transportationInput.value,
            this.refs.groceriesInput.value,
            this.refs.entertainmentInput.value,
            this.refs.personalCareInput.value,
            this.refs.healthCareInput.value,
            this.refs.debtInput.value,
            this.refs.savingsInput.value,
        ]
        console.log(data);
     
        this.props.handleSubmit(data)

       
    }

    render(){
        return(
            <div className="col-lg-6">
        
            <form   onSubmit={this.collectData}
                    className="mx-auto">
                <div className="form-group">
                    <label for="selectMonth">Select Month</label>
                    <select value={this.state.selectValue}
                            onSubmit={this.collectData}
                            className="form-control" ref="selectMonth" aria-describedby="month" placeholder="Select Month">
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
                    <span className="expenseInput">
                        <label for="rentInput">Rent: </label>
                        <input type="text" ref="rentInput" placeholder="$0.00" />
                    </span>
                    <span className="expenseInput">
                        <label for="utilitiesInput">Utilities: </label>
                        <input type="text" ref="utilitiesInput" placeholder="$0.00" />
                    </span>
                    <span className="expenseInput">
                        <label for="transportationInput">Transportation: </label>
                        <input type="text" ref="transportationInput" placeholder="$0.00" />
                    </span>
                    <span className="expenseInput">
                        <label for="groceriesInput">Groceries: </label>
                        <input type="text" ref="groceriesInput" placeholder="$0.00" />
                    </span>
                    <span className="expenseInput">
                        <label for="entertainmentInput">Entertainment: </label>
                        <input type="text" ref="entertainmentInput" placeholder="$0.00" />
                    </span>
                    <span className="expenseInput">
                        <label for="personalCareInput">Personal Care: </label>
                        <input type="text" ref="personalCareInput" placeholder="$0.00" />
                    </span>
                    <span className="expenseInput">
                        <label for="healthCareInput">Health Care: </label>
                        <input type="text" ref="healthCareInput" placeholder="$0.00" />
                    </span>
                    <span className="expenseInput">
                        <label for="debtInput">Debt/Loan Payments: </label>
                        <input type="text" ref="debtInput" placeholder="$0.00" />
                    </span>
                    <span className="expenseInput">
                        <label for="savingsInput">Savings: </label>
                        <input type="text" ref="savingsInput" placeholder="$0.00" />
                    </span>
                    <h4> Total Expenses: $ </h4>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        );
    }
}
export default Form;