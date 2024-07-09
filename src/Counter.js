import React, { Component } from "react";

// useState 이용해서 컴포넌트 동적 값 관리하기
class Counter extends Component {
    state = {
        counter : 0,
        fixed : 1
    };

    handleIncrease = () => {
        this.setState({
            counter : this.state.counter + 1
        });
    };

    handleDecrease = () => {
        this.setState({
            counter : this.state.counter - 1
        });
    };


    render() {
        return (
            <>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값 : {this.state.fixed}</p>
            </>
        );
    }
}

export default Counter;