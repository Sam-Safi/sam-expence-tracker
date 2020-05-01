import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class NewExpense extends Component {
  state = {
    expense: {
      type: "",
      name: "",
      date: "",
      amount: 0
    }
  };

  handleChange = e => {
    //console.log(e.target.name + ': ' + e.target.value);

    this.setState({
      expense: {
        ...this.state.expense,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    // get the state values
    const { type, name, date, amount } = this.state.expense;

    if (type === "" || name === "" || date === "" || amount === "") {
      return;
    }
    // generate an object
    const newExpense = { ...this.state.expense };
    newExpense.id = Date.now();

    //
    this.props.createNewExpense(newExpense);
    // reset the form
    this.setState({
      expense: {
        type: "Choose one...",
        name: "",
        date: "",
        amount: 0
      }
    });
  };
  render() {
    return (
      <div className="auth-inner">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>Date:</Label>
            <Input
              className="form-control"
              type="date"
              name="date"
              onChange={this.handleChange}
              value={this.state.expense.date}
            />
          </FormGroup>

          <FormGroup>
            <Label>Description:</Label>
            <Input
              className="form-control"
              placeholder="Expense Name"
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.expense.name}
            />
          </FormGroup>

          <FormGroup>
            <Label>Amount:</Label>
            <Input
              className="form-control"
              type="text"
              placeholder="Expense Amount"
              name="amount"
              onChange={this.handleChange}
              value={this.state.expense.amount}
            />
          </FormGroup>

          <FormGroup>
            <Label>Type:</Label>
            <select
              className="form-control"
              name="type"
              onChange={this.handleChange}
              value={this.state.expense.type}
            >
              <option value="chooseOne">Choose one...</option>
              <option value="card">Card</option>
              <option value="cash">Cash</option>
              <option value="cryptocoin">Cryptocoin</option>
              <option value="other">Other</option>
            </select>
          </FormGroup>

          <FormGroup>
            <Button type="submit" className="btn btn-block btn-success">
              Add Expense
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default NewExpense;
