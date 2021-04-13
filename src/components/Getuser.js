import React, { useState, useEffect } from "react";
import axios from "axios";

function Getuser() {
  const [person, setPerson] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      axios.get("https://api.randomuser.me/").then((res) => {
        setPerson(res.data.results[0]);
        setLoading(false);
      });
    }
    fetchData();
  }, []);

  if (loading) {
    console.log(person);
    console.log(loading);
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <h1>
          {person.name.title} {person.name.first} {person.name.last}
        </h1>
        <img
          src={person.picture.large}
          width="25%"
          height="25%"
          alt="person pic"
        />
      </div>
    );
  }
}

export default Getuser;
