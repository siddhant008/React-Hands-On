import React, { Component } from "react";

class ComplainRegister extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", complaint: "", numberHolder: 69 };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ ...this.state, name: event.target.value });
  }

  handleChange2(event) {
    this.setState({ ...this.state, complaint: event.target.value });
  }

  handleSubmit(event) {
    // console.log(this.state);
    alert(
      "Thanks " +
        this.state.name +
        "\nYour complaint was submitted.\n Transaction ID is " +
        this.state.numberHolder +
        "."
    );
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <h1 className="complaintHeading">Register your complaints here!!!</h1>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Name:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label>Complaint:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="complaint"
                    value={this.state.complaint}
                    onChange={this.handleChange2}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input type="submit" value="Submit" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}
export default ComplainRegister;
