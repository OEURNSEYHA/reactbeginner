import React, { Component } from 'react'

class State extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 0,
    }
  }

  // ChangeMessage = ()=> {
  //   this.setState(
  //     {
  //       message:'yes hi NoNa',
  //     }
  //   )
  // }

  CountIncrement(){
    // let counter =  this.state.message + 1;
    this.setState((p)=>(
      {
        message: p.message  + 1,
      })
      
    )
    
  }

  CountFive () {
    this.CountIncrement();
    this.CountIncrement();
    this.CountIncrement();
    this.CountIncrement();
    this.CountIncrement();
  }

  
  render() {
    return (
      <div>
            <h1>  
                Count : {this.state.message} <br></br>
            </h1>
            <button onClick={ ()=>(this.CountFive() )} > Click  </button>
           
      </div>
    )
  }
}

export default State;