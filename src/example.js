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

collectData(event){
    event.preventDefault();
    //const data = new htmlFormData(event.target);
    //     let htmlFormData = {}
    //     const data = htmlFormData = {
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
    // this.setState({ selectValue: event.target.value })
    let htmlFormData = []
    const data = htmlFormData = [
        event.target.value,
        typeof Number(this.refs.rentInput.value),
        typeof this.refs.utilitiesInput.value,
        this.refs.transportationInput.value,
        this.refs.groceriesInput.value,
        this.refs.entertainmentInput.value,
        this.refs.personalCareInput.value,
        this.refs.healthCareInput.value,
        this.refs.debtInput.value,
        this.refs.savingsInput.value,
    ];
    console.log(data);

    this.props.handleSubmit(data);
}
