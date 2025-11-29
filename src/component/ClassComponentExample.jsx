import React from "react";

class ClassComponentExample extends React.Component {
    constructor() {
        super();
        this.state = { counter: 0 };
    }

    render() {
        return (
            <>
                <h2>Class Component Example :</h2>
                <p>Counter : {this.state.counter}</p>
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>
                    Increase
                </button>
                <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>
                    Decrease
                </button>
            </>
        );
    }
}

export default ClassComponentExample;
