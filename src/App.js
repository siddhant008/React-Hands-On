import logo from './logo.svg';
import './App.css';

import  ListofPlayers from "./components/ListofPlayers";
import  ScoreLessthan70 from "./components/ScoreLessthan70";
import  OddPlayers from "./components/OddPlayers";
import EvenPlayers from './components/EvenPlayers';
import ListofIndianPlayers from './components/ListofIndianPlayers';
// import  IndianPlayers from "./components/IndianPlayers";


function App() {
  const players = [
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

  const IndianTeam = ['one', 'two', 'three', 'four', 'five', 'six']

  const T20Players=['First Player', 'Second Player', 'Thurd Players']
  const RanjiTrophyPlayers = ['Fourth Player', 'fifth player', 'sixth player']

 const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers]

  return (
    <div>
      <h3>List of Players</h3>
      <ListofPlayers players={players} />
      <h3>List of Players having score less than 70</h3>
      <ScoreLessthan70 players={players}/>

      <div>
        <h3>Indian Teams</h3>
        <h4>Odd Players</h4>
        {OddPlayers(IndianTeam)}
        <h4>Even Players</h4>
        {EvenPlayers(IndianTeam)}
        <hr />
        <h3>List of Indian Player merged</h3>
        <ListofIndianPlayers indianPlayers={IndianPlayers} />
      </div>

    </div>
  );
}

export default App;
