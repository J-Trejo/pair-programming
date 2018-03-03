import React from 'react';

class Form extends React.Component{
    render(){
        return(
            <form className="mx-auto">
                <div className="form-group">
                    <label for="selectMonth">Select Month</label>
                    <select className="form-control" id="selectMonth" aria-describedby="month" placeholder="Select Month">
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select>
                    <span className="expenseInput">
                        <label for="rentInput">Rent: </label>
                        <input type="text" id="rentInput" placeholder="$0.00" />
                    </span>
                    <span className="expenseInput">
                        <label for="utilitiesInput">Utilities: </label>
                        <input type="text" id="utilitiesInput" placeholder="$0.00" />
                    </span>
                    <span className="expenseInput">
                        <label for="transportationInput">Transportation: </label>
                        <input type="text" id="transportationInput" placeholder="$0.00" />
                    </span>
                    <span className="expenseInput">
                        <label for="groceriesInput">Groceries: </label>
                        <input type="text" id="groceriesInput" placeholder="$0.00" />
                    </span>
                    <span className="expenseInput">
                        <label for="entertainmentInput">Entertainment: </label>
                        <input type="text" id="entertainmentInput" placeholder="$0.00" />
                    </span>
                    <span className="expenseInput">
                        <label for="personalCareInput">Personal Care: </label>
                        <input type="text" id="personalCareInput" placeholder="$0.00" />
                    </span>
                    <span className="expenseInput">
                        <label for="healthCareInput">Health Care: </label>
                        <input type="text" id="healthCareInput" placeholder="$0.00" />
                    </span>
                    <span className="expenseInput">
                        <label for="debtInput">Debt/Loan Payments: </label>
                        <input type="text" id="debtInput" placeholder="$0.00" />
                    </span>
                    <span className="expenseInput">
                        <label for="savingsInput">Savings: </label>
                        <input type="text" id="savingsInput" placeholder="$0.00" />
                    </span>
                    <h4> Total Expenses: $ </h4>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        );
    }
}
export default Form;