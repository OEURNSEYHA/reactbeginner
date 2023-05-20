import React, { Component } from 'react'

export class Classprops extends Component {
  constructor(){
    super()
    this.state={
      message:false
    }
  }
  changeMessage(){
    this.setState({
      message:true,
    })
  }


  render() {
    // {} Object
    // [] Array
    const {name} = this.props;
    const {message} = this.state;
    return (
      <div style={{"font-size":"20px"}}>
          <h1> {name} </h1>{/*class props */}

          {/*class state  */}
          <button onClick={()=>{this.changeMessage()}}> Click Here </button>
         {
            message && <h1> hello everyone today am very happy</h1>

         }
         {this.props.children}
        
      </div>
    )
  }
}
export default Classprops;