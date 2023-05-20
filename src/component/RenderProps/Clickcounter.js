import React, { Component } from 'react'

class Clickcounter extends Component {
  render() {
    const {incrementCount, count} = this.props;
    return (
      <>
        <button onClick = { incrementCount }> Clicked {count} times </button>
      </>
    )
  }
}

export default Clickcounter;