import React, { Component } from "react";

class ScoreLesstha70 extends Component {
  // constructor() {
  //   super();
  // }
  players = [
    {
      name: "sid",
      score: 99,
    },
    {
      name: "nam",
      score: 999,
    },
    {
      name: "si",
      score: 9,
    },
    {
      name: "na",
      score: 99,
    },
    {
      name: "s",
      score: 0,
    },
    {
      name: "n",
      score: 9999,
    },
    {
      name: "cat",
      score: 19,
    },
    {
      name: "pam",
      score: 12,
    },
  ];
  
  players70 = [{}]

  render() {
    return this.props.players.map((item) => {
      if(item.score <= 70) {
        this.players70.push(item)
        // console.log(this.players70)
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

export default ScoreLesstha70;

