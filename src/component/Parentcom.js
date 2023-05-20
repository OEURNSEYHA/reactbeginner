import React, { PureComponent } from 'react'
import Regcom from './Regcom'
import Purecom from './Purecom'
class Parentcom extends PureComponent {
    constructor(props) {
      super(props)
      this.state = {
        name:'seyha'
      }
    }
   componentDidMount(){
    setInterval(()=>{
        this.setState({
            name:'seyha'
        })
   },500)
   }
  render() {
    console.log('*********************************parent Comp render*****************************')
    return (
      <div>
        <Regcom name={this.state.name}/>
        <Purecom name={this.state.name}/>
      </div>
    )
  }
}

export default Parentcom