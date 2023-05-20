import React, { Component } from 'react'

export class ComponentRef extends Component {
    constructor(props) {
      super(props)
        this.inputRef = React.createRef()
    }

    focusInput(){
        this.inputRef.current.focus()
    }
  componentDidMount(){
    this.inputRef.current.focus()
  }
  render() {
    return (
      <div>
        <input
            type='text'
            ref = {this.inputRef}    
            placeholder="please"
        />
       
      </div>
    )
  }
}

export default ComponentRef