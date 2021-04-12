import logo from "./logo.svg";
import "./App.css";

function App() {
  const element = "Office Space";
  const sr = logo;
  const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space" />;
  const itemName = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
    },
    {
      Name: "DBS2",
      Rent: 70000,
      Address: "Chennai",
    },
    {
      Name: "DBS3",
      Rent: 80000,
      Address: "Chennai",
    },
  ];
  let colors = [];
  itemName.map((item) => {
    if (item.Rent <= 60000) colors.push("textRed");
    else colors.push("textGreen");
  });

  return (
    <div className="App">
      <h1>{element}, at Affordable Range</h1>
      {jsxatt}
      {itemName.map((item, index) => {
        return (
          <div>
            <h1>Name: {item.Name}</h1>
            <h3 className={colors[index]}>Rent: {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;
