import React, { Component } from 'react'
import ComponentRef from './ComponentRef'

export class FocusInput extends Component {
    constructor(props) {
      super(props)
      this.componentRef = React.createRef()
    }
    Clickhandler = () =>{
      this.componentRef.current.focusInput()
    }
  render() {
    return (
      <div>
        <ComponentRef ref={this.componentRef} />
        <button onClick={this.Clickhandler}> Focus Input</button>
      </div>
    )
  }
}

export default FocusInput