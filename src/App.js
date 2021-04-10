import "./App.css";

import ListofPlayers from "./components/ListofPlayers";
import ScoreBelow70 from "./components/ScoreBelow70";
import OddPlayers from "./components/OddPlayers";
import EvenPlayers from "./components/EvenPlayers";
import ListofIndianPlayers from "./components/ListofIndianPlayers";

function App() {
  const players = [
    {
      name: "Jack",
      score: 50,
    },
    {
      name: "Michael",
      score: 70,
    },
    {
      name: "John",
      score: 40,
    },
    {
      name: "Ann",
      score: 61,
    },
    {
      name: "Elizabeth",
      score: 61,
    },
    {
      name: "Sachin",
      score: 95,
    },
    {
      name: "Dhoni",
      score: 100,
    },
    {
      name: "Virat",
      score: 84,
    },
    {
      name: "Jadeja",
      score: 64,
    },
    {
      name: "Raina",
      score: 75,
    },
    {
      name: "Rohit",
      score: 80,
    },
  ];

  const IndianTeam = [
    "Sachin1",
    "Dhoni2",
    "Virat3",
    "Rohit4",
    "Yuvaraj5",
    "Raina6",
  ];

  const T20Players = ["First Player", "Second Player", "Third Player"];
  const RanjiTrophyPlayers = ["Fourth Player", "fifth player", "sixth player"];

  const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];
  var flag = false;
  if (flag) {
    return (
      <div className="App">
        <h1>List of Players</h1>
        <ListofPlayers players={players} />
        <h1>List of Players having score less than 70</h1>
        <ScoreBelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>Odd Players</h1>
        {OddPlayers(IndianTeam)}
        <hr/>
        <h1>Even Players</h1>
        {EvenPlayers(IndianTeam)}
        <hr />
        <h1>List of Indian Player merged</h1>
        <ListofIndianPlayers indianPlayers={IndianPlayers} />
      </div>
    );
  }
}

export default App;
