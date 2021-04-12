import React, { Component } from "react";

class CurrencyConverter extends Component {
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Converting to Euro. Amount is " + this.state.value * .011);
    event.preventDefault();
  }
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div>
        <h1 className="currencyHeading">Currency Converter!!!!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <br />
          <label>Currency:</label>
          <input type="text" name="currency" /> <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default CurrencyConverter;
