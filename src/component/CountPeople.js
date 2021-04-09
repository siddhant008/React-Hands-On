import React, { Component } from "react";

class CountPeople extends Component {
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0,
      c: 0,
    };
  }

  UpdateEntry = () => {
    this.setState((prevState, props) => {
      return { entrycount: prevState.entrycount + 1 };
    });
  };

  UpdateExit = () => {
    this.setState((prevState, props) => {
      return { exitcount: prevState.exitcount + 1 };
    });
  };
  render() {
    return (
      <div>
          <div className="displayPane">
        <button onClick={this.UpdateEntry}>Login</button>
        <p>{this.state.entrycount} People Entered!!!</p>
        </div>
        <div className="displayPane">
        <button onClick={this.UpdateExit}>Exit</button>
        <p>{this.state.exitcount} People Left!!!</p>
        </div>
      </div>
    );
  }
}

export default CountPeople;
