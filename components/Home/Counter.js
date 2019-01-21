import React, { Component } from "react"

export default class Counter extends Component {
  increment = () => {
    this.props.increment()
  }

  decrement = () => {
    this.props.decrement()
  }

  reset = () => {
    this.props.reset()
  }

  render() {
    const { count } = this.props

    return (
      <div>
        <h1>Count: <span>{count}</span></h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
        `}</style>
      </div>

      
    )
  }
}