import React, { Component } from 'react'

class RefsDemo extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.cbRef = null
    this.SetCbRef = element =>{
      this.cbRef = element
    }

    this.ClickHandler = this.ClickHandler.bind(this)
  }

  componentDidMount(){
    if(this.cbRef){
      this.cbRef.focus();
    }
    // this.inputRef.current.focus();
  }

  ClickHandler(){
    alert(this.inputRef.current.value);
  }
  render() {
    return (
      <div>
        <input ref={this.inputRef} />
        <input ref={this.SetCbRef} />
        <button onClick={this.ClickHandler}>  Click For focus </button>
      </div>
    )
  }
}

export default RefsDemo