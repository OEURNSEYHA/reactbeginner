import React, { Component } from 'react'
import { UserConsumer } from './Context'

export class ComponentF extends Component {
  render() {
    return (
      <>
       <UserConsumer>
          {
            username =>{
             return <h1> hello {username}</h1>
            }
          }
       </UserConsumer>
      </>
    )
  }
}

export default ComponentF