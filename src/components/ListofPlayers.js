import React, { Component } from "react";

class ListofPlayers extends Component {
  // constructor() {
  //   super();
  // }
  // players = [
  //   {
  //     name: "sid",
  //     score: 99,
  //   },
  //   {
  //     name: "nam",
  //     score: 999,
  //   },
  //   {
  //     name: "si",
  //     score: 9,
  //   },
  //   {
  //     name: "na",
  //     score: 99,
  //   },
  //   {
  //     name: "s",
  //     score: 0,
  //   },
  //   {
  //     name: "n",
  //     score: 9999,
  //   },
  //   {
  //     name: "cat",
  //     score: 19,
  //   },
  //   {
  //     name: "pam",
  //     score: 12,
  //   },
  // ];
  
  // players70 = [{}]

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

// const ListofPlayers = () => (
//   players = [{
//       name: "sid",
//       score: 99
//     },
//     {
//       name: "nam",
//       score: 999
//     },
//   ]

//   return (
//     this.players.map((item) => {
//       return (
//         <div>
//           <li>Mr. {item.name} <span>{item.score}</span></li>
//         </div>
//       )
//     }
//   )
// )

// export default ListofPlayers
