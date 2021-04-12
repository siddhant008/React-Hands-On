import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      errors: {
        fullName: "",
        email: "",
        password: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      console.log("name event");
    this.setState({ ...this.state, name: event.target.value.trim() });
  }

  handleChange2(event) {
    this.setState({ ...this.state, email: event.target.value.trim() });
  }

  handleChange3(event) {
    this.setState({ ...this.state, password: event.target.value.trim() });
  }

  validateForm = () => {
    if (this.state.name.length < 5) {
      this.setState({
        ...this.state,
        errors: {
          ...this.state.errors,
          fullName: "Full name must be 5 characters long!!"
        },
      });
      console.log("name");
      // console.log(this.state);
    } else {
      this.setState({
        ...this.state,
        errors: {
          ...this.state.errors,
          fullName: "",
        },
      });
      console.log("name else");
    }

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(this.state.email.toLowerCase())) {
      this.setState({
        ...this.state,
        errors: {
          ...this.state.errors,
          email: "Email is not valid.",
        },
      });
      console.log("mail");
    } else {
      this.setState({
        ...this.state,
        errors: {
          ...this.state.errors,
          email: "",
        },
      });
    }

    if (this.state.password.length < 7) {
      this.setState({
        ...this.state,
        errors: {
          ...this.state.errors,
          password: "Password must be 8 characters long.",
        },
      });
      console.log("password");
    } else {
      this.setState({
        ...this.state,
        errors: {
          ...this.state.errors,
          password: "",
        },
      });
    }

    console.log(this.state);
    if (
      this.state.errors.fullName === "" &&
      this.state.errors.email === "" &&
      this.state.errors.password === ""
    )
      return true;
    else return false;
  };

  handleSubmit(event) {
    event.preventDefault();
    if (this.validateForm()) {
      alert("valid Form");
    } else {
      if (this.state.errors.fullName !== "") alert(this.state.errors.fullName);
      if (this.state.errors.email !== "") alert(this.state.errors.email);
      if (this.state.errors.password !== "") alert(this.state.errors.password);
      // if(this.state.name.length >0 && this.state.email.includes('@') && this.state.email.includes('.') && this.state.password.length>7) {
      //     alert("Thanks ");
      // }

      // if(this.state.name.length<5) alert("Full name must be 5 characters long!!");
      // else if(!this.state.email.includes('@') || !this.state.email.includes('.')) alert("Email is not valid.");
      // else if(this.state.password.length<8) alert("Password must be 8 characters long.");
      // else
    }
  }
  render() {
    return (
      <div>
        <h1 className="complaintHeading">Register here!!!</h1>
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
                  <label>Email:</label>
                </td>
                <td>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange2}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label>Password:</label>
                </td>
                <td>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange3}
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
export default Register;
