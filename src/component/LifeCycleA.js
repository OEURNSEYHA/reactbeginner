import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'seyha',
      }
      console.log('LifecycleA constructor')
    }
    // 
    static getDerivedStateFromProps(props, state){
        console.log('LisfecycleA getDerivedstateFromProps')
        return null
    }
    componentDidMount(){
        console.log('lifecycleA componentDidmount')
    }
    shouldComponentUpdate(){
      console.log('LifecycleA render');
      return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('LifecycleA getSnampshowtBeforeUpdate ')
      return null
    }
    componentDidUpdate(){
      console.log('LifecycleA componentDidUpdate');
    }
    changeState= () =>{
      this.setState({
        name: 'codevolution',
      })
    }
  render() {
    console.log('lifecycleA render')
    return (
      <div>
        <button onClick={this.changeState}> changeState</button>
        <LifeCycleB/>
      </div>
    )
  }
}

export default LifeCycleA;