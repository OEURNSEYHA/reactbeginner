import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        counter : 0
      }
      this.incrementHandler = this.incrementHandler.bind(this)
    }

    incrementHandler(){
        this.setState({
            counter: this.state.counter + 1,
        })
    }
  render() {
    return (
      <div>
        <button onClick={this.incrementHandler}> Click {this.state.counter} Time </button>
      </div>
    )
  }
}

export default ClassCounter