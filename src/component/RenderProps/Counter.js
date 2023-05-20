import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            count: 0
      }

      this.incrementCount = this.incrementCount.bind(this);

    }

    incrementCount(){
        this.setState( preveState => {
           return { count: this.state.count + 1 }
        })
    }


  render() {
    return (
      <>
        {this.props.render(this.state.count, this.incrementCount)}
      </>
    )
  }
}

/* <Counter
render = {(count, incrementCount) => <Clickcounter count = {count} incrementCount = {incrementCount}/> }
/> app.js component */ 
export default Counter