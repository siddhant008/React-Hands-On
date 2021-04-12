import React, { Component } from "react";

class CounterComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {counter:0};
    
        this.incrementHandler = this.incrementHandler.bind(this);
        this.decrementHandler = this.decrementHandler.bind(this);
      }
    

    incrementHandler = () => {
        this.setState( {counter : this.state.counter+1});
        alert("Hello Member 1");
    }

    decrementHandler = () => {
        this.setState( {counter : this.state.counter-1});
        alert("Hello Member 1");
    }

    welcomeHandler = (msg) => {
        alert(msg);
    }

    onPressHandler = () => {
        alert("I was clicked!!");
    }

    render() {
        return(
            <div>
                {this.state.counter}
                <button onClick={this.incrementHandler}>Increment</button>
                <button onClick={this.decrementHandler}>Decrement</button>
                <button onClick={() => this.welcomeHandler("welcome")}>Say Welcome</button>
                <button onClick={this.onPressHandler}>Click on Me</button>
            </div>
        )
    }

}

export default CounterComponent;