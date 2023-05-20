import React, { Component } from 'react'
import Children from'../../src/component/Child_Method_As_Props'
class Method_As_Props extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
      parent: 'Seyha Father', 
    }

    this.HandlingChildren = this.HandlingChildren.bind(this)
  }
  
  HandlingChildren (childrenName){
  //  alert(` hello from ${this.state.parent} to ${ childrenName }`)
    this.setState({
      parent:`children ${childrenName}`,
    })
  }

  render(){
    const { parent } = this.state;
    return (
      <div>
          <h1> {parent}  </h1>
          <Children HandlingChildren = { this.HandlingChildren }/>
      </div>
    )
  }

}
export default Method_As_Props