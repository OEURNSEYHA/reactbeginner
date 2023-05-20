import React, { Component } from 'react'

class EventBinding extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      message: true,
    }
    // this.handling =  this.handling.bind(this)
  }

  handling(){
    let opersite   =  !this.state.message;
    this.setState({
      message: opersite,
    })
    console.log(this.state.message)
  }
  render() {
    const {message} = this.state;
    return (
      <div>
        <h1>
         {message ?  'bye bye' : ' hello '}
        </h1>

        <button onClick={ ()=> this.handling() }> Click </button>
      </div>
    )
  }
}

export default EventBinding