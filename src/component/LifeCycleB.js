import React, { Component } from 'react';

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'seyha',
      }
      console.log('LifeCycleB constructor')
    }
    // 
    static getDerivedStateFromProps(props, state){
        console.log('LLifeCycleB getDerivedstateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleB componentDidmount')
    }
    shouldComponentUpdate(){
        console.log('LifeCycleB render');
        return true
      }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleB getSnampshowtBeforeUpdate ')
        return null
    }
    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate');
    }
  render() {
    console.log('LifeCycleBrender')
    return (
      <div>

      </div>
    )
  }
}

export default LifeCycleB;