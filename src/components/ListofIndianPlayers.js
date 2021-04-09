import React from "react";

function ListofIndianPlayers(props) {
  console.log(props.indianPlayers)
  return(
    props.indianPlayers.map((item, index) => {
      {console.log(item)}
        return(<li>{item}</li>)
    })
  )  
} 


export default ListofIndianPlayers;