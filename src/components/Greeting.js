import React from "react";

import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";

class Greeting extends React.Component {
  constructor() {
    super();
    this.state = { isLoggedIn: true };
    this.loginHandler = this.loginHandler.bind(this);
  }
  loginHandler = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };
  render() {
    if (this.state.isLoggedIn)
      return <UserGreeting click={this.loginHandler} />;
    else return <GuestGreeting click={this.loginHandler} />;
  }
}

export default Greeting;
