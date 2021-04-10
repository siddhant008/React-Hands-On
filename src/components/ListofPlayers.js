import React, { Component } from "react";

class ListofPlayers extends Component {
  render() {
    return this.props.players.map((item) => {
      return (
        <div>
          <li>
            Mr. {item.name} <span>{item.score}</span>
          </li>
        </div>
      );
    });
  }
}

export default ListofPlayers;
