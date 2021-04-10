import React, { Component } from "react";

class ScoreBelow70 extends Component {
  
  players70 = [{}]

  render() {
    return this.props.players.map((item) => {
      if(item.score <= 70) {
        this.players70.push(item)
        return (
          <div>
            <li>
              Mr. {item.name} <span>{item.score}</span>
            </li>
          </div>
        );
      }
    });


  }
}

export default ScoreBelow70;

