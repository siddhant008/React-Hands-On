import React, { Component } from "react";
import Cart from "./Cart";

class OnlineShopping extends Component {
    
    render() {
      const CartInfo=[
          {itemname:"Laptop", price: 80000},
          {itemname:"Tv", price: 120000},
          {itemname:"Washing Machine", price: 50000},
          {itemname:"Mobile", price: 30000},
          {itemname:"Fridge", price: 70000}
        ]
    
        return (
            <div className="mydiv">
                <h1>Items Ordered: </h1>
                <table>
                    <thead>
                        <td>Name</td>
                        <td>Price</td>
                    </thead>
                    <Cart item={CartInfo} /></table>
            </div>
        );
  }
}

export default OnlineShopping;