import React, { Component } from 'react'
import ForwardingRef from './ForwardingRef'

class FrParentInput extends Component {
    constructor(props) {
      super(props)
        this.inputRef = React.createRef()
    }
    Clickhandler=()=>{
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <ForwardingRef ref ={this.inputRef}/>
        <button onClick={this.Clickhandler} > Focus Input </button>
      </div>
    )
  }
}

export default FrParentInput