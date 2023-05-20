import React, { Component } from 'react'
import UpdatedComponent from './WithCounterHOC';

class HOC extends Component {
 
  render() {
    
    return (
      
      <div>
        <button onClick={ this.props.incrementCounter} > Clicked { this.props.counter} times</button>
       
      </div>
    )
  }
}

export default UpdatedComponent(HOC, 5);